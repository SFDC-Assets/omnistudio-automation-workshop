#!/bin/sh

#move to the specified directory
cd "$3"
vlocity -sfdx.username $1 -job "$2" packDeploy --force