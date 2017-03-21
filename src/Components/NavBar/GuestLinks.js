import React from 'react'
import { NavLink } from 'react-router-dom'

const GuestLinks = (props) => (
  <div className='collapse navbar-collapse justify-content-end' id='navbarNavAltMarkup'>
    <div className='navbar-nav'>
      <NavLink to='/signup' className='nav-link' avtiveClassName='active'>Signup</NavLink>
      <NavLink to='/login' className='nav-link' activeClassName='active'>Login</NavLink>
    </div>
  </div>
)

export default GuestLinks