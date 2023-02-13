export const OMNIDEF = {"bpLang":"English","bpSubType":"MainframeVIPStatusUpdate","bpType":"Complete","error":"OK","errorMsg":"","lwcId":"a9b32712-d0dd-f33a-1452-d748553b6592","prefillJSON":"{}","sOmniScriptId":"0jN8I000000Gn7xUAC","timeStamp":"2023-01-24T23:30:38.917Z","userId":"0058I00000176LoQAI","userName":"omni7013@studio.workshop","userCurrencyCode":"USD","userProfile":"System Administrator","bpVersion":1,"userTimeZone":0,"response":null,"bHasAttachment":false,"bReusable":false,"children":[{"bEmbed":false,"bHasAttachment":false,"indexInParent":0,"level":0,"offSet":0,"name":"GetVIPStatus","type":"DataRaptor Extract Action","propSetMap":{"controlWidth":12,"label":"GetVIPStatus","bundle":"GetLeadDetails","ignoreCache":false,"dataRaptor Input Parameters":[],"remoteTimeout":30000,"responseJSONPath":"","responseJSONNode":"","inProgressMessage":"In Progress","postMessage":"Done","failureNextLabel":"Continue","failureAbortLabel":"Abort","failureGoBackLabel":"Go Back","failureAbortMessage":"Are you sure?","validationRequired":"Step","redirectPageName":"","redirectTemplateUrl":"vlcAcknowledge.html","redirectNextLabel":"Next","redirectNextWidth":3,"redirectPreviousLabel":"Previous","redirectPreviousWidth":3,"showPersistentComponent":[true,false],"show":null,"HTMLTemplateId":"","wpm":false,"ssm":false,"message":{},"pubsub":false,"errorMessage":{"custom":[],"default":null},"enableDefaultAbort":false,"enableActionMessage":false,"businessCategory":"","businessEvent":"","aggElements":{}},"bDataRaptorExtractAction":true,"JSONPath":"GetVIPStatus","lwcId":"lwc0"},{"bEmbed":false,"bHasAttachment":false,"indexInParent":1,"level":0,"offSet":0,"name":"UpdateMFVipStatus","type":"Step","propSetMap":{"label":"Update the Mainframe VIP Status Value","validationRequired":true,"previousLabel":"","previousWidth":"0","nextLabel":"Save","nextWidth":3,"cancelLabel":"Cancel","cancelMessage":"Are you sure?","saveLabel":"","saveMessage":"Are you sure you want to save it for later?","completeLabel":"Complete","completeMessage":"Are you sure you want to complete the script?","instruction":"","showPersistentComponent":[true,false],"remoteClass":"","remoteMethod":"","remoteTimeout":30000,"remoteOptions":{},"knowledgeOptions":{"language":"English","publishStatus":"Online","keyword":"","dataCategoryCriteria":"","remoteTimeout":30000,"typeFilter":""},"show":null,"conditionType":"Hide if False","HTMLTemplateId":"","instructionKey":"","chartLabel":null,"allowSaveForLater":true,"errorMessage":{"custom":[],"default":null},"wpm":false,"ssm":false,"message":{},"pubsub":false,"businessCategory":"","businessEvent":"","uiElements":{"UpdateMFVipStatus":"","VipClient":""},"aggElements":{}},"bAccordionOpen":false,"bAccordionActive":false,"response":null,"inheritShowProp":null,"children":[{"eleArray":[{"bHasAttachment":false,"name":"VipClient","type":"Checkbox","index":0,"indexInParent":0,"level":1,"rootIndex":1,"response":null,"propSetMap":{"controlWidth":12,"label":"Checkbox1","repeat":false,"repeatClone":false,"repeatLimit":null,"readOnly":false,"defaultValue":false,"help":false,"helpText":"","helpTextPos":"","checkLabel":"VIP","show":null,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":"","hide":false,"disOnTplt":false},"children":[],"JSONPath":"UpdateMFVipStatus:VipClient","bCheckbox":true,"lwcId":"lwc10-0"}],"response":null,"level":1,"indexInParent":0,"bHasAttachment":false}],"bStep":true,"isStep":true,"JSONPath":"UpdateMFVipStatus","lwcId":"lwc1"},{"bEmbed":false,"bHasAttachment":false,"indexInParent":2,"level":0,"offSet":0,"name":"UpdateMF_VipStatus","type":"DataRaptor Post Action","propSetMap":{"controlWidth":12,"label":"UpdateMF_VipStatus","bundle":"UpdateLeadMainframeVIPStatus","remoteTimeout":30000,"postTransformBundle":"","sendJSONPath":"","sendJSONNode":"","inProgressMessage":"In Progress","postMessage":"Done","failureNextLabel":"Continue","failureAbortLabel":"Abort","failureGoBackLabel":"Go Back","failureAbortMessage":"Are you sure?","validationRequired":"Submit","redirectPageName":"","redirectTemplateUrl":"vlcAcknowledge.html","redirectNextLabel":"Next","redirectNextWidth":3,"redirectPreviousLabel":"Previous","redirectPreviousWidth":3,"showPersistentComponent":[true,false],"show":null,"HTMLTemplateId":"","wpm":false,"ssm":false,"message":{},"pubsub":false,"errorMessage":{"custom":[],"default":null},"enableDefaultAbort":false,"enableActionMessage":false,"businessCategory":"","businessEvent":"","aggElements":{}},"bDataRaptorPostAction":true,"JSONPath":"UpdateMF_VipStatus","lwcId":"lwc2"},{"bEmbed":false,"bHasAttachment":false,"indexInParent":3,"level":0,"offSet":0,"name":"ReloadPage","type":"Navigate Action","propSetMap":{"controlWidth":12,"label":"Reload Page","validationRequired":"Submit","show":null,"HTMLTemplateId":"","wpm":false,"ssm":false,"pubsub":false,"message":{},"targetType":"Community Named Page","objectAction":"home","recordAction":"view","loginAction":"login","targetFilter":"Recent","targetId":"%ContextId%","variant":"brand","iconName":"","iconVariant":"","iconPosition":"left","replace":false,"targetLWCLayout":"lightning","businessCategory":"","businessEvent":"","targetName":"Home","aggElements":{}},"bNavigate":true,"JSONPath":"ReloadPage","lwcId":"lwc3"},{"bEmbed":false,"bHasAttachment":false,"indexInParent":4,"level":0,"offSet":0,"name":"RestartOmniScript","type":"Navigate Action","propSetMap":{"controlWidth":12,"label":"NavigateAction1","validationRequired":"Submit","show":null,"HTMLTemplateId":"","wpm":false,"ssm":false,"pubsub":false,"message":{},"targetType":"Restart OmniScript","objectAction":"home","recordAction":"view","loginAction":"login","targetFilter":"Recent","targetId":"%ContextId%","variant":"brand","iconName":"","iconVariant":"","iconPosition":"left","replace":false,"targetLWCLayout":"lightning","businessCategory":"","businessEvent":"","aggElements":{}},"bNavigate":true,"JSONPath":"RestartOmniScript","lwcId":"lwc4"}],"cusPL":{},"depCusPL":{},"depSOPL":{},"dMap":{},"rMap":{},"labelMap":{"UpdateMFVipStatus":"UpdateMFVipStatus","VipClient":"UpdateMFVipStatus:VipClient","GetVIPStatus":"GetVIPStatus","UpdateMF_VipStatus":"UpdateMF_VipStatus","RestartOmniScript":"RestartOmniScript","ReloadPage":"ReloadPage"},"labelKeyMap":{},"propSetMap":{"persistentComponent":[{"render":false,"label":"","remoteClass":"","remoteMethod":"","remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"preTransformBundle":"","postTransformBundle":"","sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","id":"vlcCart","itemsKey":"cartItems","modalConfigurationSetting":{"modalHTMLTemplateId":"vlcProductConfig.html","modalController":"ModalProductCtrl","modalSize":"lg"}},{"render":false,"dispOutsideOmni":false,"label":"","remoteClass":"","remoteMethod":"","remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"preTransformBundle":"","postTransformBundle":"","id":"vlcKnowledge","itemsKey":"knowledgeItems","modalConfigurationSetting":{"modalHTMLTemplateId":"","modalController":"","modalSize":"lg"}}],"allowSaveForLater":true,"saveNameTemplate":null,"saveExpireInDays":null,"saveForLaterRedirectPageName":"sflRedirect","saveForLaterRedirectTemplateUrl":"vlcSaveForLaterAcknowledge.html","saveContentEncoded":false,"saveObjectId":"%ContextId%","saveURLPatterns":{},"autoSaveOnStepNext":false,"elementTypeToHTMLTemplateMapping":{},"seedDataJSON":{},"trackingCustomData":{},"enableKnowledge":false,"bLK":false,"lkObjName":null,"knowledgeArticleTypeQueryFieldsMap":{},"timeTracking":false,"hideStepChart":true,"mergeSavedData":false,"visualforcePagesAvailableInPreview":{},"cancelType":"SObject","allowCancel":true,"cancelSource":"%ContextId%","cancelRedirectPageName":"OmniScriptCancelled","cancelRedirectTemplateUrl":"vlcCancelled.html","consoleTabLabel":"New","wpm":false,"ssm":false,"message":{},"pubsub":false,"autoFocus":false,"currencyCode":"","showInputWidth":false,"rtpSeed":false,"consoleTabTitle":null,"consoleTabIcon":"custom:custom18","errorMessage":{"custom":[]},"stylesheet":{"newport":"","lightning":"","newportRtl":"","lightningRtl":""},"stepChartPlacement":"right","disableUnloadWarn":true,"scrollBehavior":"none","currentLanguage":"en_US"},"sobjPL":{},"rpbundle":"","hasRestartAction":true,"lwcVarMap":{}};