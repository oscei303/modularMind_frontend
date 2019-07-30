import React from 'react';
import { Card, Icon } from 'semantic-ui-react'



class Part extends React.Component {

  render(){
    // console.log(this.props)
    const extra = (

    <div>
      <a>
        <Icon 
        onClick={() => this.props.handleClick(this.props.part.id)}
        name='plus circle'/>
      </a>
      <a>
       <Icon name='info' />
      </a>
      <a>
       <Icon name='edit' />
      </a>
      <a>     
       <Icon
        onClick={() => this.props.deletePart(this.props.part.id) }
        name='delete' />
      </a>

    </div>

    )
    return (
        <Card     
    image={this.props.part.img}
    header={this.props.part.name}
    meta={this.props.part.company}
    description={this.props.part.function}
    extra={extra}
  />      
)
    
  }
}

export default Part;