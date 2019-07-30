import React from 'react';
import PartsContainer from './PartsContainer'
import SynthsContainer from './SynthsContainer'
import Form from '../components/form'
import Home from '../components/home'



class MainContainer extends React.Component {

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
        {this.props.showList
        ?
        <SynthsContainer mounts={this.props.mounts}  removePart={this.props.removePart} />
        :
        <PartsContainer parts={this.props.parts} deletePart={this.props.delete} addPart={this.props.addPart}/>

        }
        <br/>
      </div>
    )
  }
}

export default MainContainer;