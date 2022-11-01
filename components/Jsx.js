//jsx [allow you to write HTML in react]

import React from "react";

// const Jsx = () => {
                              //('tag', {className: '' or id: ''}, 'value')
//   return React.createElement('div', 'null', 'Welcome')// only take three parameters.
// }



//adding h1 inside div

const Jsx = () => {
  //('tag', 'class or id', 'value')
return React.createElement('div', {className: 'head'}, React.createElement('h1', null, 'Welcome'))
}

export default Jsx