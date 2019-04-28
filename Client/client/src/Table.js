import React, { Component } from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

const url = 'https://reqres.in/api/users?page=2'


export default class Table extends Component {

constructor(props){
  super(props)
    this.state = {
      leftTrack: 50,
      rightTrack: 50,
      bucket: 50,
      elbow: 50, 
      shoulderVertical: 50,
      shoulderHorizontal: 50,
      max: 0,
    }
    this.move = this.move.bind(this)
}

  

  move = (e) => {
    //console.log(e.target.value)
    //console.log(e.target.name)
    
    //if( this.state.max < e.target.value )
      //return;

    let newState = {}
    newState[e.target.name] = e.target.value;
    this.setState(newState)


    // console.log(direction)
    // let logData = new FormData();
    // logData.append('direction', direction);
    // console.info(logData);
    // navigator.sendBeacon(url, logData)
  }



  render() { 
    return (
      <div>

      <table >
      <tbody>

        <tr>
          <td><input name='leftTrack' onChange={(e)=> this.move(e) } type="range" orient="vertical" min='1' max='100' value={this.state.leftTrack} /></td>
          <td><input name='elbow' onChange={(e)=> this.move(e) } type="range" orient="vertical" min='1' max='100' value={this.state.elbow} /></td>
          <td colspan="2"><iframe src="https://player.twitch.tv/?channel=v784" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe></td>
          <td><input name='bucket' onChange={(e)=> this.move(e) } type="range" orient="vertical" min='1' max='100' value={this.state.bucket} /></td>
          <td><input name='rightTrack' onChange={(e)=> this.move(e) } type="range" orient="vertical" min='1' max='100' value={this.state.rightTrack} /></td>
        </tr>

        <tr>
          <td></td>
          <td></td>
          <td><input name='shoulderVertical' onInput={(e)=> this.move(e) } type="range" orient="vertical" min='1' max='100' value={this.state.shoulderVertical} /></td>
          <td><input name='shoulderHorizontal' onChange={(e)=> this.move(e) } type="range"  min='1' max='100' value={this.state.shoulderHorizontal}/></td>
          <td></td>
          <td><Slider
        value={this.state.shoulderHorizontal}
        orientation="vertical"
        onChange={this.handleOnChange}
      /></td>
        </tr>
        
      </tbody>
    </table>

<Slider
value={this.state.shoulderHorizontal}
orientation="vertical"
onChange={this.handleOnChange}
/>
</div>
    )
    

  }
}