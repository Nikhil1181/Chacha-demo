import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);


    this.state={
      userInput:'',
      list:[]
    }

  }

changeUserInput(input){

  this.setState({

    userInput:input
  });
}

addtoList(input){

let listArray=this.state.list;

listArray.push(input);

this.setState({

  list: listArray,

  userInput:''

})


}
  render() {
    
    return (
      <div className="to-do-list-main" class="center" >

      
      <input 

      onChange={ (e)=>this.changeUserInput(e.target.value)}

      value={ this.state.userInput} 

      type="text" class="textbox" placeholder="Enter todo list"/>
      
      <button onClick={()=>this.addtoList(this.state.userInput) } class="button">Add</button>
      
      <div>

      <ul> 
        {this.state.list.map( (val) => <li>{val}</li>)}
      </ul>
        </div>

      </div>

    );
  }
}

export default App;
