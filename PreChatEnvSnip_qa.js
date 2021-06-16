window._snapinsSnippetSettingsFile = (function() {

//get params
var objectSettingChat = embedded_svc.menu.chat.settings;

//version for supported IE
var isMobile = new RegExp('(?:^|\\s)Android', 'i').test(navigator.userAgent) || new RegExp('(?:^|\\s)Mobile', 'i').test(navigator.userAgent) ||  new RegExp('(?:^|\\s)iOS', 'i').test(navigator.userAgent)

if(objectSettingChat.paramDebug){
  console.log("Snippet settings file loaded."); // Logs that the snippet settings file was loaded successfully
  console.log('isMobile: ' + isMobile);
}

var origin = isMobile ? 'Chat Mobile' : 'Chat';

// Map label EMAIL for prechat account search by email
var emailLabelMap = {
  "en": "Email",
  "es": "Correo electrónico",
  "it" : "Email",
  "hu" : "E-mail",
  "fr" : "Adresse e-mail",
  "de" : "E-Mail",
  "pl" : "E-mail",
  "pt" : "E-mail",
  "pt-PT" : "E-mail",
  "pt-BR" : "Email",
  "pt_PT" : "E-mail",
  "ru" : "Эл. почта",
  "sk" : "E-mail",
  "ro" : "E-mail",
  "cs" : "E-mail",
  "uk" : "Електронна пошта",
  "ja" : "メール",
  "hr" : "E-pošta",
  "tr" : "E-posta",
  "zh-CN" : "电子邮件",
  "zh-TW" : "電子郵件"
  
}

// Map label last name
var lastNameLabelMap = {
  "en": "Last Name",
  "es": "Apellidos",
  "it" : "Cognome",
  "hu" : "Vezetéknév",
  "fr" : "Nom",
  "de" : "Nachname",
  "el" : "Επώνυμο",
  "pl" : "Nazwisko",
  "pt" : "Last Name",
  "pt-PT" : "Apelido",
  "pt-BR" : "Sobrenome",
  "pt_PT" : "Apelido",
  "ru" : "Фамилия",
  "sk" : "Priezvisko",
  "ro" : "Nume",
  "cs" : "Příjmení",
  "uk" : "Прізвище",
  "ja" : "姓",
  "hr" : "Prezime",
  "tr" : "Soyadı",
  "zh-CN" : "姓氏",
  "zh-TW" : "姓氏"
}

// Map label Minimize message for prechat
var msgMinimizeLabelMap = {
  "en": "Chat with an Expert",
  "es": "Chatear con un expert",
  "it" : "Chatta con un esperto",
  "hu" : "Csevegjen egy szakértővel",
  "fr" : "Discutez avec un expert",
  "de" : "Chat met een expert",
  "el" : "Συνομιλία με έναν ειδικό",
  "pl" : "Porozmawiaj z ekspertem",
  "pt" : "Converse com um especialista",
  "pt-PT" : "Converse com um especialista",
  "pt-BR" : "Converse com um especialista",
  "pt_PT" : "Converse com um especialista",
  "ru" : "Общайтесь с экспертом",
  "sk" : "Chatujte s odborníkom",
  "ro" : "Discutați cu un expert",
  "cs" : "Chatujte s odborníkem",
  "uk" : "Поспілкуйтеся з експертом",
  "ja" : "専門家とチャットする",
  "hr" : "Razgovarajte sa stručnjakom",
  "tr" : "Bir Uzmanla Sohbet Edin",
  "zh-CN" : "与专家聊天",
  "zh-TW" : "與專家聊天"
}

var brandMap = {
  "01": "Calzedonia",
  "02": "Intimissimi",
  "03": "Tezenis",
  "05": "Falconeri",
  "06": "Signorvino"
}

// Code Brand
var brandCode = '';
if(objectSettingChat.paramBrand){
  brandCode = objectSettingChat.paramBrand;
}

if(objectSettingChat.paramDebug){
  console.log('external script embedded_svc pre set value: ' + JSON.stringify(embedded_svc));
}

//get configuration object
if(!embedded_svc.menu.configuration.ChatButton){
    //manage case config empty
  for(let i= 0; i< embedded_svc.menu.menuConfig.menuItems.length; i++){
    if(embedded_svc.menu.menuConfig.menuItems[i].iconUrl){
       var urlAvatarBase = embedded_svc.menu.menuConfig.menuItems[i].iconUrl;
    }
  }
  
  if(urlAvatarBase){
    urlAvatarBase = urlAvatarBase.substr(0,urlAvatarBase.lastIndexOf('/'));
    var brandName = brandMap[brandCode];
    var brandStyle = brandName+'ChatStyle/style.css';
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = urlAvatarBase+'/'+brandStyle;
    document.getElementsByTagName('HEAD')[0].appendChild(link);
    if(objectSettingChat.paramDebug){
      console.log('return for empty chatbutton');
      console.log('styles loaded: ' + link.href);
     }
   }else if(objectSettingChat.paramDebug){
     console.log('return for empty chatbutton');
   }
   
  return;
}
//get configuration object
var objectSetting = embedded_svc.menu.configuration.ChatButton.settings;
//for disable button chat show
//embedded_svc.menu.menuConfig.menuItems[0].isDisplayedOnPageLoad = false;


//objectSetting.displayHelpButton = true;
//set language
objectSetting.language = embedded_svc.menu.settings.language;
//objectSetting.enabledFeatures = ['LiveAgent'];
//objectSetting.entryFeature = 'LiveAgent';
// Code Country
var country = '';
if(objectSettingChat.paramCountry){
  country = objectSettingChat.paramCountry;
}

//set email label for case
let emailLabel = emailLabelMap[objectSetting.language];
if(!emailLabel){
  emailLabel = "Email";
}

//set lastname label for case
let lastNameLabel = lastNameLabelMap[objectSetting.language];
if(!lastNameLabel){
  lastNameLabel = "Last Name";
}

//set msg minimize label
let msgMinimizeLabel = msgMinimizeLabelMap[objectSetting.language];
if(!msgMinimizeLabel){
  msgMinimizeLabel = "Chat with an Expert";
}


var nameParam = '';
if(objectSettingChat.paramName){
  nameParam = objectSettingChat.paramName;
}

var mailParam = '';
if(objectSettingChat.paramMail){
  mailParam = objectSettingChat.paramMail;
}

var langCurr = objectSetting.language;
if(langCurr.includes('-')){
    langCurr = langCurr.replace('-','_');
}


objectSetting.extraPrechatFormDetails = [
  {"label":"issue","value":"","transcriptFields":[],"displayToAgent":true},
  {"label":"language","value":langCurr,"transcriptFields":[],"displayToAgent":true},
  {"label":"Language","value":langCurr,"transcriptFields":[],"displayToAgent":true},
  {"label":"country","value":country,"transcriptFields":[],"displayToAgent":true},
  {"label":"brand","value":brandCode,"transcriptFields":[],"displayToAgent":true},
  {"label":"origin","value":origin,"transcriptFields":[],"displayToAgent":true}];

// Fields for case on chat
objectSetting.extraPrechatInfo =
  [{"entityName":"Contact","showOnCreate":true,"linkToEntityName":"Case","linkToEntityField":"ContactId","saveToTranscript":"Contact","entityFieldMaps":
  [{"isExactMatch":false,"fieldName":"LastName","doCreate":false,"doFind":false,"label":lastNameLabel},
  {"isExactMatch":true,"fieldName":"Email","doCreate":false,"doFind":true,"label":emailLabel}]},
  {"entityName":"Case","showOnCreate":true, "saveToTranscript":"Case", "entityFieldMaps":
  [{"isExactMatch":false,"fieldName":"Subject","doCreate":true,"doFind":false,"label":"issue"},
  {"isExactMatch":false,"fieldName":"Status","doCreate":true,"doFind":false,"label":"Status"},
  {"isExactMatch":false,"fieldName":"Email__c","doCreate":true,"doFind":false,"label":emailLabel},
  {"isExactMatch":false,"fieldName":"Language__c","doCreate":true,"doFind":false,"label":"Language"},
  {"isExactMatch":false,"fieldName":"Subject","doCreate":true,"doFind":false},
  {"isExactMatch":false,"fieldName":"Origin","doCreate":true,"doFind":false,"label":"origin"}]},
  {"entityName":"Account","showOnCreate":true,"linkToEntityName":"Case","linkToEntityField":"AccountId","saveToTranscript":"","entityFieldMaps":
  [{"isExactMatch":true,"fieldName":"PersonEmail","doCreate":false,"doFind":true,"label":emailLabel}]},
  {"entityName":"Country_sf__c","showOnCreate":true,"linkToEntityName":"Case","linkToEntityField":"CountrySF__c","saveToTranscript":"","entityFieldMaps":
  [{"isExactMatch":true,"fieldName":"Code__c","doCreate":false,"doFind":true,"label":"country"}]},
  {"entityName":"Brand__c","showOnCreate":true,"linkToEntityName":"Case","linkToEntityField":"BrandSF__c","saveToTranscript":"","entityFieldMaps":
  [{"isExactMatch":true,"fieldName":"Code__c","doCreate":false,"doFind":true,"label":"brand"}]}];

//Set avatar image
//var imgIdAndNameAgent = '618590993000/Agent_Avatar';
//var imgIdAndNameBot = '1620209791000/Bot_Avatar';
//var imgIdAndNameCompany = '1618469927000/TezeinsIconChat';
var imgIdAndNameBot = 'Bot_Avatar';
var brandName = brandMap[brandCode];
if(brandName === "Calzedonia" || brandName === "Intimissimi"){
    imgIdAndNameBot = brandName + imgIdAndNameBot;
}

var brandStyle = brandName+'ChatStyle/style.css';
for(let i= 0; i< embedded_svc.menu.menuConfig.menuItems.length; i++){
    if(embedded_svc.menu.menuConfig.menuItems[i].configuration){
       var urlAvatarBase = embedded_svc.menu.menuConfig.menuItems[i].configuration.siteUrl + '/resource/';
    }
}
//var tezenisStyle = '1620209791000/TezenisChatStyle/style.css';
//var urlAvatarBase =   embedded_svc.menu.menuConfig.menuItems[0].configuration.siteUrl + '/resource/';
//var urlAvatarBase =  'https://calzedoniagroup.secure.force.com/Tezenis/resource/';
//set agent avatar
//  objectSetting.avatarImgURL = urlAvatarBase + imgIdAndNameAgent;
// set bot avatar
objectSetting.chatbotAvatarImgURL = urlAvatarBase + imgIdAndNameBot;

// set  logo for minimized chat
//objectSetting.smallCompanyLogoImgURL  = urlAvatarBase + imgIdAndNameCompany;

// Prechat field predefault
objectSetting.prepopulatedPrechatFields = {Language: langCurr, LastName: brandCode+"_"+country,FirstName: nameParam,  Email: mailParam};
// open automatic post chat
objectSetting.autoOpenPostChat = true;

//embedded_svc.snippetSettingsFile.externalScripts = ['my_scripts'];
//objectSetting.externalStyles = ['testStyle'];

/*** Set Custom labels ***/
objectSetting.defaultMinimizedText = msgMinimizeLabel;
objectSetting.disabledMinimizedText  = msgMinimizeLabel;
/*objectSetting.offlineSupportMinimizedText = ;*/
/*objectSetting.loadingText = ;*/
//set other labels:
//embedded_svc.menu.menuConfig.standardLabels.forEach(label => {label.labelValue = '';});*/

//for change bt (or liveChatDeployment):
//embedded_svc.menu.menuConfig.configuredChannels[0].configuration.embeddedServiceLiveAgent.liveChatButton  = '';

//*** Create new link style Element **/
var link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = urlAvatarBase+brandStyle;
document.getElementsByTagName('HEAD')[0].appendChild(link);

if(objectSettingChat.paramDebug){
  console.log('external script embedded_svc post set value: ' + JSON.stringify(embedded_svc));
  console.log('url avatar: ' + objectSetting.chatbotAvatarImgURL);
  console.log('loaded style: ' + urlAvatarBase+brandStyle);
  console.log("Snippet settings end file loaded."); // Logs that the snippet settings file was loaded successfully
}


})();