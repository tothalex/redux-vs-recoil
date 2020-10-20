import React from 'react'

const Status: React.FC<{ className?: string }> = ({ className, children }) => {
  return (
    <div className={`${className ? className : ''} bg-blue-500`}>
      <div className="w-full flex justify-around">{children}</div>
    </div>
  )
}

export default Status
