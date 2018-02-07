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
      foodX: 50,
      foodY: 50,
    }
    

    setInterval(() => {
      handleDirection(this)

      handleTeleport(this)

      pickLocationX(this)

      pickLocationY(this)

          }, 1000/10)
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
var col = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
var row = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
const RIGHT = 39
const DOWN = 40
const LEFT = 37
const UP = 38


function pickLocationX(obj){
  if(obj.state.snakeHeadX === 560 && obj.state.snakeHeadY === 0 ) {
  obj.setState({foodX: 20*Math.floor (Math.random()*31 )});
  }}
function pickLocationY(obj){
    if(obj.state.snakeHeadX === 560 && obj.state.snakeHeadY === 0 ) {
    obj.setState({foodY: 20*Math.floor (Math.random()*31 )});
    }}
export default App
