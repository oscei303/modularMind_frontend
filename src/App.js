import React from 'react'
import MainContainer from './containers/MainContainer'
import NavBar from './containers/NavBar'

class App extends React.Component {

  render(){
    return (
      <div className="App">
        <NavBar />
        <h1>...</h1>
        <MainContainer />
      </div>
    )
  }
}

export default App;
