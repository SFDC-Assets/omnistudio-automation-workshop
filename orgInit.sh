#!/usr/bin/env bash

#create scratch org
sfdx force:org:create -s -f config/project-scratch-def.json -d 14 -s -w 60

#install OmniStudio
sfdx force:package:install -p 04t4W000002kdlN -w 45 -r 

#push the utility metadata service class
sfdx force:source:deploy -m ApexClass:MetadataService

#set the remote sites
sfdx force:apex:execute -f dparemoteSites.cls

#open says me.
sfdx force:org:open