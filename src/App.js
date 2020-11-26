
import './App.css';
import React from 'react'

class App extends React.Component{
  constructor(){
    super()
    this.state={
      item:'',
      items:[]
    }
    this.handleInputChange=this.handleInputChange.bind(this)
    this.onSubmit=this.onSubmit.bind(this)
  }
  
  handleInputChange=(event)=>{
    let name=event.target.name
    let value=event.target.value
    this.setState({
      [name]:value

    })


  }
  onSubmit=()=>{
    let items=this.state.items
    let item=this.state.item
    items.push(item)
    this.setState({
      items:items
    })

  }

  render(){
    return(
      <div className="App">
       <h1>TODO List App</h1> 
       <input type="text" name="item" onChange={this.handleInputChange}></input>
       <button onClick={this.onSubmit}>Submit Item</button>
       {this.state.items.map((item)=>{
         return(
           <p>{item}</p>
         )
       })}
     
    </div>

    )
  }
}


export default App;
