import React from 'react'
import './Header.css'

function Header({ user }) {
  return (
    <header className="header-container">
      {user ? (
        <div className="user-info">
          <h2 className="welcome-text">
            Welcome, {user.firstName} {user.lastName}
          </h2>
          <p className="user-details">
            <strong>DOB:</strong> {user.dob} | <strong>Phone:</strong>{" "}
            {user.phoneNumber}
          </p>
        </div>
      ) : (
        <h2 className="welcome-text">Welcome to User Management</h2>
      )}
    </header>
  )
}

export default Header