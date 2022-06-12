#!/usr/bin/env bash

#create scratch org
sfdx force:org:create -s -f config/project-scratch-def.json -d 14 -s -w 60

#install OmniStudio - 238
sfdx force:package:install -p 04t4W000002ke26QAA -w 45 -r 

#push the utility metadata service class
sfdx force:source:deploy -m ApexClass:MetadataService

#set the remote sites
sfdx force:apex:execute -f dparemoteSites.cls

#Puppateer to set OmniStudio Metadata to TRUE via UI  and enable the  standard runtime
node run.js

#Sample metadata examples into the org - basic hello world.
sfdx force:source:deploy -m OmniUiCard,OmniScript,OmniIntegrationProcedure,OmniDataTransform

#open says me.
sfdx force:org:open