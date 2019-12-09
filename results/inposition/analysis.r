library(tidyverse)
library(bootstrap)
library(brms)
library(ordinal)

setwd(dirname(rstudioapi::getActiveDocumentContext()$path))

d <- read_csv("pilot_results.csv")
d <- read_csv("results.csv")

# HELPER SCRIPTS

dodge = position_dodge(.9)

theta <- function(x,xdata,na.rm=T) {mean(xdata[x],na.rm=na.rm)}

ci.low <- function(x,na.rm=T) {
  mean(x,na.rm=na.rm) - quantile(bootstrap(1:length(x),1000,theta,x,na.rm=na.rm)$thetastar,.025,na.rm=na.rm)}
ci.high <- function(x,na.rm=T) {
  quantile(bootstrap(1:length(x),1000,theta,x,na.rm=na.rm)$thetastar,.975,na.rm=na.rm) - mean(x,na.rm=na.rm)}

# DO EXCLUSIONS

d <- d %>%
  filter(!(is.na(condition))) %>%
  filter(attncheck_response == attncheck_correct)

# REORDER

d$condition <- fct_relevel(d$condition, "control")

# MEANS AND CONFINTS BY VIGNETTTE + CONDITION

byVignetteConditionKind <- d %>%
  group_by(vignette, condition) %>%
  summarize(Mean = mean(rating), 
            CILow =ci.low(rating),
            CIHigh =ci.high(rating)) %>%
  ungroup() %>%
  mutate(YMin = Mean - CILow,
         YMax = Mean + CIHigh)

# VISUALIZE - CONDITION x EXPRESSION

ggplot(byVignetteConditionKind, aes(x=vignette, y=Mean, fill = condition)) +
  theme_bw() +
  scale_fill_grey() +
  geom_bar(stat="identity",position = "dodge") +
  theme(axis.text.x=element_text(angle=20,hjust=1,vjust=1)) +
  geom_errorbar(aes(ymin=YMin,ymax=YMax),size = 0.25,width= 0.025,position = dodge) +  
  labs(x = "Vignette", y = "Mean rating", fill = "Condition") 

ggsave("plot.png", width = 6, height = 3, units = "in")

## MAXIMAL RANDOM EFFECTS STRUCTURE, USING DEFAULT UNINFORMATIVE OR WEAKLY INFORMATIVE PRIORS

m <- brm(
  rating ~ condition + (1 + condition|vignette), 
  data = d %>% filter(condition %in% c("bare","must")),
  control = list(adapt_delta = 0.99, max_treedepth = 15),
  family = cumulative("logit"),
  seed = 123
)

## NO RANDOM EFFECTS STRUCTURE, USING DEFAULT UNINFORMATIVE OR WEAKLY INFORMATIVE PRIORS (FOR TESTING)

m_noranef <- brm(
  rating ~ condition, 
  data = d,
  control = list(adapt_delta = 0.99, max_treedepth = 15),
  family = cumulative("logit"),
  seed = 123
)

## NON-BAYESIAN ORDINAL LOG REGRESSION, MAX RANEF STRUCTURE (FOR EXPLORATORY COMPARISON)

m_nb <- clmm(factor(rating) ~ condition + (1 + condition|vignette), 
             data = d %>% filter(condition %in% c("bare","must")), link = "logit")

summary(m)

fixed_effects <- data.frame(fixef(m))
