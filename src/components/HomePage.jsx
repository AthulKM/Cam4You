import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
    const demoNavigation = useNavigate();
    const buttonClicked = () => {
        demoNavigation('/');
    }
  return (
      <div>
          <h1>This is the Home Page (Contents will be added soon)</h1>
          <button onClick={buttonClicked}>Check this page(login page)</button>
    </div>
  )
}

export default HomePage