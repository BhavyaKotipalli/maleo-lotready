// Renders every view through the real render() with a stub DOM to catch runtime errors in templates.
const fs=require('fs'),path=require('path');
const js=fs.readFileSync(path.join(__dirname,'..','index.html'),'utf8').match(/<script>([\s\S]*)<\/script>/)[1];
const els={},handlers={};
const el=id=>els[id]||(els[id]={id,innerHTML:'',hidden:true,textContent:'',value:id==='rname'?'A. Rahman':id==='rnote'?'Checked ticket':'',focus(){},scrollIntoView(){}});
globalThis.document={getElementById:id=>(id==='app'||id==='toast'||id==='rname'||id==='rnote')?el(id):null,querySelector:()=>null,activeElement:null,addEventListener:(t,f)=>{handlers[t]=f}};
globalThis.window={scrollTo(){}};globalThis.setTimeout=()=>0;globalThis.clearTimeout=()=>{};
(0,eval)(js+';globalThis.T={act,setField,S:()=>S}');
const click=(a,arg)=>handlers.click({target:{closest:()=>({dataset:{act:a,arg:arg==null?'':String(arg)},disabled:false})}});
const html=()=>els.app.innerHTML;const has=(s,m)=>{const ok=html().includes(s);console.log((ok?'PASS ':'FAIL ')+m);if(!ok)process.exitCode=1};
has('Turn material into opportunity.','intake renders with headline');has('Illustrative image','illustration label present');
click('import');click('nav','readiness');has('2 of 5','summary shows 2 of 5 requirements');has('Add weight evidence','next action: add weight evidence');
click('addWeight');has('Review weight ticket','next action: review weight ticket');
click('accept',T.S().lots['LR-AL-0417'].evidence.at(-1).id);has('just-pass','pass animation class applied');
click('condOk');click('review');has('Ready for buyer review','ready for general');has('5 of 5','5 of 5');
click('buyer','alloy');has('4 of 7','alloy buyer: 4 of 7');has('req miss changed','changed requirements highlighted');
click('addMaterial');has('Review sampling scope','next action: review sampling scope');
click('accept',T.S().lots['LR-AL-0417'].evidence.at(-1).id);click('review');has('7 of 7','7 of 7 for alloy buyer');
click('nav','passport');has('Evidence passport · synthetic demo data','passport renders');click('export');has('lotready.passport.demo','export JSON shown');
click('nav','listing');has('Draft · ready, not published','listing draft');click('publish');has('Published to the local demo exchange for Castline','publish confirmation');
click('present');has('role="dialog"','presentation opens');for(let i=0;i<4;i++){click('slide',i);has('Speaker notes','slide '+(i+1)+' renders')}
handlers.keydown({key:'Escape',target:{tagName:'DIV'},preventDefault(){}});console.log((!T.S().present?'PASS ':'FAIL ')+'Esc closes presentation');
click('lot','LR-MX-0522');click('import');click('nav','readiness');has('Requirement mismatch','mixed lot shows mismatch');
click('lot','LR-CU-0388');click('import');has('5 of 5','copper lot complete');
click('reset');has('Import Node demo record','reset returns to start');
