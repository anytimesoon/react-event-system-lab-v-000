import React, { Component } from 'react';

export default class KeyPad extends Component {
  
  keyUpCallback = () => {
      console.log('')
  }
  
  render(){
    return(
        <input type="password" onKeyUp={this.keyUpCallback()}/>
      )
  }
}
