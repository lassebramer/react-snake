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
      tail: []
    };

    setInterval(() => {
      isDead(this);
      tailNew(this);
      tailPosition(this);

      handleDirection(this);

      handleTeleport(this);

      pickLocation(this);

      show(this);
    }, 1000 / 5);
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
          left: this.state.snakeHeadX - 1,
          top: this.state.snakeHeadY - 1,
          position: "absolute",
          backgroundColor: "white",
          borderStyle: "solid",
          borderColor: "grey",
          borderWidth: 2
        }}
      />
    );
  }

  drawTail() {
    return _.map(this.state.tail, e => {
      return (
        <div
          style={{
            width: SNAKE_SIZE - 2,
            height: SNAKE_SIZE - 2,
            left: e.x - 1,
            top: e.y - 1,
            position: "absolute",
            backgroundColor: "black",
            borderStyle: "solid",
            borderColor: "grey",
            borderWidth: 2
          }}
        />
      );
    });
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
  }
}

function show(obj) {}

function tailPosition(obj) {
  // 1. insert new tail at previous head position

  const newTail = obj.state.tail;
  newTail.unshift({
    x: obj.state.snakeHeadX,
    y: obj.state.snakeHeadY
  });
  //2. remove last position
  newTail.pop();
  obj.setState({ tail: newTail });
}

function isDead(obj) {
  if (obj.state.snakeLength > 0) {
    for (var i = 0; i < obj.state.tail.length; i++) {
      console.log(obj.state.snakeLength);
      if (
        obj.state.snakeHeadX === obj.state.tail[i].x &&
        obj.state.snakeHeadY === obj.state.tail[i].y
      ) {
        alert("You DIED!");
        window.location.reload();
      }
    }
  }
}

export default App;
