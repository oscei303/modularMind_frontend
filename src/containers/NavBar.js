import React from 'react';
import { Button } from 'semantic-ui-react'

class NavBar extends React.Component {

  
  render(){
    //  
    return (
      <div className='nav'> 
        <Button primary onClick={this.props.homeList}>Home</Button>
        <Button primary onClick={this.props.sortModules}>Sort by Name</Button>
        <Button primary onClick={this.props.showList}>My List </Button>
        <Button primary onClick={this.props.addClick}>New Module</Button>
      </div>
    )
  }
}

export default NavBar;