
import React from "react"
import {createRoot} from "react-dom/client"
import Popup from  './popup'

function test() {
    const container=document.createElement('div')
    document.body.appendChild(container)
    const root=createRoot(container)
    root.render( <Popup />  ) 
}

test()
