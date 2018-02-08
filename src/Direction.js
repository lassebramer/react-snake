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
      const scl = 20
      