function WildEmitter(){this.callbacks={}}function setCookie(e,t){var i=new Date;i.setDate(i.getDate()+30);var n=escape(t)+";expires="+i.toUTCString();n+=";path=/;domain=.celgene.com",document.cookie=e+"="+n}function readCookie(e){for(var t=e+"=",i=document.cookie.split(";"),n=0;n<i.length;n++){for(var a=i[n];" "==a.charAt(0);)a=a.substring(1,a.length);if(0==a.indexOf(t))return a.substring(t.length,a.length)}return null}function ts(e,t){e=parseInt(e);var i=new Array("1","1.2","1.4");_TEXT_RESIZER_INDEX="undefined"!=typeof t?parseInt(t):parseInt(_TEXT_RESIZER_INDEX)+e,_TEXT_RESIZER_INDEX>i.length-1?_TEXT_RESIZER_INDEX=parseInt(i.length-1):_TEXT_RESIZER_INDEX<0&&(_TEXT_RESIZER_INDEX=0),setCookie("tsize",_TEXT_RESIZER_INDEX),$("#primary > article").not(".newsroom article .supplementary").not("#primary article.news.custom").css({fontSize:i[_TEXT_RESIZER_INDEX]+"em","line-height":parseInt(i[_TEXT_RESIZER_INDEX])+.5625})}function mobileFlyout(){return}function sidebarNavMobile(){function e(e){"undefined"!=typeof e&&$(".sidebar-nav-mobile select").append('<option value="'+e.attr("href")+'" class="'+e.parent().attr("class")+'">'+e.text()+"</option>")}function t(t){$(t).each(function(t){var i=$(this);e(i)})}if(0!=$("aside#secondary").length){if($("#sidebar-nav > ul > li.active li").addClass("secondary"),$("#sidebar-nav > ul > li.current_page_ancestor li").addClass("secondary"),$("#sidebar-nav > ul > li.active li li").removeClass("secondary").addClass("tertiary"),$("#sidebar-nav > ul > li.current_page_ancestor li li").removeClass("secondary").addClass("tertiary"),$("#sidebar-nav > ul > li.active li li li").removeClass("secondary").removeClass("tertiary").addClass("quaternary"),$("#sidebar-nav > ul > li.current_page_ancestor li li li").removeClass("secondary").removeClass("tertiary").addClass("quaternary"),$("#primary").before('<nav class="sidebar-nav-mobile"><select></select></nav>'),$("body").hasClass("single"))var i=$("#menu-mobile-single-newsroom li:eq(0) a:eq(0)"),n=$("#menu-mobile-single-newsroom li:eq(0) ul li a");else if($("#sidebar-nav > ul > li").hasClass("active"))var i=$("#sidebar-nav > ul > li.active > a"),n=$("#sidebar-nav > ul > li.active li a");else if($("#sidebar-nav > ul > li").hasClass("current_page_ancestor"))var i=$("#sidebar-nav > ul > li.current_page_ancestor > a"),n=$("#sidebar-nav > ul > li.current_page_ancestor li a");e(i),t(n),$(".sidebar-nav-mobile select").not(".no-generatedcontent select").customSelectMenu(),$(".sidebar-nav-mobile li").click(function(){window.location=$(this).attr("data-option-value")})}}function homepageInjectCallouts(){return}function homepageDesktopFlexslider(e){function t(){return window.innerWidth||document.documentElement.clientWidth}function i(){return $("#page").innerWidth()}function n(){return t()<mobileMaxWidth?i():t()<tabletMaxWidth?i()/3:i()/4}function a(){return t()<mobileMaxWidth?1:i()<tabletMaxWidth?3:4}var o,l=$(window);l.resize(function(){$.isEmptyObject(o)||(o.vars.itemWidth=n(),o.vars.minItems=a(),o.vars.maxItems=a())}),l.on("load",function(){$(e).flexslider({animation:"slide",animationLoop:!0,slideshow:!1,itemWidth:n(),minItems:a(),maxItems:a(),start:function(e){o=e,setSlideHeights(),isMobile&&($mobileCallout1.append($("#articles.flexslider .callout-1").clone()),$mobileCallout1.append($("#articles.flexslider .callout-2").clone()),$mobileCallout3.append($("#articles.flexslider .callout-3").clone()),$("#articles.flexslider").data("flexslider").removeSlide(0),$("#articles.flexslider").data("flexslider").removeSlide(1))}})})}function adjustNewsItems(){if($("body").hasClass("home")||$("body").hasClass("page-template-timber_homepage-light")){if($window=$(window),$(window).width()>mobileMaxWidth&&0==$("#articles.flexslider .callout-1").length){$("#articles.flexslider").data("flexslider").addSlide($mobileCallout1.clone(),0),$("#articles.flexslider").data("flexslider").addSlide($mobileCallout3.clone(),2);var e=$(".flex-viewport").height();$(".callout-1").closest("li").css("height",e),$(".callout-3").closest("li").css("height",e),$(".callout-1 .custom-select-menu").remove(),$(".callout-1 .drop-nav").unwrap(),$(".callout-1 .drop-nav").customSelectMenu(),_exit_link_modal.bind_manual_triggers($)}$(window).width()<mobileMaxWidth&&$("#articles.flexslider .callout-1").length>0&&($mobileCallout1.append($("#articles.flexslider .callout-1").clone()),$mobileCallout1.append($("#articles.flexslider .callout-2").clone()),$mobileCallout3.append($("#articles.flexslider .callout-3").clone()),$("#articles.flexslider").data("flexslider").removeSlide(0),$("#articles.flexslider").data("flexslider").removeSlide(1))}}function setSlideHeights(){var e=$(".flex-viewport"),t=e.height();e.find(".slides>li").css("height",t),$("#articles .callout-1").css("height",t/2),$("#articles .callout-2").css("height",t/2)}function getMaxHeight(e){var t=[];return e.each(function(e){t.push(parseInt($(this).css("height"),10))}),Math.max.apply(null,t)}function homepageHeroRow(e){0!=$(e).length&&($(e).find("article img").css("marginLeft",$(this).width()/-6),$(e).find("article:nth-child(even) img").css("marginLeft","-55%"))}function homepageFlexslider(e){$(window).width()<mobileMaxWidth?(isMobile=!0,homepageInjectCallouts(),homepageDesktopFlexslider(e)):(homepageInjectCallouts(),homepageDesktopFlexslider(e))}function fixMobileFlexsliderHeight(e){$(e).find(".slides").css("height",document.documentElement.clientWidth-2)}function createCookieRaw(e,t,i){document.cookie=e+"="+t+i+"; path=/"}function createCookie(e,t,i){if(i){var n=new Date;n.setTime(n.getTime()+24*i*60*60*1e3);var a="; expires="+n.toGMTString()}else var a="";createCookieRaw(e,t,a)}function createCookieHours(e,t,i){if(i){var n=new Date;n.setTime(n.getTime()+60*i*60*1e3);var a="; expires="+n.toGMTString()}else var a="";createCookieRaw(e,t,a)}function createCookieSession(e,t){var i="";createCookieRaw(e,t,i)}function getCookie(e){for(var t=e+"=",i=document.cookie.split(";"),n=0;n<i.length;n++){for(var a=i[n];" "==a.charAt(0);)a=a.substring(1,a.length);if(0==a.indexOf(t))return a.substring(t.length,a.length)}return null}function eraseCookie(e){createCookie(e,"",-1)}if(function(){function e(t,i,n){function a(l,r){if(!i[l]){if(!t[l]){var s="function"==typeof require&&require;if(!r&&s)return s(l,!0);if(o)return o(l,!0);var c=new Error("Cannot find module '"+l+"'");throw c.code="MODULE_NOT_FOUND",c}var d=i[l]={exports:{}};t[l][0].call(d.exports,function(e){var i=t[l][1][e];return a(i||e)},d,d.exports,e,t,i,n)}return i[l].exports}for(var o="function"==typeof require&&require,l=0;l<n.length;l++)a(n[l]);return a}return e}()({1:[function(e,t,i){t.exports={init:function(){this.$window=$(window),this.mobileMaxWidth=767,this.tabletMaxWidth=959,this.selector=".flexslider.congressSlider",this.flexslider=[];var e=this;$(this.selector).each(function(t,i){var n=$(i);n.flexslider({animation:"slide",animationLoop:!0,slideshow:!1,itemWidth:e.dynItemWidth(),minItems:e.getGridSize(),maxItems:e.getGridSize(),start:function(t){e.flexslider.push(t),$(t).addClass("flexsliderInitalized")}})}),this.$window.resize(function(){e.resize()})},getWinWidth:function(){return window.innerWidth||document.documentElement.clientWidth},getPageWidth:function(){return $("#page").innerWidth()},dynItemWidth:function(){return this.getWinWidth()<=this.mobileMaxWidth?this.getPageWidth():this.getWinWidth()<this.tabletMaxWidth?this.getPageWidth()/3:this.getPageWidth()/4},getGridSize:function(){return this.getWinWidth()<this.mobileMaxWidth?1:this.getPageWidth()<this.tabletMaxWidth?3:4},resize:function(){var e=this;$.each(this.flexslider,function(t,i){i.vars.itemWidth=e.dynItemWidth(),i.vars.minItems=e.getGridSize(),i.vars.maxItems=e.getGridSize()})}}},{}],2:[function(e,t,i){t.exports={init:function(){$(".faq-wrapper .faq-title").on("click",function(){$("#main.faq-only-one").length&&!$(this).parent().hasClass("panel-visible")&&$(".faq-wrapper.panel-visible").removeClass("panel-visible").find(".faq-panel").slideToggle(500),$(this).parent().toggleClass("panel-visible"),$(this).parent().find(".faq-panel").slideToggle(500)}),$(".sitemap-pages").on("click",function(){$(".sitemap-selector.sitemap-selected").removeClass("sitemap-selected"),$(this).addClass("sitemap-selected"),$(".sitemap-news-wrapper").hide(),$(".sitemap-pages-wrapper").show()}),$(".sitemap-news").on("click",function(){$(".sitemap-selector.sitemap-selected").removeClass("sitemap-selected"),$(this).addClass("sitemap-selected"),$(".sitemap-pages-wrapper").hide(),$(".sitemap-news-wrapper").show()}),$(document).ready(function(){if(""!=window.location.hash&&"#"!=window.location.hash){var e=$(document).find("[data-jump='"+window.location.hash.substr(1).toLowerCase()+"']");e.length&&(e.toggleClass("panel-visible").find(".faq-panel").slideToggle(500),$("html,body").animate({scrollTop:e.offset().top-50},500))}})}}},{}],3:[function(e,t,i){$(document).ready(function(){var t=e("./faq-template.js"),i=e("./congresses.js");t.init(),i.init()})},{"./congresses.js":1,"./faq-template.js":2}]},{},[3]),window.App={},WildEmitter.prototype.on=function(e,t,i){var n=3===arguments.length,a=n?arguments[1]:void 0,o=n?arguments[2]:arguments[1];return o._groupName=a,(this.callbacks[e]=this.callbacks[e]||[]).push(o),this},WildEmitter.prototype.once=function(e,t,i){function n(){a.off(e,n),r.apply(this,arguments)}var a=this,o=3===arguments.length,l=o?arguments[1]:void 0,r=o?arguments[2]:arguments[1];return this.on(e,l,n),this},WildEmitter.prototype.releaseGroup=function(e){var t,i,n,a;for(t in this.callbacks)for(a=this.callbacks[t],i=0,n=a.length;i<n;i++)a[i]._groupName===e&&(a.splice(i,1),i--,n--);return this},WildEmitter.prototype.off=function(e,t){var i,n=this.callbacks[e];return n?1===arguments.length?(delete this.callbacks[e],this):(i=n.indexOf(t),n.splice(i,1),this):this},WildEmitter.prototype.emit=function(e){var t,i,n,a=[].slice.call(arguments,1),o=this.callbacks[e],l=this.getWildcardCallbacks(e);if(o)for(n=o.slice(),t=0,i=n.length;t<i&&n[t];++t)n[t].apply(this,a);if(l)for(i=l.length,n=l.slice(),t=0,i=n.length;t<i&&n[t];++t)n[t].apply(this,[e].concat(a));return this},WildEmitter.prototype.getWildcardCallbacks=function(e){var t,i,n=[];for(t in this.callbacks)i=t.split("*"),("*"===t||2===i.length&&e.slice(0,i[0].length)===i[0])&&(n=n.concat(this.callbacks[t]));return n},App.EventEmitter=new WildEmitter,Array.prototype.indexOf||(Array.prototype.indexOf=function(e){"use strict";if(null==this)throw new TypeError;var t,i,n=Object(this),a=n.length>>>0;if(0===a)return-1;if(t=0,arguments.length>1&&(t=Number(arguments[1]),t!=t?t=0:0!=t&&t!=1/0&&t!=-(1/0)&&(t=(t>0||-1)*Math.floor(Math.abs(t)))),t>=a)return-1;for(i=t>=0?t:Math.max(a-Math.abs(t),0);i<a;i++)if(i in n&&n[i]===e)return i;return-1}),String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),window.log=function(){log.history=log.history||[],log.history.push(arguments),this.console&&console.log(Array.prototype.slice.call(arguments))},"undefined"==typeof console){var console={};console.log=console.error=console.info=console.debug=console.warn=console.trace=console.dir=console.dirxml=console.group=console.groupEnd=console.time=console.timeEnd=console.assert=console.profile=function(){}}var mobileMaxWidth=767,tabletMaxWidth=959,desktopMaxWidth=1280,isMobile=!1,$mobileCallout1=$("<li></li>"),$mobileCallout3=$("<li></li>"),_TEXT_RESIZER_INDEX=0;null!=readCookie("tsize")&&ts(0,readCookie("tsize")),$(document).ready(function(){$(window).width()<mobileMaxWidth&&mobileFlyout()});var debouncedAdjustNewsItems=_.debounce(adjustNewsItems,50);$("#articles.flexslider").length>0&&$(window).resize(debouncedAdjustNewsItems),$(document).ready(function(){if(homepageFlexslider("#articles.flexslider"),$(".flexslider-container figure img").each(function(){var e=$(this);"320px"===e.css("width")&&e.css("width","100%")}),$("#hero_slider .flexslider").flexslider(),homepageHeroRow("#hero .row"),$("select").not(".unstyled-select").not(".sidebar-nav-mobile select").not(".no-generatedcontent select").each(function(){var e=$(this),t=this.id,i="";if("undefined"!=typeof e.attr("onchange")&&(i=e.attr("onchange")),e.customSelectMenu(),e.hasClass("gfield_select")){var n=e.parents(".ginput_container").children("#"+t);n.attr("id",t+"_cust"),e.attr("id",t),""!==i&&n.on("click","li",function(t){e.val($(this).attr("data-option-value")).change()})}}),$(".drop-nav").change(function(){""!=$(this).val()&&(document.location.href=$(this).val())}),$("#field_1_19").length){$("#field_1_19 .ginput_container").css({position:"relative"});var e=250,t=$('<div class="limiter-messaging">Characters remaining: <span class="limiter-span" id="limiter-span"></span></div>');t.css({position:"absolute",bottom:"5px",left:"5px","font-size":"10px"}),$("#field_1_19 #input_1_19").after(t),$("#field_1_19 #input_1_19").limiter(e,t.find("#limiter-span"))}}),function(e){e.fn.extend({limiter:function(t,i){function n(e,i){var n=e.value.length;n>t&&(e.value=e.value.substr(0,t),n=t),i.html(t-n)}e(this).on("keyup focus blur",function(){n(this,i)}),n(e(this)[0],i)}})}(jQuery),$(function(){var e=$(".page-id-6");if(e.length>0){var t=e.find("nav#grid .press-releases"),i=t.find("li");if(0===i.length)return;var n=t.closest(".col"),a=n.height();i.find("h4").css("margin","0");var o=$(i.get(0)).position().top-n.position().top,l=a-o,r=0,s=0;i.each(function(){var e=$(this);return s+e.height()>l?void e.remove():(r+=1,void(s+=e.height()))});var c=l-s;i.css("margin-bottom",c/r)}}),$(function(){navigator.userAgent.indexOf("MSIE 9")>0&&document.documentElement.clientWidth>767&&document.documentElement.clientWidth<800&&$("nav.secondary li a").css("font-size","12px")}),$(function(){var e=$("#callout-4");$("body").hasClass("home")&&"block"==e.css("display")&&e.css("display","none")}),$(function(){function e(e){function t(e){return(e.indexOf(location.host)>=0||e.indexOf("http")<0)&&!(e.indexOf(location.host+".tr")>0||e.indexOf(location.host+".au")>0)}for(var i,n=($(e),{}),a=0,o=e.attributes,l=o.length;a<l;a+=1)i=o[a],n[i.nodeName]=i.nodeValue;var r=$("<a>",n);""!==n["data-option-value"]&&"undefined"!=typeof n["data-option-value"]&&(r.attr("href",n["data-option-value"]),t(n["data-option-value"])&&(window.location=n["data-option-value"])),r.css({height:1,width:1}),$("body").append(r),r.click(),setTimeout(function(){r.remove()},100)}App.EventEmitter.on("window:load",function(){$(".custom-select-menu ul li").on("click",function(){App.EventEmitter.emit("custom-select-menu:click",$(this)[0])})}),App.EventEmitter.on("custom-select-menu:click",function(t){var i=$(t);i.closest(".menu-global-sites-container, .menu-therapies-container").length>0&&e(t)})}),$(function(){App.EventEmitter.on("*:click",function(){$(arguments[1]).parents(".countries").length>0&&dataLayer.push({event:"cust.click",triggeringList:"Countries",triggeringObject:arguments[1].innerText}),$(arguments[1]).parents(".menu-therapies-container").length>0&&dataLayer.push({event:"cust.click",triggeringList:"Find a Therapy",triggeringObject:arguments[1].innerText})})}),$(function(){var e=$("nav.secondary").find('[href*="investors"]');e.length>0&&e.on("click",function(){dataLayer.push({event:"cust.nav",triggeringNav:"Top Nav",triggeringObject:"Investors Section"})});var t=$("nav.secondary-mobile").find('[href*="investors"]');t.length>0&&t.on("click",function(){dataLayer.push({event:"cust.nav",triggeringNav:"Mobile Nav",triggeringObject:"Investors Section"})});var i=$("#menu-footer-primary-2").find('[href*="investors"]');i.length>0&&i.on("click",function(){dataLayer.push({event:"cust.nav",triggeringNav:"Footer",triggeringObject:"Investors Section"})});var e=$("nav.secondary").find('[href*="careers"]');e.length>0&&e.on("click",function(){dataLayer.push({event:"cust.nav",triggeringNav:"Top Nav",triggeringObject:"Careers"})});var t=$("nav.secondary-mobile").find('[href*="careers"]');t.length>0&&t.on("click",function(){dataLayer.push({event:"cust.nav",triggeringNav:"Mobile Nav",triggeringObject:"Careers"})});var i=$("#menu-footer-primary-2").find('[href*="careers"]');i.length>0&&i.on("click",function(){dataLayer.push({event:"cust.nav",triggeringNav:"Footer",triggeringObject:"Careers"})})}),"undefined"!=typeof App.EventEmitter&&$(window).on("load",function(){App.EventEmitter.emit("window:load")});var celgeneAnalyticsInterval=setInterval(function(){"undefined"!=typeof ga&&(App.EventEmitter.emit("Analytics:load"),clearInterval(celgeneAnalyticsInterval))},1e3);!function(){App.EventEmitter.on("Analytics:load",function(){if("function"==typeof window.gaOptout);else{if("function"!=typeof ga.getAll)return;trackingIds=ga.getAll();for(var e=0;e<trackingIds.length;e+=1){var t="ga-disable-"+trackingIds[e].get("trackingId");document.cookie.indexOf(t+"=true")>-1&&(window[t]=!0)}window.gaOptout=function(){for(var e=0;e<trackingIds.length;e+=1){var t="ga-disable-"+trackingIds[e].get("trackingId");document.cookie=t+"=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/",window[t]=!0}}}})}();var calloutItems=$(".callout-3:not(.mobile-callout) ul li").length;switch(calloutItems){case 3:$(".callout-3 ul").addClass("threeItems");break;case 4:$(".callout-3 ul").addClass("fourItems")}$(function(){$("#searchKeyword").on("submit",function(e){e.preventDefault(),$this=$(this);var t=$this.find("#jobSearch");if(t.length>0){var i=t.val();""!=i&&"undefined"!=typeof careersPage&&"undefined"!=typeof careersPage.searchUrl&&""!=careersPage.searchUrl&&(window.location.href=careersPage.searchUrl+i)}}),$(".careerFlexslider").flexslider({}),App.EventEmitter.on("custom-select-menu:click",function(e){var t=$(e);if(t.closest(".bl_mobile_select_container, .search_region_mobile_select_container, #careersByFunction").length>0){var i=t.attr("data-option-value");"undefined"!=typeof i&&""!=i&&(window.location.href=t.attr("data-option-value"))}})}),$(document).ready(function(){if($("html.lte9").length>0){var e=$("#searchKeyword #jobSearch"),t=e.attr("placeholder");e.val(t),e.on("focus",function(){var e=$(this);e.val()==t&&e.val("")}),e.on("blur",function(){var e=$(this);""==e.val()&&e.val(t)}),$('#searchKeyword input[type="submit"]').click(function(i){e.val()==t&&i.preventDefault()})}}),$(document).ready(function(){if($("#language-selection-modal").length>0){if(getCookie("celgcsSelectLanguage"))return!0;$("#language-selection-modal").show(),$("#exit-link-modal-background").fadeIn(),$("#exit-link-modal-content").fadeIn(),$("#exit-link-modal-content").addClass("language-modal"),$(window).resize(),$("#language-selection-modal .exit-link-modal-links-block a").click(function(e){e.preventDefault();var t=$(this);createCookie("celgcsSelectLanguage",!0),window.location!=t.attr("href")?window.location=t.attr("href"):$("#exit-link-modal-content").fadeOut(function(){$(this).removeClass("language-modal")})}),$("#exit-link-modal-background, #exit-link-modal-close").click(function(e){setTimeout(function(){$("#exit-link-modal-content").removeClass("language-modal")},550)})}}),$(document).ready(function(){var e=$("#sitewide-modal"),t=$("#sitewide-modal-background");if("undefined"==typeof window.sitewideModalSettings||e.length<=0)return!1;var i=window.sitewideModalSettings.cookie_name,n=window.sitewideModalSettings.cookie_duration,a=window.sitewideModalSettings.ignore_background_click||!1,o=function(){t.css({width:$(window).width()+"px",height:$(document).height()+"px"});var i=($(window).width()-e.outerWidth())/2,n=($(window).height()-e.outerHeight())/2;n<0&&(n=0),e.css({top:n+"px",left:i+"px"})},l=window._.debounce(o),r=function(){e.hide(),t.fadeOut(),i!==!1&&"SESSION"==n?createCookieSession(i,!0):i!==!1&&n!==!1&&createCookieHours(i,!0,n),$(window).off("scroll",l)},s=function(){return!(i===!1||!getCookie(i))||(e.show(),t.fadeIn(),$(window).on("resize",o),$(window).on("scroll",l),o(),$(".sitewide-modal-close").on("click",r),void(a===!1&&$(".sitewide-modal-background").on("click",r)))};s()}),$(document).ready(function(){""==$(".searchform").find(".s").val()&&$(".submit").attr("disabled","disabled"),$(".searchform .s").on("input",function(e){""==$(this).val()?$(".searchform .submit").attr("disabled","disabled"):$(".searchform .submit").removeAttr("disabled","disabled")})}),$(window).on("load",function(){var e=function(e,t,i){var n=$(e);if(0!=n.length&&"number"==typeof t){var a=n.find(".carouselCaptions .caroCaption").eq(t);i?a.fadeIn(120):a.fadeOut(100)}},t=[];$(".newsCarousel").each(function(){var i=$(this),n=i.find(".carouselImages.flexslider"),a=i.find(".carouselThumbs.flexslider"),o=(i.find(".carouselCaptions.flexslider"),t.length+1);if(i.prop("id","carousel-"+o),t.push(o),1==n.length&&1==a.length){var l=300;i.hasClass("newsCarouselFullWidth")?a.flexslider({animation:"slide",controlNav:!1,animationLoop:!0,slideshow:!1,itemWidth:56,itemMargin:5,animationSpeed:l,touch:!1,asNavFor:"#carousel-"+o+" .carouselImages.flexslider"}):a.flexslider({animation:"slide",controlNav:!1,animationLoop:!0,slideshow:!1,itemWidth:56,itemMargin:5,animationSpeed:l,touch:!1,asNavFor:"#carousel-"+o+" .carouselImages.flexslider"}),n.flexslider({animation:"slide",controlNav:!1,animationLoop:!0,slideshow:!1,animationSpeed:l,controlsContainer:"#carousel-"+o+" .carouselControls",sync:"#carousel-"+o+" .carouselThumbs.flexslider",before:function(){var t=$(this.controlsContainer).parents(".newsCarousel").eq(0),i=t.find(".caroImg.flex-active-slide"),n=t.find(".caroImg").index(i);e("#"+t.attr("id"),n-1,!1)},after:function(){var t=$(this.controlsContainer).parents(".newsCarousel").eq(0),i=t.find(".caroImg.flex-active-slide"),n=t.find(".caroImg").index(i);2==n&&(t.find(".carouselThumbs .caroThumb").eq(n-2).removeClass("flex-active-slide"),t.find(".carouselThumbs .caroThumb").eq(n-1).addClass("flex-active-slide")),e("#"+t.attr("id"),n-1,!0)},start:function(){var e=$(this.controlsContainer).parents(".newsCarousel").eq(0);e.find(".carouselCaptions .caroCaption:first").fadeIn(80)}})}})});