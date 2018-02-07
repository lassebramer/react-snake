export function 
    handleDirection(obj) {
        if (obj.state.snakeDirection === 'RIGHT') {
          obj.setState({ snakeHeadX: obj.state.snakeHeadX + 1*scl })
        }
        if (obj.state.snakeDirection === 'DOWN') {
          obj.setState({ snakeHeadY: obj.state.snakeHeadY + 1*scl })
        }
        if (obj.state.snakeDirection === 'LEFT') {
          obj.setState({ snakeHeadX: obj.state.snakeHeadX - 1*scl })
        }
        if (obj.state.snakeDirection === 'UP') {
          obj.setState({ snakeHeadY: obj.state.snakeHeadY - 1*scl })
        }
      }
      const RIGHT = 39
      const DOWN = 40
      const LEFT = 37
      const UP = 38
      const scl = 20