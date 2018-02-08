import React, { Component } from 'react'
import './App.css'
import {handleTeleport} from "./Teleport.js"
import {handleDirection} from "./Direction.js"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      snakeHeadX: 0,
      snakeHeadY: 0,
      snakeDirection: 'RIGHT',
      foodX: 300,
      foodY: 300,
      points: 0, 
    }
    

    setInterval(() => {
      handleDirection(this)

      handleTeleport(this)

      pickLocation(this)

      show(this)
          }, 1000/15)
  }
  
  

  componentWillMount() {
    document.addEventListener('keydown', event => {
      console.log(event.keyCode)

      switch (event.keyCode) {
        case RIGHT:
          this.setState({ snakeDirection: 'RIGHT' })
          break
        case DOWN:
          this.setState({ snakeDirection: 'DOWN' })
          break
        case LEFT:
          this.setState({ snakeDirection: 'LEFT' })
          break
        case UP:
          this.setState({ snakeDirection: 'UP' })
          break
        default:
          break
      }
    })
  }
  render() {
    
    return (
      <div
        style={{
          height: MAP_SIZE,
          width: MAP_SIZE,
          borderWidth: 2,
          borderColor: 'red',
          borderStyle: 'solid',
          backgroundColor: "grey",
          top: 50,
          position: "absolute",
        }}
      >
        <div
          style={{
            width: SNAKE_SIZE,
            height: SNAKE_SIZE,
            left: this.state.snakeHeadX,
            top: this.state.snakeHeadY,
            position: 'absolute',
            backgroundColor: 'red',
          }}
        />
        <div
          style={{
            width: FOOD_SIZE,
            height: FOOD_SIZE,
            left: this.state.foodX,
            top: this.state.foodY,
            position: "absolute",
            backgroundColor: "green",
          }}
        />
        <div style={{
          left:720,
          position: "absolute",
          top: 15,
        }}
        >{this.state.points} 
        </div>
        <h1> Score: </h1> 
       
      </div>
     
    )
  }
}
var scl = 20
const SNAKE_SIZE = 1*scl
const MAP_SIZE = 30*scl
const FOOD_SIZE = 1*scl
const RIGHT = 39
const DOWN = 40
const LEFT = 37
const UP = 38
var startingPoints = 1



function pickLocation(obj){
  if(obj.state.snakeHeadX === obj.state.foodX && obj.state.snakeHeadY === obj.state.foodY ) {
  obj.setState({foodX: scl*Math.floor (Math.random()*30 )});
  obj.setState({foodY: scl*Math.floor (Math.random()*30 )});
  obj.setState({points: startingPoints++}) 
  }}

function show(obj){
  return (obj.state.points);
}




export default App
