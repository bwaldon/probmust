library(tidyverse)
library(jsonlite)

setwd(dirname(rstudioapi::getActiveDocumentContext()$path))
stims <- read.csv("inposition.csv")

stims_json <- toJSON(stims)
write_file(stims_json, "inposition.json")

stims <- read.csv("completestory.csv")

stims_json <- toJSON(stims)
write_file(stims_json, "completestory.json")

