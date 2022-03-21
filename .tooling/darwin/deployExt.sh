#!/bin/sh

docker build . -t semanticdx-ext

docker tag semanticdx-ext registry.heroku.com/semanticdx-ext/web

docker push registry.heroku.com/semanticdx-ext/web

heroku container:release web --app=semanticdx-ext