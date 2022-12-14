//state use in class component

import React, {Component} from "react";

class Message extends Component{
  constructor(){
    super() //super() refers to the parent class.
    this.state = { //access state object using this.state
      message: "Welcome Messi"
    }
  }

  changeMessage() {
    this.setState({
      message: "Thanks for subcribing"
    })
  }

  render(){
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>subcribe</button>
      </div>
    )
  }
}

export default Message

