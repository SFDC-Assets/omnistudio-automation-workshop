#!/usr/bin/env bash
# https://hosted-scratch.herokuapp.com/launch?template=https://github.com/SFDC-Assets/omnistudio-automation-workshop

#create scratch org
sf demoutil org create scratch -f config/project-scratch-def.json -d 30 -s -p omni -e studio.workshop
sf force:org:open -o deploybot@dxhub.org -r
sf package install -p 04t4W000003ChfP --wait 20 -r
sf package install -p 04tHn000001dvY4 --wait 30
sf package install -p 04t1E000001Iql5 --wait 2
sf demoutil user password set -p salesforce1 -g User -l User
sf org assign permset -n FinancialServicesCloudStandard
sf org assign permset -n FinancialServicesCloudExtension

sf community create --name 'ProductInterest' --templatename 'Customer Service' --urlpathprefix ProductInterestHome

#push the utility metadata service class
sf project deploy start -m ApexClass:MetadataService

#set the remote sites
# sf apex run -f dparemoteSites.cls

sf project deploy start -m Settings:Security
sf project deploy start -d force-app -c
sf project deploy start -d omnideploy -c
sf project deploy start -d community -c

sf org assign permset -n Slack_Permissions

#open says me.
sf org open
