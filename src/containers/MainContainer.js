import React from 'react';
import PartsContainer from './PartsContainer'
import SynthsContainer from './SynthsContainer'
import Form from '../components/form'
import Home from '../components/home'
import View from '../components/view'



class MainContainer extends React.Component {

  switchView = () => {
  switch(this.props.viewClick) {
    case 'list':
      return (
          <SynthsContainer 
          mounts={this.props.mounts} 
          deletePart={this.props.delete}  
          removePart={this.props.removePart} />
      )
    case 'home':
      return (
         <PartsContainer 
          parts={this.props.parts} 
          deletePart={this.props.delete} 
          addPart={this.props.addPart}
          findPart={this.props.findPart}
          />
      )

    case 'view':
      return <View
        selectedPart={this.props.selectedPart}
       />
    default:
      return     <PartsContainer 
          parts={this.props.parts} 
          deletePart={this.props.delete} 
          addPart={this.props.addPart}
          findPart={this.props.findPart}
          />;
  }
}
  

  render(){
    // console.log(this.props)
    return (
      <div>
        <Home />

        {this.props.addClick
         ?
        <Form 
          onChange={this.props.handleChange}
          newModule={this.props.newModule}
          />
        :
        null
        }
        {this.switchView()}
        <br/>
      </div>
    )
  }
}

export default MainContainer;