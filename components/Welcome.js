//class component

import React, {Component} from "react";

//---------
//props
//---------
//class inheritance

/*
class Welcome extends Component{
  //render() method used to return HTML
  render(){
    return <h1>Welcome {this.props.name} a.k.a {this.props.heroName}</h1>
  }
}
*/

//---------
//destructuring props and states in class component
//---------

class Welcome extends Component{
  //render() method used to return HTML
  render(){
    const {name, heroName} = this.props
    //const {state1, state2} = this.props //used for destructuring states
    return (
      <h1>
        Welcome {name} a.k.a {heroName}
      </h1>
    )
  }
}

export default Welcome