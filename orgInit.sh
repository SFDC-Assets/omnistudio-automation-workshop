#!/usr/bin/env bash

# https://hosted-scratch.herokuapp.com/launch?template=https://github.com/SFDC-Assets/omnistudio-automation-workshop

#create scratch org
sfdx shane:org:create -f config/project-scratch-def.json -d 30 -s --wait 60 --userprefix omni -o studio.workshop

sfdx force:package:install --package=04t1E00000127We --wait 20
sfdx force:package:install --package=04t1E000001Iql5 --wait 2
sfdx shane:user:password:set -p salesforce1 -g User -l User
sfdx force:user:permset:assign -n FinancialServicesCloudStandard
sfdx force:user:permset:assign -n FinancialServicesCloudExtension

sfdx force:community:create --name 'ProductInterest' --templatename 'Customer Service' --urlpathprefix ProductInterestHome

#install OmniStudio - 238
sfdx force:package:install --package=04t4W000002keqb --wait 20 -r

#push the utility metadata service class
sfdx force:source:deploy -m ApexClass:MetadataService

#set the remote sites
sfdx force:apex:execute -f dparemoteSites.cls

#Puppeteer to set OmniStudio Metadata to TRUE via UI  and enable the  standard runtime
node run.js

#Sample metadata examples into the org - basic hello world.
# sfdx force:source:deploy -m OmniUiCard,OmniScript,OmniIntegrationProcedure,OmniDataTransform
# sfdx force:source:push -f

sfdx force:source:deploy -m Settings:Security
sfdx force:source:deploy -p force-app
sfdx force:source:deploy -p omnideploy
sfdx force:source:deploy -p community

sfdx force:user:permset:assign -n Slack_Permissions

#open says me.
sfdx force:org:open
