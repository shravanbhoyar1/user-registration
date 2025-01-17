import React from 'react'
import './Dashboard.css'
function Dashboard({user}) {
  return (
    <div className="dashboard-card">
      <h2 className="dashboard-title">User Dashboard</h2>
      <p>
        <strong>Username:</strong> {user.username}
      </p>
      <p>
        <strong>DOB:</strong> {user.dob}
      </p>
      <p>
        <strong>Phone Number:</strong> {user.phoneNumber}
      </p>
      <p>
        <strong>Address:</strong> {user.address.addressLine1}, {user.address.addressLine2}, {user.address.addressLine3}, {user.address.postalCode}
      </p>
      <p>
        <strong>Current Time:</strong> {new Date().toLocaleTimeString()}
      </p>
    </div>
  )
}

export default Dashboard