# omnistudio-basic-scratchorg
Basic Omnistudio scratch org license and installing the Omnistudio 238 package.

# Getting Started
This will provision a scratch org with:
* OmniStudio V238.1 Managed Package Installed
* Configure required remote site settings

# Running
* Run
    ```
    ./orginit.sh
    ```


# Manual Steps
* Go to Setup-> Lightning App Builder
    * Click on View for Vlocity Card Designer
        * Click on Activation and make it the org default for the OmniUiCard object

# Before you create any new OmniStudio Object (e.g. OmniScripts, Integration Procedures, DataRaptors, FlexCards)
* Go to Setup-> OmniStudio Settings
    * Click on Enable OmniStudio Metadata API Support.
        * Click on Enable. This will allow you to use SFDX to retrieve and deploy the Omnistudio Objects via metadata.
          ```
          sfdx force:source:retrieve -m OmniUiCard,OmniDataTransform,OmniIntegrationProcedure,OmniScript
          ```

          ```
          sfdx force:source:deploy -m OmniUiCard,OmniDataTransform,OmniIntegrationProcedure,OmniScript
          ```

