FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build-env
WORKDIR /app
COPY . .

#RUN rm -rf sfcc-ci-linux
# Add the SFCC-CI as part of the image:
RUN wget https://github.com/SalesforceCommerceCloud/sfcc-ci/releases/download/v2.6.0/sfcc-ci-linux
RUN chmod +x ./sfcc-ci-linux
RUN mv ./sfcc-ci-linux /usr/local/bin/sfcc-ci

RUN apt-get update; \
    apt-get install -y curl gnupg; \
    curl -sL https://deb.nodesource.com/setup_17.x | bash -; \
    apt-get install -y nodejs; \
    rm -rf /var/lib/apt/lists/* \
    npm -v; \
    npm install sfdx-cli -global; \
    npm install vlocity -global; \
    node -v;

#expose ports
EXPOSE 80

CMD dotnet restore
CMD ASPNETCORE_URLS=http://*:$PORT dotnet sfi.demoEngineering.semanticdx.service.dll

