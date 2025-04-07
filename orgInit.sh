#!/usr/bin/env bash

# https://hosted-scratch.herokuapp.com/launch?template=https://github.com/SFDC-Assets/omnistudio-automation-workshop
sf force:org:open -o deploybot@dxhub.org -r
#create scratch org
sf shane:org:create -f config/project-scratch-def.json -d 30 -s --wait 60 --userprefix omni -o studio.workshop
