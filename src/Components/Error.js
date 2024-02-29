import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    const navigate = useNavigate();
  return (
    <div>
        <h2>404 Page Not Found</h2>
        <button onClick={() => navigate(-1)}>GO Back</button>
        <button onClick={() => navigate('/')}>Go To Home</button>
    </div>
  )
}

export default Error