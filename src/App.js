import React, { Component } from 'react'
import './App.css'
import { handleTeleport } from './Teleport.js'
import { handleDirection } from './Direction.js'
import { tailNew } from './Tail.js'
import * as _ from 'underscore'

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
      tailx: [],
      taily: [],
    }

    setInterval(() => {
      handleDirection(this)

      handleTeleport(this)

      pickLocation(this)

      show(this)

      tailPosition(this)
    }, 1000 / 15)
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
          backgroundColor: 'grey',
          top: 50,
          left: 400,
          position: 'absolute',
        }}
      >
        <div
          style={{
            width: SNAKE_SIZE,
            height: SNAKE_SIZE,
            left: this.state.snakeHeadX,
            top: this.state.snakeHeadY,
            position: 'absolute',
            backgroundColor: 'white',
          }}
        />
        <div
          style={{
            width: SNAKE_SIZE,
            height: SNAKE_SIZE,
            left: this.state.tailx[0],
            top: this.state.taily[0],
            position: 'absolute',
            backgroundColor: 'white',
          }}
        />
        <div
          style={{
            width: FOOD_SIZE,
            height: FOOD_SIZE,
            left: this.state.foodX,
            top: this.state.foodY,
            position: 'absolute',
            backgroundColor: 'grey',
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              left: 6,
              top: 6,
              backgroundColor: 'green',
              position: 'absolute',
            }}
          />
        </div>
        <div
          style={{
            left: 720,
            position: 'absolute',
            top: 15,
          }}
        >
          {this.state.points}
        </div>
        <h1> Score: </h1>
      </div>
    )
  }
}
var scl = 20
const SNAKE_SIZE = 1 * scl
const MAP_SIZE = 30 * scl
const FOOD_SIZE = 1 * scl
const RIGHT = 39
const DOWN = 40
const LEFT = 37
const UP = 38
var startingPoints = 1

function pickLocation(obj) {
  if (
    obj.state.snakeHeadX === obj.state.foodX &&
    obj.state.snakeHeadY === obj.state.foodY
  ) {
    obj.setState({ foodX: scl * Math.floor(Math.random() * 30) })
    obj.setState({ foodY: scl * Math.floor(Math.random() * 30) })
    obj.setState({ points: startingPoints++ })
    tailNew(obj)
    console.log(obj.state.tailx)
  }
}

function show(obj) {
  return obj.state.points
}

// Okay, så først og fremmest så crasher det hele fuldstendigt når jeg prøver at kalde den her funktion på intervallet, er jeg kommet til at lave et infinite loop?
// Men mit egentlige problem er at jeg lige nu ændre på tailx og taily som vel dækker over helle arraysne. Det jeg tænkte var tailx[i], men det giver en fejl.
function tailPosition(obj) {
  _.each(obj.state.tailx, tailxElement => {
    console.log(tailxElement)

    // if (obj.state.snakeDirection === 'RIGHT') {
    //   obj.setState({ tailx: obj.state.tailx[i] + 1*scl })
    // }
    // if (obj.state.snakeDirection === 'DOWN') {
    //   obj.setState({ taily: obj.state.taily[i] + 1*scl })
    // }
    // if (obj.state.snakeDirection === 'LEFT') {
    //   obj.setState({ tailx: obj.state.tailx[i] - 1*scl })
    // }
    // if (obj.state.snakeDirection === 'UP') {
    //   obj.setState({ taily: obj.state.taily[i] - 1*scl })
    // }
  })
}
// Jeg er også lidt i tvivl om hvordan hele render ideen fungere. Jeg skal have tegnet alle halerne.
// Kan jeg lave en funktion endten i render eller i return der looper over arrayen lidt ligesom tailPosition?

export default App
