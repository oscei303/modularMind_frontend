import React from 'react';
import Part from '../components/part'
import { Card } from 'semantic-ui-react'


class SynthsContainer extends React.Component {

   renderPart = () => {
    return this.props.mounts.map(part => {
      return (
        <Part part={part} deletePart={this.props.deletePart}  handleClick={this.props.removePart}/>
      )
    })
  }
  

  render(){
    // console.log('inside Synths', this.props)
    return (
  
      <div> 

        <h3>MY LIST</h3>
          <Card.Group itemsPerRow={6}>
          
              {this.renderPart()}
            
            
          </Card.Group>
        
      </div>
    
       
    )
  }
}

export default SynthsContainer;