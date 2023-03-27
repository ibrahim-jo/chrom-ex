import React from 'react'
import { createRoot } from 'react-dom/client'
import ContentScript from './contentScript'

function content() {
  const container=document.createElement('div') 
  if(!container){
throw new Error("no contentscripts");

  }
  document.body.appendChild(container)
  const root = createRoot(container)
  root.render(<ContentScript />)
}

content()
