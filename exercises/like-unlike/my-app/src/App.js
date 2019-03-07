import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      isTrue: false
    } 
  }
  changeIt = () => {
    this.setState((prevState)=>{
      return{
        isTrue: !prevState.isTrue
      }
    })
  }
  render(){
    let whichState = this.state.isTrue
    // let changedState = this.state.isTrue ? <img src="" alt="like" /> : <img src="" alt="dislike"/>
    return (
      <div>
       {/* place ternary conditional for images here with imga tag and h1  */}
      </div>
    )
  }
  }
// you can put the img inside <button></button>

export default App;
