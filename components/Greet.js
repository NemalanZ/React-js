//functional component

import React from 'react'

// const Greet = () => <h1>Hello Zoki!</h1>

//---------
//props
//---------

/*
const Greet = (props) => {
  console.log(props);
  return (
    <div>
      <h1>
        Hello {props.name} a.k.a {props.heroName} rapper {props.artistName}
      </h1>
      {props.children}
    </div>
  )
}
*/

//---------
//destructuring props in Functional components
//1st way the destructuring in the parameter
//---------

/*
const Greet = ({name, heroName}) => {
  return (
    <div>
      <h1>
        Hello {name} a.k.a {heroName} 
        </h1>
    </div>
  )
}
*/

//---------
//2nd way is to destructuring in the function body
//---------

const Greet = (props) => {
  const {name, heroName} = props
  return (
    <div>
      <h1>
        Hello {name} a.k.a {heroName} 
        </h1>
    </div>
  )
}

export default Greet