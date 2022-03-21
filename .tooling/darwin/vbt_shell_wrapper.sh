#!/bin/sh

#move to the specified directory
cd "$3"
vlocity packExport -sfdx.username $1 -job "$2" -defaultMaxParallel 10 --force