
(function(compId){var _=null,y=true,n=false,x14='break-word',rz='rotateZ',e22='${Ellipse2}',x5='rgba(0,0,0,0)',e23='${overlay_2}',g='image',e25='${overlay_1}',x='text',m='rect',x9='rgba(255,255,255,1.00)',x4='horizontal',i='none',x15='rgba(120,120,120,0.00)',x3='6.0.0.400',p='px',o='opacity',lf='left',x7='rgba(0,0,0,1.00)',e26='${title}',x12='Arial, Helvetica, sans-serif',l='normal',e28='${text}',e27='${shade}',e24='${subtitle}',x1='6.0.0',x2='5.0.0',x8='rgba(255,255,255,1)',x18='14',x21='24',x13='400',tp='top',x11='20',x19='100',x16='solid';var g6='cat.jpg';var s20="<p style=\"margin: 0px;\">​SHADOW</p>",s17="<p style=\"margin: 0px;\">​Cats make wonderful pets. Their beautiful fur is gorgeous.</p>",s10="<p style=\"margin: 0px;\">​VIEW</p>";var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[],symbols={"stage":{v:x1,mv:x2,b:x3,stf:i,cg:x4,rI:n,cn:{dom:[{id:'cat',t:g,r:['0px','0px','260px','420px','auto','auto'],f:[x5,im+g6,'0px','0px']},{id:'shade',t:m,r:['0px','0px','260px','420px','auto','auto'],o:'0.5',f:[x7],s:[0,"rgb(0, 0, 0)",i]},{id:'Ellipse2',t:'ellipse',r:['-31px','-32px','334px','215px','auto','auto'],br:["50%","50%","50%","50%"],f:[x8],s:[0,"rgb(0, 0, 0)",i]},{id:'overlay_2',t:m,r:['-64px','-228px','164px','313px','auto','auto'],f:[x8],s:[0,"rgb(0, 0, 0)",i],tf:[[],['-70'],[],['1.29633']]},{id:'overlay_1',t:m,r:['157px','-228px','164px','313px','auto','auto'],f:[x8],s:[0,"rgb(0, 0, 0)",i],tf:[[],['70'],[],['1.29633']]},{id:'text',t:'group',r:['1px','420px','259','48px','auto','auto'],c:[{id:'Rectangle',t:m,r:['0px','0px','259px','48px','auto','auto'],f:[x9],s:[2,"rgba(255,255,255,1.00)",i]},{id:'view',t:x,r:['0px','15px','259px','27px','auto','auto'],text:s10,align:"center",n:[x12,[x11,p],"rgba(2,164,177,1.00)",x13,i,l,x14,l],ts:["","","","",i]}]},{id:'border',t:m,r:['0px','0px','258px','418px','auto','auto'],f:[x15],s:[1,"rgba(208,208,208,1.00)",x16]},{id:'subtitle',t:x,r:['15px','86px','230px','97px','auto','auto'],o:'1',text:s17,align:"center",n:[x12,[x18,p],"rgba(195,195,195,1.00)",x19,i,"",x14,l]},{id:'title',t:x,r:['1px','37px','260px','33px','auto','auto'],text:s20,align:"center",n:[x12,[x21,],"rgba(2,164,177,1.00)",l,i,"",x14,l]},{id:'mouse_over',t:m,r:['0px','0px','260px','420px','auto','auto'],cu:'pointer',o:'0.01',f:[x8],s:[0,"rgb(0, 0, 0)",i]}],style:{'${Stage}':{isStage:true,r:['null','null','260px','420px','auto','auto'],overflow:'hidden',f:[x8]}}},tt:{d:250,a:y,l:{"in":0},data:[["eid59",tp,0,250,"linear",e22,'-133px','-32px'],["eid58",lf,0,250,"linear",e22,'-37px','-31px'],["eid57",rz,0,250,"easeOutCirc",e23,'-70deg','60deg'],["eid50",o,0,250,"easeOutCirc",e24,'0','1'],["eid54",rz,0,250,"easeOutCirc",e25,'70deg','-60deg'],["eid56",lf,0,250,"easeOutCirc",e23,'-64px','-1px'],["eid49",tp,0,250,"easeOutCirc",e26,'15px','37px'],["eid53",lf,0,250,"easeOutCirc",e25,'157px','95px'],["eid52",tp,0,250,"easeOutCirc",e25,'-228px','-120px'],["eid60",o,0,250,"easeOutCirc",e27,'0','0.5'],["eid55",tp,0,250,"easeOutCirc",e23,'-228px','-116px'],["eid51",tp,0,250,"easeOutCirc",e28,'372px','420px']]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-520015278");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${mouse_over}","click",function(sym,e){window.open("http://www.google.com","_blank");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${mouse_over}","mouseleave",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${mouse_over}","mouseover",function(sym,e){sym.play('in');});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})})(AdobeEdge.$,AdobeEdge,"EDGE-520015278");