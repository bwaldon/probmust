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

premise1 <- ggplot(data.frame(must$premise1)) + 
  geom_bar(aes(x = support, y = probs),stat="identity") +
  # stat_smooth(aes(y = probs,x = support), method = "gam",se = FALSE, formula = y ~ s(x, k = 10)) +
  theme_bw() +
  theme(text = element_text(size = base * expand / 2.1, face = "bold")) +
  xlab(element_blank()) +
  ylab('Density')
ggsave("result1pampremise1.pdf",width = 2, height = 2, units = "in", dpi=1000)

premise2 <- ggplot(data.frame(must$premise2)) + 
  geom_bar(aes(x = support, y = probs),stat="identity") +
  # stat_smooth(aes(y = probs,x = support), method = "gam",se = FALSE, formula = y ~ s(x, k = 10)) +
  theme_bw() +
  theme(text = element_text(size = base * expand / 2.1, face = "bold")) +
  xlab(element_blank()) +
  ylab('Density')
ggsave("result1pampremise2.pdf",width = 2, height = 2, units = "in", dpi=1000)

commitment <- ggplot(data.frame(must$commitment)) + 
  geom_bar(aes(x = support, y = probs),stat="identity") +
  # stat_smooth(aes(y = probs,x = support), method = "gam",se = FALSE, formula = y ~ s(x, k = 7)) +
  theme_bw() +
  theme(text = element_text(size = base * expand / 2.1, face = "bold")) +
  xlab(element_blank()) +
  ylab('Density')
ggsave("result1pamcommitment.pdf",width = 2, height = 2, units = "in", dpi=1000)

theta <- ggplot(data.frame(must$theta)) + 
  geom_bar(aes(x = support, y = probs),stat="identity") +
  # stat_smooth(aes(y = probs,x = support), method = "gam",se = FALSE, formula = y ~ s(x, k = 7)) +
  theme_bw() +
  theme(text = element_text(size = base * expand / 2.1, face = "bold")) +
  xlab(element_blank()) +
  ylab('Density')
ggsave("result1pamtheta.pdf",width = 2, height = 2, units = "in", dpi=1000)

