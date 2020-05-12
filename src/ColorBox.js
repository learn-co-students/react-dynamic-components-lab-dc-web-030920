import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  // new ColorBox 
  // if this.props.opacity > 0.2 :
  // base case is opacity = < 0.2
  // reduction is opacity - 0.1 
  // general formula

  // colorBox(){
  //   if su(this.props.opacity > 0.2){
  //     colorBox()

  //   }

  // } 

  // return this.props.value > 100 ? null : ( <div>
  //   <Example value={newValue} />
  // </div>)

  render() {
    let opacityObj = this.props.opacity
    return (
      <div className="color-box" style={{opacity: opacityObj/*replace null with the value*/}}>
        { opacityObj < 0.2 ? null : <ColorBox  opacity= {opacityObj - 0.1 } /> }
      </div>
    )
  }

}

