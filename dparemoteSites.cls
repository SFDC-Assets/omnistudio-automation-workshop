String externalFQDN=URL.getSalesforceBaseUrl().toExternalForm();
externalFQDN = externalFQDN.replace('https://','');
List<string> parts = externalFQDN.split('\\.',5);
string TEMP_DOMAIN = parts[0];
String INSTANCE = [select InstanceName from Organization limit 1].InstanceName;

List<MetadataService.Metadata> allMetadataList = new List<MetadataService.Metadata>();

//ENABLE LWC

MetadataService.MetadataPort service = new MetadataService.MetadataPort();
service.SessionHeader = new MetadataService.SessionHeader_element();
service.SessionHeader.sessionId = UserInfo.getSessionId();

MetadataService.RemoteSiteSetting EnableLwc = new MetadataService.RemoteSiteSetting();
EnableLwc.fullName = 'EnableLwc';
EnableLwc.description ='Enabled LWC for OmniStudio';
EnableLwc.disableProtocolSecurity  = false;
EnableLwc.isActive  = true;
EnableLwc.url='https://'+TEMP_DOMAIN+'.lightning.force.com';
allMetadataList.add(EnableLwc);

MetadataService.RemoteSiteSetting EnableLwcVisual = new MetadataService.RemoteSiteSetting();
EnableLwcVisual.fullName = 'EnableLwcVisual';
EnableLwcVisual.description ='Enabled LWC for OmniStudio';
EnableLwcVisual.disableProtocolSecurity  = false;
EnableLwcVisual.isActive  = true;
EnableLwcVisual.url='https://'+TEMP_DOMAIN+'--omnistudio.visualforce.com';
allMetadataList.add(EnableLwcVisual);

MetadataService.RemoteSiteSetting EnableLwcVisualForce = new MetadataService.RemoteSiteSetting();
EnableLwcVisualForce.fullName = 'EnableLwcVisualForce';
EnableLwcVisualForce.description ='Enabled LWC for OmniStudio';
EnableLwcVisualForce.disableProtocolSecurity  = false;
EnableLwcVisualForce.isActive  = true;
EnableLwcVisualForce.url='https://'+TEMP_DOMAIN+'--omnistudio.'+INSTANCE+'.visual.force.com';
allMetadataList.add(EnableLwcVisualForce);

MetadataService.RemoteSiteSetting EnableRest = new MetadataService.RemoteSiteSetting();
EnableRest.fullName = 'EnableRest';
EnableRest.description ='Enabled LWC for Omnistudio';
EnableRest.disableProtocolSecurity  = false;
EnableRest.isActive  = true;
EnableRest.url='https://'+TEMP_DOMAIN+'.my.salesforce.com';
allMetadataList.add(EnableRest);


MetadataService.RemoteSiteSetting fonts = new MetadataService.RemoteSiteSetting();
fonts.fullName = 'fonts';
fonts.description ='Enabled LWC for Omnistudio';
fonts.disableProtocolSecurity  = false;
fonts.isActive  = true;
fonts.url='https://'+TEMP_DOMAIN+'--c.visualforce.com';
allMetadataList.add(fonts);


List<MetadataService.UpsertResult> results = service.upsertMetadata(allMetadataList);