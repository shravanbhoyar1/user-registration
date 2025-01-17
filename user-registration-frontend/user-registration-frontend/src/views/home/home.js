import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'
function home() {
  return (
    <>
    <div className='home-btns'>
    <Link to="/RegisterPage" className='register-btns'>Register</Link>
    <Link to="/login" className='login-btn'>Login</Link>
    </div>
    </>
  )
}

export default home