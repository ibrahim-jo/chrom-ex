import React from 'react'
import { Route,Routes} from 'react-router-dom'
import  About from './About'
import Home  from './Home'
const tabe = () => {
  return (
    <div>
      <ul>
        <li>
          <a href='#/' > Home</a>
        </li>
        <li>
          <a href='#/about' > About</a>
        </li>

      </ul>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route   path='/about' element={<About />}/> 

      </Routes>
    </div>
  )
}

export default tabe