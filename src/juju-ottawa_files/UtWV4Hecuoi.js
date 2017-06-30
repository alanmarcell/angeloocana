if (self.CavalryLogger) { CavalryLogger.start_js(["jF+6c"]); }

__d("AdsTransparencyXoutEvent",[],(function a(b,c,d,e,f,g){f.exports={INFO:"info",USER_ENGAGEMENT:"user_engagement",USER_EXPOSURE:"user_exposure"};}),null);
__d("AdsTransparencyXoutProduct",[],(function a(b,c,d,e,f,g){f.exports={AD_DIRECT_HIDE_BUTTON:"ad_direct_hide_button",NUX_AD_BUTTON:"nux_ad_button",AD_DROPDOWN_BUTTON:"ad_dropdown_button",AD_DROPDOWN_HIDE:"ad_dropdown_hide",HIDE:"hide"};}),null);
__d('AdsTransparencyXoutTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){'use strict';function h(){this.clear();}h.prototype.log=function(){c('GeneratedLoggerUtils').log('logger:AdsTransparencyXoutLoggerConfig',this.$AdsTransparencyXoutTypedLogger1,c('Banzai').BASIC);};h.prototype.logVital=function(){c('GeneratedLoggerUtils').log('logger:AdsTransparencyXoutLoggerConfig',this.$AdsTransparencyXoutTypedLogger1,c('Banzai').VITAL);};h.prototype.clear=function(){this.$AdsTransparencyXoutTypedLogger1={};return this;};h.prototype.updateData=function(j){this.$AdsTransparencyXoutTypedLogger1=babelHelpers['extends']({},this.$AdsTransparencyXoutTypedLogger1,j);return this;};h.prototype.setAdID=function(j){this.$AdsTransparencyXoutTypedLogger1.ad_id=j;return this;};h.prototype.setAdsPageType=function(j){this.$AdsTransparencyXoutTypedLogger1.ads_page_type=j;return this;};h.prototype.setEntryProduct=function(j){this.$AdsTransparencyXoutTypedLogger1.entry_product=j;return this;};h.prototype.setEvent=function(j){this.$AdsTransparencyXoutTypedLogger1.event=j;return this;};h.prototype.setProduct=function(j){this.$AdsTransparencyXoutTypedLogger1.product=j;return this;};h.prototype.setVC=function(j){this.$AdsTransparencyXoutTypedLogger1.vc=j;return this;};h.prototype.updateExtraData=function(j){j=c('nullthrows')(c('GeneratedLoggerUtils').serializeMap(j));c('GeneratedLoggerUtils').checkExtraDataFieldNames(j,i);this.$AdsTransparencyXoutTypedLogger1=babelHelpers['extends']({},this.$AdsTransparencyXoutTypedLogger1,j);return this;};h.prototype.addToExtraData=function(j,k){var l={};l[j]=k;return this.updateExtraData(l);};var i={ad_id:true,ads_page_type:true,entry_product:true,event:true,product:true,vc:true};f.exports=h;}),null);
__d('EntstreamFeedObject',['csx','CSS','Parent'],(function a(b,c,d,e,f,g,h){var i={getRoot:function j(k){return c('Parent').bySelector(k,"._5jmm");},getHscrollOuterRootIfAvailable:function j(k){var l=k;if(c('CSS').matchesSelector(l,"._170y"))l=i.getRoot(l.parentNode);return l;}};f.exports=i;}),null);
__d("XAdPreferencesTessaSurveyController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/ads\/preferences\/survey\/",{});}),null);
__d('AdsPrefsXout',['cx','AdsTransparencyXoutEvent','AdsTransparencyXoutProduct','AdsTransparencyXoutTypedLogger','AsyncRequest','DOM','EntstreamFeedObject','EventListener','XAdPreferencesTessaSurveyController','ge'],(function a(b,c,d,e,f,g,h){'use strict';var i={registerDropdownClick:function j(k,l){c('EventListener').listen(k,'click',function(){var m=c('XAdPreferencesTessaSurveyController').getURIBuilder().getURI();new (c('AsyncRequest'))(m).send();new (c('AdsTransparencyXoutTypedLogger'))().setEvent(c('AdsTransparencyXoutEvent').USER_ENGAGEMENT).setAdID(l).setProduct(c('AdsTransparencyXoutProduct').AD_DROPDOWN_BUTTON).log();});},registerDirectHideClick:function j(k,l,m){c('EventListener').listen(k,'click',function(){var n=c('XAdPreferencesTessaSurveyController').getURIBuilder().getURI();new (c('AsyncRequest'))(n).send();new (c('AdsTransparencyXoutTypedLogger'))().setEvent(c('AdsTransparencyXoutEvent').USER_ENGAGEMENT).setAdID(l).setProduct(c('AdsTransparencyXoutProduct').AD_DIRECT_HIDE_BUTTON).log();var o=c('DOM').create('div',{className:"_5lum"}),p=c('EntstreamFeedObject').getHscrollOuterRootIfAvailable(c('EntstreamFeedObject').getRoot(c('ge')(m)));c('DOM').appendContent(o,k.getAttribute('data-action-in-progress-string'));c('DOM').insertBefore(p.firstChild,o);});},registerNuxDropdownClick:function j(k,l){c('EventListener').listen(k,'click',function(){var m=c('XAdPreferencesTessaSurveyController').getURIBuilder().getURI();new (c('AsyncRequest'))(m).send();new (c('AdsTransparencyXoutTypedLogger'))().setEvent(c('AdsTransparencyXoutEvent').USER_ENGAGEMENT).setAdID(l).setProduct(c('AdsTransparencyXoutProduct').NUX_AD_BUTTON).log();});}};f.exports=i;}),null);
__d('FeedObjectCapstone',['csx','DOM','Parent','ge'],(function a(b,c,d,e,f,g,h){var i={getCapstone:function j(k){var l=c('DOM').scry(k,"._x1g");if(!l.length)l=c('DOM').scry(k.parentNode,"._x1g");return l?l[0]:null;},addCapstoneByStoryID:function j(k,l){var m=c('Parent').bySelector(c('ge')(k),"._5jmm");this.addCapstone(m,l);},addCapstone:function j(k,l){var m=c('DOM').find(k,"._5v3q");if(m)k=m;this.removeCapstone(k);if(l)c('DOM').prependContent(k,l);return l;},removeCapstone:function j(k){var l=i.getCapstone(k);if(l)c('DOM').remove(l);}};f.exports=i;}),null);
__d('EntstreamFeedObjectFollowup',['csx','cx','Arbiter','CSS','DOM','EntstreamFeedObject','Event','FeedObjectCapstone','ge'],(function a(b,c,d,e,f,g,h,i){'use strict';var j='EntstreamFeedObjectFollowup/removed',k={getFollowup:function l(m){var n=c('DOM').scry(m,"._5lum");if(!n.length)n=c('DOM').scry(m.parentNode,"._5lum");return n?n[0]:null;},initCloseButton:function l(m){var n=c('DOM').scry(m,"._5xsl");if(n.length==0)return;var o=c('Event').listen(n[0],'click',function(){o.remove();c('DOM').remove(m);c('Arbiter').inform(j,m);});m.listener=o;},stopListenCloseButton:function l(m){if(m.listener)m.listener.remove();},addFollowup:function l(m,n,o){var p=c('CSS').matchesSelector(m,"._5pat"),q=c('DOM').create('div',{className:"_5lum"});if(p){c('CSS').addClass(q,"_5pau");}else c('CSS').addClass(q,"_1f84");if(o)if(typeof o==='string'){c('CSS').addClass(q,o);}else if(o instanceof Array)for(var r=0;r<o.length;r++)c('CSS').addClass(q,o[r]);var s=c('DOM').scry(m,"._5v3q")[0];if(s)m=s;var t=k.getFollowup(m);if(t)this.removeFollowup(t);c('FeedObjectCapstone').removeCapstone(m);if(n){c('DOM').appendContent(q,n);this.initCloseButton(q);if(c('CSS').matchesSelector(q,"._4-u3")){c('DOM').prependContent(m,q);}else c('DOM').insertBefore(m,q);}else c('DOM').prependContent(m,q);return q;},removeFollowup:function l(m){var n=k.getFollowup(m);this.stopListenCloseButton(n);c('DOM').remove(n);c('Arbiter').inform(j,n);},appendToFollowup:function l(m,n){var o=c('EntstreamFeedObject').getRoot(c('ge')(m)),p=k.getFollowup(o);c('DOM').appendContent(p,n);},addInstreamAdsFollowup:function l(m){var n=c('DOM').scry(m,"._211q"),o=c('DOM').create('div',{className:"_5lum"});c('DOM').prependContent(n[0],o);return o;}};f.exports=k;}),null);
__d('PixelNumConverter',[],(function a(b,c,d,e,f,g){var h={pixelValue:function i(j){return j!==null?Number(j)+'px':'auto';},numValue:function i(j){return Number(j.replace("px",""));}};f.exports=h;}),null);
__d('AdPreviewIFrameResizeListener',['Arbiter','Style','PixelNumConverter','lowerFacebookDomain'],(function a(b,c,d,e,f,g){var h={listen:function i(j,k,l,m){c('lowerFacebookDomain')();return c('Arbiter').subscribe('iframe/resize',function(n,o){if(o.frame!==j)return;k.height=o.frameHeight;if(!l)return;var p=!m||!o.storyHeight?o.frameHeight:o.storyHeight-1;c('Style').set(l,'height',c('PixelNumConverter').pixelValue(p));});}};f.exports=h;}),null);
__d('MenuTogglingItem',['DOM','MenuItem'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c('MenuItem'));i=h&&h.prototype;j.prototype.handleClick=function(){'use strict';this.toggleMenuItem();return i.handleClick.call(this);};j.prototype.toggleMenuItem=function(){'use strict';this._data=babelHelpers['extends']({},this._data,{ajaxify:this._data.toggleAjaxify,toggleAjaxify:this._data.ajaxify,value:this._data.toggleValue,toggleValue:this._data.value,markup:this._data.toggleMarkup,toggleMarkup:this._data.markup});this._rerender();};j.prototype.setValue=function(k){'use strict';this._data=babelHelpers['extends']({},this._data,{value:k});};j.prototype._rerender=function(){'use strict';var k=this._anchor;c('DOM').replace(k,this._renderItemContent());};function j(){'use strict';h.apply(this,arguments);}f.exports=j;}),null);
__d('CommercialBreakHostStoryComponentType',[],(function a(b,c,d,e,f,g){var h={POP_OVER_MENU:'POP_OVER_MENU',HOST_STORY_HEADER:'HOST_STORY_HEADER'};f.exports=h;}),null);
__d('StoryComponentVideoPlayerControllerRegistry',['CommercialBreakExperiments','CommercialBreakHostStoryComponentType','EventEmitter','Map'],(function a(b,c,d,e,f,g){'use strict';var h=new (c('EventEmitter'))(),i=new (c('Map'))(),j=new (c('Map'))(),k=new (c('Map'))();function l(p){var q=p,r=[];while(q){r.unshift(q);q=q.parentElement;}return r;}function m(p,q){if(p===null)return null;var r=l(p),s=null,t=null;q.forEach(function(u){var v=u[0],w=u[1],x=l(v);for(var y=0;y<r.length;++y)if(r[y]!==x[y]){if(t===null||y>t){t=y;s=w;}break;}});return s;}var n={registerVideoPlayerController:function p(q,r){var s=q.getVideoID(),t=i.get(s);if(t){t.push(q);}else{t=[q];i.set(s,t);}var u=null;if(r===c('CommercialBreakHostStoryComponentType').POP_OVER_MENU){u=this.findPopoverAsyncMenuForVideoPlayerController(q);}else if(r===c('CommercialBreakHostStoryComponentType').HOST_STORY_HEADER)u=this.findHostStoryControllerForVideoPlayerController(q);if(!u)return;h.emit(u.getInstanceID()+'/register',q);},registerHostStoryController:function p(q,r,s){var t=k.get(r);if(t){t.push(q);}else{t=[q];k.set(r,t);}this._informStoryComponentRegister(q.getContainerElement(),q.getInstanceID(),r,s);},registerPopoverAsyncMenu:function p(q,r){var s=r.host_video_id;if(!s||!c('CommercialBreakExperiments').instreamAdsEnableNFX)return;var t=new o(q,r),u=t.getInstanceID(),v=j.get(s);if(!v){v=[];j.set(s,v);}v.push(t);this._informStoryComponentRegister(t.getTriggerElem(),u,s,t.registerVideoPlayerController.bind(t));},_informStoryComponentRegister:function p(q,r,s,t){h.addListener(r+'/register',t);var u=this.findVideoPlayerControllerForElement(q,s);if(!u)return;h.emit(r+'/register',u);},findVideoPlayerControllerForElement:function p(q,r){var s=i.get(r);if(!s)return null;return m(q,s.map(function(t){return [t.getRootNode(),t];}));},findPopoverAsyncMenuForVideoPlayerController:function p(q){var r=j.get(q.getVideoID());if(!r)return null;return m(q.getRootNode(),r.map(function(s){return [s.getTriggerElem(),s];}));},findHostStoryControllerForVideoPlayerController:function p(q){var r=k.get(q.getVideoID());if(!r)return null;return m(q.getRootNode(),r.map(function(s){return [s.getContainerElement(),s];}));}};function o(p,q){this._menu=p;this._originalEndpoint=this._menu._endpoint;this._additionalData=q;}o.prototype.registerVideoPlayerController=function(p){p.addListener('commercialBreak/updateOptionMenuURI',function(q){this._updateEndpoint(q);}.bind(this));p.addListener('commercialBreak/recoverOptionMenuURI',function(){return this._updateEndpoint(this._originalEndpoint);}.bind(this));};o.prototype._updateEndpoint=function(p){var q=this._menu;q.setMenu(q._loadingMenu);q._setFocus(q._loadingMenu);q._endpoint=p;if(q._fetched){q._fetched=false;q.fetchMenu();}};o.prototype.getInstanceID=function(){return this._menu._instanceId.toString();};o.prototype.getTriggerElem=function(){return this._menu.getTriggerElem();};o.prototype.getOptionsButtonID=function(){return this._additionalData.options_button_id||'';};f.exports=n;}),null);
__d("XAdPreferencesInterestsWriteController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/ads\/preferences\/edit_interests\/",{action:{type:"Enum",required:true,enumType:1},fbids:{type:"IntVector",required:true},product:{type:"Enum",required:true,enumType:1},ad_id:{type:"Int"},entry_point:{type:"String"},edit_product:{type:"Enum",enumType:1},entry_product:{type:"Enum",enumType:1},location:{type:"String"},extra_data:{type:"StringToStringMap"}});}),null);