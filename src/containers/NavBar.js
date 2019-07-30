import React from 'react';
import { Button } from 'semantic-ui-react'

class NavBar extends React.Component {

  
  render(){
    //  
    return (
      <div className='nav'> 
        <Button onClick={this.props.homeList}>Home</Button>
        <Button onClick={this.props.sortModules}>Sort by Name</Button>
        <Button onClick={this.props.showList}>My List </Button>
        <Button onClick={this.props.addClick}>New Module</Button>
      </div>
    )
  }
}

export default NavBar;