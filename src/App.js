import React from 'react'
import MainContainer from './containers/MainContainer'
import NavBar from './containers/NavBar'
import './App.css'

class App extends React.Component {

  state={
    selectedPart: null,
    parts: [],
    mounts: [],
    addClick : false,
    // listClick: "",
    sortClick: false,
    // homeClick: "",
    viewClick: "",
    name: "",
    function: "",
    company: "",
    img: ""
  }

  findPart = (partId) => {
    const foundPart = this.state.parts.find(partObj => {
      return partId === partObj.id
    })
    this.setState({
      selectedPart: foundPart,
      viewClick: 'view'
    }, () => console.log(this.state.selectedPart))
  }

  addPart = (partId) => {
    // console.log(partId)
    const foundPart = this.state.parts.find(partObj => {
      return partId === partObj.id
    })
    this.setState({
      mounts: [...this.state.mounts, foundPart]
    })

  }

  deletePart = (partId) => {
    console.log(partId)
    fetch(`http://localhost:3000/parts/${partId}/delete`,{
      method: 'DELETE'
    }).then(resp => resp.json())
      .then(partObj => {
        
        const newParts = this.state.parts.filter(part => {
          return part.id !== partId
        })

        this.setState({
          parts: newParts
          
        })
      })

  }

  addModule = () => {
    this.setState({
      addClick: !this.state.addClick
    })
  }

  sortModules = () => {
    this.setState({
     sortClick : 'sort'
    })

    if(this.state.sortClick){
      const sortArray = this.state.parts.sort(function (a, b) {
        var nameA = a.name.toUpperCase();  
        var nameB = b.name.toUpperCase(); 
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      this.setState({
        parts: sortArray
      })
    }else{
       const sort = this.state.parts.sort(function (a, b) {
         var nameA = a.name.toUpperCase() 
         var nameB = b.name.toUpperCase()
         if (nameA < nameB) {
           return 1;
         }
         if (nameA > nameB) {
           return -1;
         }
         return 0;
       });
       this.setState({
         parts: sort
       })
    
  }
}

  showList = () => {
    this.setState({
      viewClick: 'list'
    })
  }

  view = () => {
    this.setState({
      viewClick: 'view'
    })
  }

   homeList = () => {
     this.setState({
       viewClick: 'home'
     })
   }


  componentDidMount = () => {
    this.fetchData()
  }

  fetchData = () => {
    fetch('http://localhost:3000/parts')
      .then(r => r.json())
      .then(partsData => {
        this.setState({
          parts: partsData
        })
      })
  }

  removePart = (partId) => {
    console.log(partId)
    const newMounts = this.state.mounts.filter(part => {
      return partId !== part.id
    })
    // console.log(newShelf)
    this.setState({
      mounts: newMounts
    })
  }

  handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  
  newModule = () => {
    console.log('submit')

    const module = {
      name: this.state.name,
      function: this.state.function,
      company: this.state.company,
      img: this.state.img
    }

  fetch("http://localhost:3000/parts/new", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": 'application/json'
    },
    body: JSON.stringify(module)
  }).then(resp => resp.json())
    .then(data => {
      this.setState({
        parts: [...this.state.parts, data],
        addClick: false

      })
    })
  }

  render(){
    // console.log(
    //   'name',this.state.name,
    //   'func', this.state.function,
    //   'company', this.state.company,
    //   'img', this.state.img
    //   )
    return (
      <div>
        <NavBar 
          homeList={this.homeList} 
          addClick={this.addModule} 
          showList={this.showList} 
          sortModules={this.sortModules}
        />
        <MainContainer
          selectedPart={this.state.selectedPart}
          viewClick={this.state.viewClick}
          findPart={this.findPart}
          delete={this.deletePart} 
          newModule={this.newModule}
          handleChange={this.handleChange}
          removePart={this.removePart} 
          showList={this.state.listClick} 
          addClick={this.state.addClick} 
          addPart={this.addPart} 
          parts={this.state.parts} 
          mounts={this.state.mounts} 
          homeList={this.state.homeClick}
        />
      </div>
    )
  }
}

export default App;
