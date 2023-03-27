import React from 'react';
import { createRoot } from 'react-dom/client';
import {HashRouter as Router} from 'react-router-dom'
import Tab from './tabe'

function init() {
    
    const appcontainer=document.createElement('div')
 document.body.appendChild(appcontainer)   
 if(!appcontainer){
     throw new Error("not fond any div");
    
 }
 const root= createRoot(appcontainer)
 root.render( <Router> <Tab/> </Router>)

}

init()