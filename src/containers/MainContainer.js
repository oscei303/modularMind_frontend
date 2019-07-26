import React from 'react';
import PartsContainer from './PartsContainer'


class MainContainer extends React.Component {

  render(){
    return (
      <div>
        <h5> Im in Container</h5>
        <PartsContainer />
      </div>
    )
  }
}

export default MainContainer;