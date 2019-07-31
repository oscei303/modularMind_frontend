import React from 'react';
import { Image, Item} from 'semantic-ui-react'

class view extends React.Component {

  render(){
      console.log(this.props)
    return (
        <Item.Group>
        <h3>MORE INFO</h3>
        <Item>
            <Item.Image size="medium" src={this.props.selectedPart.img   } />
                <Item.Content>
                    <Item.Header as='a'>{this.props.selectedPart.name}</Item.Header>
                    <Item.Meta>{this.props.selectedPart.company}</Item.Meta>
                    <Item.Description>
                       {this.props.selectedPart.function}
                    </Item.Description>
                    <Item.Extra>Additional Details</Item.Extra>
                </Item.Content>
        </Item>
        </Item.Group>

    )
  }
}

export default view;