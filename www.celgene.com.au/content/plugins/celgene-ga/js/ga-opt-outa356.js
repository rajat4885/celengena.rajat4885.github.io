var analyticsInterval=setInterval(function(){if(typeof ga!=='undefined'&&typeof ga.getAll!=='undefined'){clearInterval(analyticsInterval);if(typeof window.gaOptout==='function'){}else{var trackingIds=ga.getAll();for(var i=0;i<trackingIds.length;i+=1){var disableStr='ga-disable-'+trackingIds[i].get('trackingId');if(document.cookie.indexOf(disableStr+'=true')>-1){window[disableStr]=true;}}
window.gaOptout=function(){var modalWidth='300';var modalHeight='105';var modalURL='#TB_inline?height='+modalHeight+'&width='+modalWidth+'&inlineId=gaOptOut';for(var i=0;i<trackingIds.length;i+=1){var disableStr='ga-disable-'+trackingIds[i].get('trackingId');document.cookie=disableStr+'=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';window[disableStr]=true;}
if(document.querySelector("gaOptOut")==null){var modal=document.createElement("div");var modalInner=document.createElement("div");var modalText=document.createTextNode(window.ga_opt_out.message);modalInner.setAttribute("id","gaOptOutInner");modalInner.appendChild(modalText);modal.appendChild(modalInner);modal.setAttribute("id","gaOptOut");modal.setAttribute("style","display:none");document.body.appendChild(modal);}
tb_show("",modalURL);}}}},1000);