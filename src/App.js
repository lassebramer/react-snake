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
      foodX: 0,
      foodY: 0,
    }
    

    setInterval(() => {
      handleDirection(this)

      handleTeleport(this)

      pickLocationX(this)

      pickLocationY(this)

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
        {this.state.point}
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


function pickLocationX(obj){
  if(obj.state.snakeHeadX === obj.state.foodX && obj.state.snakeHeadY === obj.state.foodY ) {
  obj.setState({foodX: scl*Math.floor (Math.random()*30 )});
  }}
function pickLocationY(obj){
    if(obj.state.snakeHeadX === obj.state.foodY && obj.state.snakeHeadY === obj.state.foodY ) {
    obj.setState({foodY: scl*Math.floor (Math.random()*30 )});
    }}
export default App
