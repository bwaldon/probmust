library(jsonlite)
library(tidyverse)

setwd(dirname(rstudioapi::getActiveDocumentContext()$path))

must <- fromJSON("model2.json")

estimate_mode <- function(s) {
  d <- density(s)
  return(d$x[which.max(d$y)])
}

premise1 <- ggplot(must$posteriors$support, aes(x=premise1prior)) + 
  geom_density() +
  xlab('Value') +
  ylab('Density')
ggsave("premise1.jpeg",width = 2, height = 2, units = "in", dpi=1000)

premise2 <- ggplot(must$posteriors$support, aes(x=premise2prior)) + 
  geom_density() +
  xlab('Value') +
  ylab('Density')
ggsave("premise2.jpeg",width = 2, height = 2, units = "in", dpi=1000)

commitment <- ggplot(must$posteriors$support, aes(x=commitment)) + 
  geom_density() +
  xlab('Value') +
  ylab('Density')
ggsave("commitment.jpeg",width = 2, height = 2, units = "in", dpi=1000)

theta <- ggplot(must$posteriors$support, aes(x=theta)) + 
  geom_density() +
  xlab('Value') +
  ylab('Density')
ggsave("theta.jpeg",width = 2, height = 2, units = "in", dpi=1000)

hist(must$posteriors$support$premise2prior)




estimate_mode(must$priors$support$premise2prior)
estimate_mode(must$posteriors$support$premise1prior)
