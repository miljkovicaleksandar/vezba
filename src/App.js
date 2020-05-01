import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {image: null}
  };
  render(){
    const image = this.state.image
    if(image){
      return (
      <>
      Loading...
      </>)
    }
    return (
      <>
       <img src={this.state.image}/>
      </>
    );
  }
}
 


export default App;
/* const {image} = this.state.image;
    if(!image){
      return(
        <h1>
          Loading...
        </h1>
      )
    }
    */