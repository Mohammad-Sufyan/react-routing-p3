import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav>
        <NavLink className={(e)=>{return e.isActive?"blue" : ""}} to="/"><li>home</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"blue" : ""}} to="/login"><li>login</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"blue" : ""}} to="/about"><li>About</li></NavLink>
      </nav>
    </div>
  )
}

export default Navbar
