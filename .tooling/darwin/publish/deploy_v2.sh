wget https://github.com/SalesforceCommerceCloud/sfcc-ci/releases/download/v2.6.0/sfcc-ci-linux

chmod +x ./sfcc-ci-linux

sudo mv ./sfcc-ci-linux /usr/local/bin/sfcc-ci#!/bin/sh

docker build . -t semanticdx

docker tag semanticdx registry.heroku.com/semanticdx/web

docker push registry.heroku.com/semanticdx/web

heroku container:release web --app=semanticdx