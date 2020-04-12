import React from 'react'
import logo from '../extra/logo.svg'
import Rainbow from '../hoc/Rainbow';

import '../App.css';

const HomePage = (props) => {
  // setTimeout(() => {
  //   props.history.push('/Icons')
  // }, 2000);
  
  return (
    <div className="container">
      <img src={logo} className="App-logo" alt="logo" width="280" />
      <h1>Welcome To The Project World</h1>
    </div>
  )
}

export default Rainbow(HomePage)
