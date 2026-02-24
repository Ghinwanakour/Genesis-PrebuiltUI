import React from 'react'

function Card({ children, className = '' }) {
  return (
    <div className={`glass rounded-xl p-6 ${className}`}>
      {children}
    </div>
  )
}

export default Card