import React, { Component } from 'react'
const url = 'https://reqres.in/api/users?page=2'


export default class Table extends Component {

constructor(props){
  super(props)
    this.state = {
      
    }
    this.move = this.move.bind(this)
}

move = (direction) => {
console.log(direction)
let logData = new FormData();
logData.append('direction', direction);
console.info(logData);
navigator.sendBeacon(url, logData)
  }

  render() { 
    return (
      <table >
      <tbody>
        <tr>
          <td></td>
          <td><button onClick={(e) => this.move('up')}>UP </button></td>
          <td></td>
        </tr>
        <tr>
        <td><button onClick={(e) => this.move('left')}>LEFT </button></td>
          <td></td>
          <td><button onClick={(e) => this.move('right')}>RIGHT </button></td>
        </tr>
        <tr>
        <td></td>
          <td><button onClick={(e) => this.move('down')}>DOWN </button></td>
          <td></td>
        </tr>
      </tbody>
    </table>
    )
    

  }
}