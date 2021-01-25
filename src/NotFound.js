import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      <div className="not-found">
          There ain't anything here
          <Link to="/">Return home</Link>
      </div>
    </>
  )
}

export default NotFound
