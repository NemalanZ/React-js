import React, { Component } from 'react'

class Counter extends Component {

  constructor(props) {
    super(props) //constructor call to super()
  
    this.state = {  //this.state is an object
       count: 0
    }
  }

  increment(){
    //this.setState(para1, para2) has two parameters
    //in this we are passing a object to setState
    // this.setState(
    //   {
    //     count: this.state.count + 1
    //   },
    //   ()=> {
    //     console.log("callback value", this.state.count)
    //   }
    // )

    //in this we are passing a function as an argument to setState
    this.setState(prevState => ({
      count: prevState.count + 1
    }))

    console.log(this.state.count);
  }

  // increment by five
  incrementFive(){
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
  }

  render() {
    return (
      <div>
      <div>Count - {this.state.count}</div>
      <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    )
  }
}

export default Counter

