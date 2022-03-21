wget https://github.com/SalesforceCommerceCloud/sfcc-ci/releases/download/v2.6.0/sfcc-ci-linux

chmod +x ./sfcc-ci-linux

sudo mv ./sfcc-ci-linux /usr/local/bin/sfcc-ci#!/bin/sh

docker build . -t sfidemodx-dear

docker tag sfidemodx-dear registry.heroku.com/sfidemodx-dear/web

docker push registry.heroku.com/sfidemodx-dear/web

heroku container:release web --app=sfidemodx-dear