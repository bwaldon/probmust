library(jsonlite)
library(tidyverse)

setwd(dirname(rstudioapi::getActiveDocumentContext()$path))

must <- fromJSON("result1_pam.json")

estimate_mode <- function(s) {
  d <- density(s)
  return(d$x[which.max(d$y)])
}

base = 6
expand = 4

premise1 <- ggplot(must$posteriors$support, aes(x=premise1prior)) + 
  geom_density() +
  theme_bw() +
  theme(text = element_text(size = base * expand / 2.1, face = "bold")) +
  xlab(element_blank()) +
  ylab('Density')
ggsave("result2pampremise1.pdf",width = 2, height = 2, units = "in", dpi=1000)

premise2 <- ggplot(must$posteriors$support, aes(x=premise2prior)) + 
  geom_density() +
  theme_bw() +
  theme(text = element_text(size = base * expand / 2.1, face = "bold")) +
  xlab(element_blank()) +
  ylab('Density') 
ggsave("result2pampremise2.pdf",width = 2, height = 2, units = "in", dpi=1000)

commitment <- ggplot(must$posteriors$support, aes(x=commitment)) + 
  geom_density() +
  theme_bw() +
  theme(text = element_text(size = base * expand / 2.1, face = "bold")) +
  xlab(element_blank()) +
  ylab('Density')
ggsave("result2pamcommitment.pdf",width = 2, height = 2, units = "in", dpi=1000)

theta <- ggplot(must$posteriors$support, aes(x=theta)) + 
  geom_density() +
  theme_bw() +
  theme(text = element_text(size = base * expand / 2.1, face = "bold")) +
  xlab(element_blank()) +
  ylab('Density')
ggsave("result2pamtheta.pdf",width = 2, height = 2, units = "in", dpi=1000)

hist(must$posteriors$support$premise2prior)

estimate_mode(must$priors$support$premise2prior)
estimate_mode(must$posteriors$support$premise1prior)
