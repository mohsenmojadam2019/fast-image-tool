const {app,BrowserWindow,Menu} = require('electron');const path=require('node:path');
function create(){const w=new BrowserWindow({width:460,height:760,minWidth:420,minHeight:650,backgroundColor:'#f5f9ff',webPreferences:{contextIsolation:true,nodeIntegration:false}});w.loadFile(path.join(__dirname,'..','popup.html'));Menu.setApplicationMenu(null)}
app.whenReady().then(()=>{create();app.on('activate',()=>{if(BrowserWindow.getAllWindows().length===0)create()})});app.on('window-all-closed',()=>{if(process.platform!=='darwin')app.quit()});
