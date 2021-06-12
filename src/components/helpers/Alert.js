import React from 'react'

export const Alert = ({ type, label }) => {
  return (
    <div className={`alert alert-${type}`}>
      {label}
    </div>
  )
}
