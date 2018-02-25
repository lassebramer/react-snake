import React, { Component } from "react";
import "./App.css";
import { handleTeleport } from "./Teleport.js";
import { handleDirection } from "./Direction.js";
import { tailNew } from "./Tail.js";
import * as _ from "underscore";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      snakeHeadX: 0,
      snakeHeadY: 0,
      snakeDirection: "RIGHT",
      foodX: 300,
      foodY: 300,
      snakeLength: 0,
      tailx: [],
      taily: []
    };

    setInterval(() => {
      tailNew(this);
      tailPosition(this);

      handleDirection(this);

      handleTeleport(this);

      pickLocation(this);

      show(this);
    }, 1000 / 10);
  }

  componentWillMount() {
    document.addEventListener("keydown", event => {
      console.log(event.keyCode);

      switch (event.keyCode) {
        case RIGHT:
          this.setState({ snakeDirection: "RIGHT" });
          break;
        case DOWN:
          this.setState({ snakeDirection: "DOWN" });
          break;
        case LEFT:
          this.setState({ snakeDirection: "LEFT" });
          break;
        case UP:
          this.setState({ snakeDirection: "UP" });
          break;
        default:
          break;
      }
    });
  }
  drawHead() {
    return (
      <div
        style={{
          width: SNAKE_SIZE - 2,
          height: SNAKE_SIZE - 2,
          left: this.state.snakeHeadX,
          top: this.state.snakeHeadY,
          position: "absolute",
          backgroundColor: "white"
        }}
      />
    );
  }

  drawTail() {
    // return _.map()

    return (
      <div
        style={{
          width: SNAKE_SIZE,
          height: SNAKE_SIZE,
          left: this.state.tailx[0],
          top: this.state.taily[0],
          position: "absolute",
          backgroundColor: "black"
        }}
      />
    );
  }

  render() {
    return (
      <div
        style={{
          height: MAP_SIZE,
          width: MAP_SIZE,
          borderWidth: 2,
          borderColor: "red",
          borderStyle: "solid",
          backgroundColor: "grey",
          top: 50,
          left: 400,
          position: "absolute"
        }}
      >
        {this.drawHead()}
        {this.drawTail()}
        <div
          style={{
            width: FOOD_SIZE,
            height: FOOD_SIZE,
            left: this.state.foodX,
            top: this.state.foodY,
            position: "absolute",
            backgroundColor: "grey"
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              left: 6,
              top: 6,
              backgroundColor: "green",
              position: "absolute"
            }}
          />
        </div>
        <div
          style={{
            left: 720,
            position: "absolute",
            top: 15
          }}
        >
          {this.state.snakeLength}
        </div>
        <h1> Score: </h1>
      </div>
    );
  }
}
var scl = 20;
const SNAKE_SIZE = 1 * scl;
const MAP_SIZE = 30 * scl;
const FOOD_SIZE = 1 * scl;
const RIGHT = 39;
const DOWN = 40;
const LEFT = 37;
const UP = 38;

function pickLocation(obj) {
  if (
    obj.state.snakeHeadX === obj.state.foodX &&
    obj.state.snakeHeadY === obj.state.foodY
  ) {
    obj.setState({ foodX: scl * Math.floor(Math.random() * 30) });
    obj.setState({ foodY: scl * Math.floor(Math.random() * 30) });
    obj.setState({ snakeLength: obj.state.snakeLength + 1 });

    console.log(obj.state.tailx);
  }
}

function show(obj) {
  return obj.state.points;
}

function tailPosition(obj) {
  const oldXList = obj.state.tailx;
  const newXList = _.map(oldXList, element => {
    if (obj.state.snakeDirection === "RIGHT") {
      return element + 1 * scl;
    }
    if (obj.state.snakeDirection === "LEFT") {
      return element - 1 * scl;
    }
    return element;
  });

  const oldYList = obj.state.taily;
  const newYList = _.map(oldYList, element => {
    if (obj.state.snakeDirection === "DOWN") {
      return element + 1 * scl;
    }
    if (obj.state.snakeDirection === "UP") {
      return element - 1 * scl;
    }
    return element;
  });

  console.log(`oldX: ${oldXList}`);
  console.log(`newX: ${newXList}`);

  obj.setState({ tailx: newXList });
  obj.setState({ taily: newYList });
}
// Jeg er også lidt i tvivl om hvordan hele render ideen fungere. Jeg skal have tegnet alle halerne.
// Kan jeg lave en funktion endten i render eller i return der looper over arrayen lidt ligesom tailPosition?

export default App;
