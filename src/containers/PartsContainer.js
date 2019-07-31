import React from 'react';
import Part from '../components/part'
import { Card } from 'semantic-ui-react'



class PartsContainer extends React.Component {

  renderPart = () => {
    return this.props.parts.map(part => {
      return (
        
        <Part 
          part={part} 
          deletePart={this.props.deletePart} 
          findPart={this.props.findPart}
          handleClick={this.props.addPart} />
      )
       
    })
  }
  

  render(){
    console.log(this.props)
    return (
      <div>
        <h3>HOME</h3>
        <Card.Group itemsPerRow={6}>
          {this.renderPart()}
        </Card.Group>

      </div>
)
    
  }
}

export default PartsContainer;