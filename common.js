var mediaWikiLoadStart=(new Date()).getTime(),mwPerformance=(window.performance&&performance.mark)?performance:{mark:function(){}};mwPerformance.mark('mwLoadStart');function isCompatible(str){var ua=str||navigator.userAgent;return!!('querySelector'in document&&'localStorage'in window&&'addEventListener'in window&&!(ua.match(/webOS\/1\.[0-4]/)||ua.match(/PlayStation/i)||ua.match(/SymbianOS|Series60|NetFront|Opera Mini|S40OviBrowser|MeeGo/)||(ua.match(/Glass/)&&ua.match(/Android/))));}(function(){var NORLQ,script;if(!isCompatible()){document.documentElement.className=document.documentElement.className.replace(/(^|\s)client-js(\s|$)/,'$1client-nojs$2');NORLQ=window.NORLQ||[];while(NORLQ.length){NORLQ.shift()();}window.NORLQ={push:function(fn){fn();}};window.RLQ={push:function(){}};return;}function startUp(){mw.config=new mw.Map(true);mw.loader.addSource({"local":"https://imagej.net/load.php"});mw.loader.register([["site","0thqeny",[1]],["site.styles","0iqrlcb",[],"site"],["noscript",
"1rnpnaq",[],"noscript"],["filepage","16vtllh"],["user.groups","1sl8c57",[5]],["user","0e8ff8t",[6],"user"],["user.styles","03eru0b",[],"user"],["user.cssprefs","09p30q0",[],"private"],["user.defaults","1c59pyb"],["user.options","0j3lz3q",[8],"private"],["user.tokens","1nkn7f5",[],"private"],["mediawiki.language.data","0msaucq",[179]],["mediawiki.skinning.elements","0c1w906"],["mediawiki.skinning.content","05aglp3"],["mediawiki.skinning.interface","11jcdxa"],["mediawiki.skinning.content.parsoid","1mgssb6"],["mediawiki.skinning.content.externallinks","1wq2ryu"],["jquery.accessKeyLabel","05fa3y4",[27,136]],["jquery.appear","1n3xl64"],["jquery.arrowSteps","1f4m2hp"],["jquery.async","17n7dre"],["jquery.autoEllipsis","01qei9y",[39]],["jquery.badge","0gvul35",[176]],["jquery.byteLength","0jeeyrp"],["jquery.byteLimit","1w7j9gg",[23]],["jquery.checkboxShiftClick","0m9x62y"],["jquery.chosen","1wc3cvg"],["jquery.client","17mxhft"],["jquery.color","1mwy5og",[29]],["jquery.colorUtil","0pqaay4"],[
"jquery.confirmable","0989yg1",[180]],["jquery.cookie","1yj8g5b"],["jquery.expandableField","1irex20"],["jquery.farbtastic","0vrfn9z",[29]],["jquery.footHovzer","0ldqamz"],["jquery.form","0iynjli"],["jquery.fullscreen","1updnb2"],["jquery.getAttrs","1fvcvzx"],["jquery.hidpi","0ywpvvm"],["jquery.highlightText","1dj4o72",[251,136]],["jquery.hoverIntent","034he8i"],["jquery.i18n","1s55sk3",[178]],["jquery.localize","1yio2zy"],["jquery.makeCollapsible","1rqep0v"],["jquery.mockjax","1r2clb1"],["jquery.mw-jump","00cdk6v"],["jquery.mwExtension","0oj50p7"],["jquery.placeholder","1f0ma58"],["jquery.qunit","1pdjipf"],["jquery.qunit.completenessTest","02d6t13",[48]],["jquery.spinner","1r7b2ek"],["jquery.jStorage","0zdrgca",[94]],["jquery.suggestions","11cxsy9",[39]],["jquery.tabIndex","045k4qg"],["jquery.tablesorter","06vgo22",[251,136,181]],["jquery.textSelection","0jenurd",[27]],["jquery.throttle-debounce","1d32nyr"],["jquery.xmldom","1tg0pbk"],["jquery.tipsy","15uepik"],["jquery.ui.core",
"02eauo9",[60],"jquery.ui"],["jquery.ui.core.styles","14dc9ft",[],"jquery.ui"],["jquery.ui.accordion","0tp9dl3",[59,79],"jquery.ui"],["jquery.ui.autocomplete","10zgfz6",[68],"jquery.ui"],["jquery.ui.button","1u6n6os",[59,79],"jquery.ui"],["jquery.ui.datepicker","1u1li6w",[59],"jquery.ui"],["jquery.ui.dialog","1hk905c",[63,66,70,72],"jquery.ui"],["jquery.ui.draggable","0oq6llf",[59,69],"jquery.ui"],["jquery.ui.droppable","0mblsnq",[66],"jquery.ui"],["jquery.ui.menu","1x89o6l",[59,70,79],"jquery.ui"],["jquery.ui.mouse","1jwtq13",[79],"jquery.ui"],["jquery.ui.position","080uiq4",[],"jquery.ui"],["jquery.ui.progressbar","0ujxdxj",[59,79],"jquery.ui"],["jquery.ui.resizable","17pyw6j",[59,69],"jquery.ui"],["jquery.ui.selectable","0d1t2lp",[59,69],"jquery.ui"],["jquery.ui.slider","1me0mpp",[59,69],"jquery.ui"],["jquery.ui.sortable","1mtxp0d",[59,69],"jquery.ui"],["jquery.ui.spinner","0w94x6x",[63],"jquery.ui"],["jquery.ui.tabs","1dksnam",[59,79],"jquery.ui"],["jquery.ui.tooltip","1hs1mvi",[59
,70,79],"jquery.ui"],["jquery.ui.widget","0tzxdge",[],"jquery.ui"],["jquery.effects.core","12poy9m",[],"jquery.ui"],["jquery.effects.blind","0xlx64v",[80],"jquery.ui"],["jquery.effects.bounce","1r21pn9",[80],"jquery.ui"],["jquery.effects.clip","0kulyno",[80],"jquery.ui"],["jquery.effects.drop","097v2t8",[80],"jquery.ui"],["jquery.effects.explode","1cmxh6h",[80],"jquery.ui"],["jquery.effects.fade","12kmhel",[80],"jquery.ui"],["jquery.effects.fold","0twi3bt",[80],"jquery.ui"],["jquery.effects.highlight","1yzn0kp",[80],"jquery.ui"],["jquery.effects.pulsate","1avofb1",[80],"jquery.ui"],["jquery.effects.scale","15kl5zt",[80],"jquery.ui"],["jquery.effects.shake","1duicli",[80],"jquery.ui"],["jquery.effects.slide","1uz9zpt",[80],"jquery.ui"],["jquery.effects.transfer","08kd7cl",[80],"jquery.ui"],["json","09oef0e",[],null,null,"return!!(window.JSON\u0026\u0026JSON.stringify\u0026\u0026JSON.parse);"],["moment","1oz36e0",[176]],["mediawiki.apihelp","0sh8p3o"],["mediawiki.template","15qmzf2"],[
"mediawiki.template.mustache","1nhcw0s",[97]],["mediawiki.template.regexp","14ssonu",[97]],["mediawiki.apipretty","1khwdj8"],["mediawiki.api","1kynzxp",[153,10]],["mediawiki.api.category","0ightvp",[141,101]],["mediawiki.api.edit","0opluyr",[141,101]],["mediawiki.api.login","0tpambj",[101]],["mediawiki.api.options","1tip1ks",[101]],["mediawiki.api.parse","1elczlm",[101]],["mediawiki.api.upload","0o77eoc",[251,94,103]],["mediawiki.api.user","11b2noz",[101]],["mediawiki.api.watch","012ngtw",[101]],["mediawiki.api.messages","0l7zusn",[101]],["mediawiki.api.rollback","1o63lvl",[101]],["mediawiki.content.json","0ebo8om"],["mediawiki.confirmCloseWindow","1841mye"],["mediawiki.debug","0ikd2g9",[34]],["mediawiki.diff.styles","0k85e07"],["mediawiki.feedback","010y01w",[141,130,260]],["mediawiki.feedlink","01ke35z"],["mediawiki.filewarning","01t7ur0",[256]],["mediawiki.ForeignApi","1feg1yd",[120]],["mediawiki.ForeignApi.core","04qnsui",[101,252]],["mediawiki.helplink","1s73pa5"],[
"mediawiki.hidpi","192kn3l",[38],null,null,"return'srcset'in new Image();"],["mediawiki.hlist","0y0yggw"],["mediawiki.htmlform","03az4zm",[24,136]],["mediawiki.htmlform.ooui","0sjw5wr",[256]],["mediawiki.htmlform.styles","0porv15"],["mediawiki.htmlform.ooui.styles","1asmvtw"],["mediawiki.icon","1qv03ff"],["mediawiki.inspect","1d4fp6o",[23,94,136]],["mediawiki.messagePoster","0mcrf35",[119]],["mediawiki.messagePoster.wikitext","1d87u39",[103,130]],["mediawiki.notification","0mixvrg",[189]],["mediawiki.notify","1odg0wf"],["mediawiki.notification.convertmessagebox","1ldac2m",[132]],["mediawiki.notification.convertmessagebox.styles","0t8brzf"],["mediawiki.RegExp","1hzq135"],["mediawiki.pager.tablePager","1yzl0v3"],["mediawiki.searchSuggest","0la6edn",[37,47,52,101]],["mediawiki.sectionAnchor","1sj2y37"],["mediawiki.storage","18501af"],["mediawiki.Title","0t99bik",[23,153]],["mediawiki.Upload","014sy6g",[107]],["mediawiki.ForeignUpload","14a5jdv",[119,142]],[
"mediawiki.ForeignStructuredUpload.config","1fvsh13"],["mediawiki.ForeignStructuredUpload","1cka96i",[144,143]],["mediawiki.Upload.Dialog","1ut69f7",[147]],["mediawiki.Upload.BookletLayout","1t0xpzh",[142,180,151,249,95,258,260,266,267]],["mediawiki.ForeignStructuredUpload.BookletLayout","04a0xqj",[145,147,110,184,245,243]],["mediawiki.toc","0l9o8zb",[157]],["mediawiki.Uri","0pw9lc0",[153,99]],["mediawiki.user","0q5q1fr",[108,157,9]],["mediawiki.userSuggest","0uj68qi",[52,101]],["mediawiki.util","0m5r003",[17,133]],["mediawiki.viewport","0vau7tb"],["mediawiki.checkboxtoggle","1wgzizy"],["mediawiki.checkboxtoggle.styles","1phreak"],["mediawiki.cookie","0zfdjwx",[31]],["mediawiki.toolbar","1toeh5o",[55]],["mediawiki.experiments","017f91t"],["mediawiki.action.edit","0kztkav",[24,55,161,101]],["mediawiki.action.edit.styles","0g68b0g"],["mediawiki.action.edit.collapsibleFooter","045tyta",[43,157,128]],["mediawiki.action.edit.preview","06kha7y",[35,50,55,101,115,180]],[
"mediawiki.action.history","01js1h6"],["mediawiki.action.history.styles","1dxuj7s"],["mediawiki.action.history.diff","0k85e07"],["mediawiki.action.view.dblClickEdit","1ouze0j",[189,9]],["mediawiki.action.view.metadata","0dhaz9x"],["mediawiki.action.view.categoryPage.styles","0lccw5e"],["mediawiki.action.view.postEdit","1a85l65",[157,180,97]],["mediawiki.action.view.redirect","19cvbmu",[27]],["mediawiki.action.view.redirectPage","11ow6gw"],["mediawiki.action.view.rightClickEdit","1j8g8tr"],["mediawiki.action.edit.editWarning","178ga4d",[55,113,180]],["mediawiki.action.view.filepage","1i5fqyf"],["mediawiki.language","0677x6n",[177,11]],["mediawiki.cldr","102ljoc",[178]],["mediawiki.libs.pluralruleparser","0elxcbq"],["mediawiki.language.init","0vl5kmt"],["mediawiki.jqueryMsg","0jm4mo7",[251,176,153,9]],["mediawiki.language.months","0xeljva",[176]],["mediawiki.language.names","16yzhn6",[179]],["mediawiki.language.specialCharacters","06es0c8",[176]],["mediawiki.libs.jpegmeta","18gdb21"],[
"mediawiki.page.gallery","19a313s",[56,186]],["mediawiki.page.gallery.styles","1ef59xc"],["mediawiki.page.gallery.slideshow","0blc3wg",[141,101,258,274]],["mediawiki.page.ready","1vmqrgw",[17,25,43,45,47]],["mediawiki.page.startup","0xx5929",[153]],["mediawiki.page.patrol.ajax","028dpg5",[50,141,101,189]],["mediawiki.page.watch.ajax","01gbehl",[109,189]],["mediawiki.page.rollback","0053g0h",[50,111]],["mediawiki.page.image.pagination","077tbbg",[50,153]],["mediawiki.special","0z3pukw"],["mediawiki.special.apisandbox.styles","0qiinay"],["mediawiki.special.apisandbox","1dgru8v",[101,180,244,255]],["mediawiki.special.block","1mwvfp5",[153]],["mediawiki.special.changeslist","0w778v5"],["mediawiki.special.changeslist.legend","1un3m8a"],["mediawiki.special.changeslist.legend.js","0q5lcha",[43,157]],["mediawiki.special.changeslist.enhanced","1lh9e6f"],["mediawiki.special.changeslist.visitedstatus","11gqnl2"],["mediawiki.special.comparepages.styles","10ngx2m"],["mediawiki.special.edittags",
"0krjvuh",[26]],["mediawiki.special.edittags.styles","00dubu4"],["mediawiki.special.import","0dkqxlj"],["mediawiki.special.movePage","1wxx3ku",[241]],["mediawiki.special.movePage.styles","0vjbw8w"],["mediawiki.special.pageLanguage","0luqif6",[256]],["mediawiki.special.pagesWithProp","0h0g3ht"],["mediawiki.special.preferences","0othqs3",[113,176,134]],["mediawiki.special.userrights","078vjiq",[134]],["mediawiki.special.preferences.styles","05ykj1b"],["mediawiki.special.recentchanges","1czo97s"],["mediawiki.special.search","08sec9x",[247]],["mediawiki.special.search.styles","1fovbcu"],["mediawiki.special.undelete","0ak8w0z"],["mediawiki.special.upload","0vd3tvj",[50,141,101,113,180,184,219,97]],["mediawiki.special.upload.styles","10o2vw3"],["mediawiki.special.userlogin.common.styles","159krvo"],["mediawiki.special.userlogin.signup.styles","014c4ld"],["mediawiki.special.userlogin.login.styles","0qs52ni"],["mediawiki.special.userlogin.signup.js","1x8obss",[56,101,180]],[
"mediawiki.special.unwatchedPages","16n221v",[141,109]],["mediawiki.special.watchlist","164uv51"],["mediawiki.special.version","0hfg3ll"],["mediawiki.legacy.config","1eash64"],["mediawiki.legacy.commonPrint","1ldkm5q"],["mediawiki.legacy.protect","08hmr0a",[24]],["mediawiki.legacy.shared","0dseej9"],["mediawiki.legacy.oldshared","0eczdrj"],["mediawiki.legacy.wikibits","13lnudx",[153]],["mediawiki.ui","1cpmq8e"],["mediawiki.ui.checkbox","0y6d7ud"],["mediawiki.ui.radio","1j0vh0u"],["mediawiki.ui.anchor","0ggaq4d"],["mediawiki.ui.button","1d4y47d"],["mediawiki.ui.input","0ebv1qe"],["mediawiki.ui.icon","1267d7l"],["mediawiki.ui.text","037ouv8"],["mediawiki.widgets","15gbhv5",[21,24,141,101,242,258]],["mediawiki.widgets.styles","0axejw4"],["mediawiki.widgets.DateInputWidget","0dcnzr4",[95,258]],["mediawiki.widgets.datetime","18gzft5",[256]],["mediawiki.widgets.CategorySelector","10thd9w",[119,141,258]],["mediawiki.widgets.UserInputWidget","1dm7192",[258]],[
"mediawiki.widgets.SearchInputWidget","09uwkd0",[138,241]],["mediawiki.widgets.SearchInputWidget.styles","0udvreo"],["mediawiki.widgets.StashedFileWidget","0del9yy",[256]],["es5-shim","1syqam0",[],null,null,"return(function(){'use strict';return!this\u0026\u0026!!Function.prototype.bind;}());"],["dom-level2-shim","01qet02",[],null,null,"return!!window.Node;"],["oojs","12g1i9f",[250,94]],["mediawiki.router","1ia5l0g",[254]],["oojs-router","13c09mg",[252]],["oojs-ui","1sl8c57",[259,258,260]],["oojs-ui-core","1bkf4hc",[176,252,257,261,262,263]],["oojs-ui-core.styles","0b25fcd"],["oojs-ui-widgets","1h6ssr2",[256]],["oojs-ui-toolbars","0z6es49",[256]],["oojs-ui-windows","1xkjpnv",[256]],["oojs-ui.styles.icons","1a0dhcr"],["oojs-ui.styles.indicators","070yc67"],["oojs-ui.styles.textures","0kkh325"],["oojs-ui.styles.icons-accessibility","05bf4xj"],["oojs-ui.styles.icons-alerts","0c24d9o"],["oojs-ui.styles.icons-content","0cv26xi"],["oojs-ui.styles.icons-editing-advanced","16yntgx"],[
"oojs-ui.styles.icons-editing-core","0c0yw87"],["oojs-ui.styles.icons-editing-list","1h73zac"],["oojs-ui.styles.icons-editing-styling","1q6e84v"],["oojs-ui.styles.icons-interactions","1wwcmdn"],["oojs-ui.styles.icons-layout","1t7vfbf"],["oojs-ui.styles.icons-location","1epxeh9"],["oojs-ui.styles.icons-media","0dk9f9i"],["oojs-ui.styles.icons-moderation","041pmxq"],["oojs-ui.styles.icons-movement","172jkr9"],["oojs-ui.styles.icons-user","0opq62l"],["oojs-ui.styles.icons-wikimedia","0uiqqf3"],["skins.vector.styles","0q2t460"],["skins.vector.styles.responsive","15gajbq"],["skins.vector.js","1fgcynh",[53,56]],["skins.erudite","0v16no5"],["skins.foreground.styles","124ih0m"],["skins.foreground.modernizr","0p7ebs4"],["skins.foreground.js","0l0zje3",[31,284]],["ext.cite.styles","1ggyyio"],["ext.cite.a11y","1yrg2rv"],["ext.cite.style","101q7lz"],["ext.cite.visualEditor.core","1jrlzji",["ext.visualEditor.mwcore"]],["ext.cite.visualEditor.data","1jg9g9c",["ext.visualEditor.base",
"ext.visualEditor.mediawiki"]],["ext.cite.visualEditor","1c2s4nj",[288,289,290,"ext.visualEditor.mwtransclusion"]],["ext.math.styles","1gk0afp"],["ext.math.desktop.styles","1p5vox5"],["ext.math.scripts","0d4ovhv"],["ext.math.editbutton.enabler","17ynkfs"],["ext.math.visualEditor","1q48vjl",["ext.visualEditor.mwcore"]],["ext.math.visualEditor.data","1dnc517",[296]],["ext.math.visualEditor.symbols","0joeasr",[297]],["ext.graph.styles","0fgma8g"],["ext.graph.data","0p7ou3u"],["ext.graph.loader","09xqq5q",[101]],["ext.graph.vega1","19arptw",[300,150]],["ext.graph.vega2","0wkn6i7",[300,150]],["ext.graph.sandbox","0k4aitv",["ext.codeEditor",303,56,113]],["ext.graph.visualEditor","1fanz6g",[300,"ext.visualEditor.mwcore","ext.visualEditor.mwimage.core"]],["ext.fancytree","04gk2mi",[31,81,59,79]],["ext.suckerfish","1el6n74",[27]],["skins.minerva.base.reset","07e9zuv"],["skins.minerva.base.styles","1etqu8t"],["skins.minerva.beta.styles","0jc4mej"],["skins.minerva.content.styles","1t10i7l"],[
"skins.minerva.content.styles.beta","1wudr2q"],["mobile.pagelist.styles","168utw4"],["mobile.pagesummary.styles","1xpzhjo"],["skins.minerva.tablet.styles","1svpoyb"],["skins.minerva.icons.images","0rjravm"],["skins.minerva.icons.beta.images","1ijdu85"],["mobile.overlay.images","1dekahu"],["mobile.issues.images","04f5cmz"],["mobile.toc.images","0wgam99"],["mobile.references.images","05d76sx"],["mobile.toggle.images","1o2wkmw"],["skins.minerva.icons.images.scripts","0tfyfyf"],["skins.minerva.mainPage.beta.styles","1xlfyjk"],["skins.minerva.mainPage.styles","0t74z0c"],["skins.minerva.userpage.styles","0vomsmf"],["mobile.modules","1h7k9oe",[252]],["mobile.oo","0xmpwz2",[327]],["mobile.view","0572o1o",[328]],["mobile.context","0n3zvmm",[327]],["mobile.browser","0jlbj5n",[329]],["mobile.mainMenu.icons","07desv0"],["mobile.mainMenu","03rlloa",[331,400,332,337]],["mobile.messageBox","0n6mzla",[329,337]],["mobile.modifiedBar","04yu5ik",[180,327]],["mobile.microAutoSize","08322l5"],[
"mediawiki.template.hogan","0b5rl6q",[97]],["mobile.pagelist","0fmao8p",[331,313,314,337]],["mobile.pagelist.scripts","0gibovi",[338,368]],["mobile.watchlist","06n7icn",[377,339]],["mobile.toc","1eao52y",[320,366]],["mobile.ajax","1vphdsn"],["mobile.settings","1gk3mx7",[31,140,327]],["mobile.backtotop","0fduegq",[366]],["mobile.startup","0ggypdb",[56,154,331,330,335,343,347,337]],["mobile.foreignApi","0kz2mfb",[120,345]],["mobile.user","1md72r1",[140,151,327]],["mobile.abusefilter","1tuh6yi",[361]],["mobile.editor.api","1lgd6d8",[345]],["mobile.editor.common","1d4bv3q",[113,349,398,334,361,363,255]],["mobile.editor.overlay","14m00n9",[132,348,350,336,268]],["mobile.editor.overlay.withtoolbar","0u7r8jd",[55,351,353,270]],["mobile.editor.overlay.withtoolbar.images","0hcru26"],["mobile.search","0hpg1sr",[401,361,339]],["mobile.search.api","15yapy8",[141,345]],["mobile.talk.overlays","1avm9e8",[236,350]],["mobile.mediaViewer","1rrm6w3",[361,359]],["mobile.mediaViewer.beta","1c3fc9q",[357,
378]],["mobile.swipe.images","11l59z9"],["mobile.categories.overlays","0srhswu",[350,354,355]],["mobile.overlays","01u0gn7",[342,318,345]],["mobile.drawers","1fgrs4z",[345]],["mobile.toast","0fj8fkf",[362]],["mobile.references","02hap4o",[362,349,365,321]],["mobile.references.gateway","1tl6y4v",[328]],["mobile.toggle","1swlkuu",[345,322]],["mobile.contentOverlays","02moqrl",[361]],["mobile.watchstar","18ff8jg",[342,363]],["mobile.buttonWithSpinner","0d8otf6",[255]],["mobile.languages.structured","1sfyu2t",[399,361]],["mobile.issues","13p67fr",[319,361]],["mobile.nearby","1o4gqg5",[346,334,339,380]],["mobile.gallery","13688oz",[377,363]],["mobile.commonsCategory","0uriymy",[373]],["mobile.betaoptin","1chzivt",[159,345]],["mobile.fontchanger","0spnprz",[362]],["mobile.infiniteScroll","0up9ndz",[328]],["mobile.swipe","1794yjj",[328]],["mobile.patrol.ajax","11drlmk",[141,363]],["mobile.special.nearby.styles","0t1uylo"],["mobile.special.userlogin.scripts","1rbmur7"],[
"mobile.special.nearby.scripts","0n4k7s6",[372]],["mobile.special.uploads.scripts","0c5mzb1",[373]],["mobile.special.mobilediff.scripts","1sl8c57"],["skins.minerva.scripts","18hhq8e",[375,371,399,333,364,354]],["skins.minerva.scripts.top","1qeugg5",[333]],["skins.minerva.newusers","1rxwtq2",[367,388]],["skins.minerva.editor","058mvuh",[238,398,323,391]],["skins.minerva.categories","0fn949m",[361]],["skins.minerva.talk","0e31nos",[141,323,385]],["skins.minerva.toggling","0flduqa",[366,385]],["skins.minerva.watchstar","1hibiqd",[323,385]],["skins.minerva.beta.scripts","03y819b",[344,346,385]],["skins.minerva.tablet.scripts","1i1liix",[341]],["ext.timeline.styles","0iujifa"],["ext.tabs","1faxmhq"],["ext.SimpleTooltip","159ndgd"],["mobile.loggingSchemas.edit","1sl8c57"],["mobile.loggingSchemas.mobileWebLanguageSwitcher","1sl8c57"],["mobile.loggingSchemas.mobileWebMainMenuClickTracking","1sl8c57"],["mobile.loggingSchemas.mobileWebSearch","1sl8c57"]]);;mw.config.set({"wgLoadScript":
"https://imagej.net/load.php","debug":!1,"skin":"erudite","stylepath":"/skins","wgUrlProtocols":"bitcoin\\:|ftp\\:\\/\\/|ftps\\:\\/\\/|geo\\:|git\\:\\/\\/|gopher\\:\\/\\/|http\\:\\/\\/|https\\:\\/\\/|irc\\:\\/\\/|ircs\\:\\/\\/|magnet\\:|mailto\\:|mms\\:\\/\\/|news\\:|nntp\\:\\/\\/|redis\\:\\/\\/|sftp\\:\\/\\/|sip\\:|sips\\:|sms\\:|ssh\\:\\/\\/|svn\\:\\/\\/|tel\\:|telnet\\:\\/\\/|urn\\:|worldwind\\:\\/\\/|xmpp\\:|\\/\\/","wgArticlePath":"/$1","wgScriptPath":!1,"wgScriptExtension":".php","wgScript":"/index.php","wgSearchType":null,"wgVariantArticlePath":!1,"wgActionPaths":{},"wgServer":"https://imagej.net","wgServerName":"imagej.net","wgUserLanguage":"en","wgContentLanguage":"en","wgTranslateNumerals":!0,"wgVersion":"1.28.0","wgEnableAPI":!0,"wgEnableWriteAPI":!0,"wgMainPageTitle":"Welcome","wgFormattedNamespaces":{"-2":"Media","-1":"Special","0":"","1":"Talk","2":"User","3":"User talk","4":"ImageJ","5":"ImageJ talk","6":"File","7":"File talk","8":"MediaWiki","9":
"MediaWiki talk","10":"Template","11":"Template talk","12":"Help","13":"Help talk","14":"Category","15":"Category talk","274":"Widget","275":"Widget talk"},"wgNamespaceIds":{"media":-2,"special":-1,"":0,"talk":1,"user":2,"user_talk":3,"imagej":4,"imagej_talk":5,"file":6,"file_talk":7,"mediawiki":8,"mediawiki_talk":9,"template":10,"template_talk":11,"help":12,"help_talk":13,"category":14,"category_talk":15,"widget":274,"widget_talk":275,"image":6,"image_talk":7,"project":4,"project_talk":5},"wgContentNamespaces":[0],"wgSiteName":"ImageJ","wgDBname":"wikidb3","wgExtraSignatureNamespaces":[],"wgAvailableSkins":{"vector":"Vector","erudite":"Erudite","foreground":"Foreground","minerva":"Minerva","fallback":"Fallback","apioutput":"ApiOutput"},"wgExtensionAssetsPath":"/extensions","wgCookiePrefix":"wikidb3","wgCookieDomain":"","wgCookiePath":"/","wgCookieExpiration":15552000,"wgResourceLoaderMaxQueryLength":2000,"wgCaseSensitiveNamespaces":[],"wgLegalTitleChars":
" %!\"$&'()*,\\-./0-9:;=?@A-Z\\\\\\^_`a-z~+\\u0080-\\uFFFF","wgIllegalFileChars":":/\\\\","wgResourceLoaderStorageVersion":1,"wgResourceLoaderStorageEnabled":!0,"wgResourceLoaderLegacyModules":[],"wgForeignUploadTargets":["local"],"wgEnableUploads":!0,"wgMFSearchAPIParams":{"ppprop":"displaytitle"},"wgMFQueryPropModules":["pageprops"],"wgMFSearchGenerator":{"name":"prefixsearch","prefix":"ps"},"wgMFNearbyEndpoint":"","wgMFThumbnailSizes":{"tiny":80,"small":150},"wgMFContentNamespace":0,"wgMFEditorOptions":{"anonymousEditing":!0,"skipPreview":!1},"wgMFLicense":{"msg":"mobile-frontend-copyright","link":"","plural":1},"wgMFSchemaEditSampleRate":0.0625,"wgMFSchemaMobileWebLanguageSwitcherSampleRate":{"beta":0,"stable":0},"wgMFExperiments":{"betaoptin":{"name":"betaoptin","enabled":!1,"buckets":{"control":0.97,"A":0.03}}},"wgMFIgnoreEventLoggingBucketing":!1,"wgMFEnableJSConsoleRecruitment":!1,"wgMFPhotoUploadEndpoint":"","wgMFDeviceWidthTablet":"720px",
"wgMFCollapseSectionsByDefault":!0});var RLQ=window.RLQ||[];while(RLQ.length){RLQ.shift()();}window.RLQ={push:function(fn){fn();}};window.NORLQ={push:function(){}};}script=document.createElement('script');script.src="https://imagej.net/load.php?debug=false&lang=en&modules=jquery%2Cmediawiki&only=scripts&skin=erudite&version=0jp3jbo";script.onload=script.onreadystatechange=function(){if(!script.readyState||/loaded|complete/.test(script.readyState)){script.onload=script.onreadystatechange=null;script=null;startUp();}};document.getElementsByTagName('head')[0].appendChild(script);}());