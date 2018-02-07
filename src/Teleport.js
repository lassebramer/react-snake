export function 
    handleTeleport (obj) {
        // RIGHT
        if (obj.state.snakeHeadX > MAP_SIZE - SNAKE_SIZE) {
          obj.setState({ snakeHeadX: 0 })
        }
        // LEFT
        if (obj.state.snakeHeadX < 0) {
          obj.setState({ snakeHeadX: MAP_SIZE - SNAKE_SIZE })
        }
        // BOTTOM
        if (obj.state.snakeHeadY > MAP_SIZE - SNAKE_SIZE) {
          obj.setState({ snakeHeadY: 0 })
        }
        // TOP
        if (obj.state.snakeHeadY < 0) {
          obj.setState({ snakeHeadY: MAP_SIZE - SNAKE_SIZE })
        }
      }

const SNAKE_SIZE = 20
const MAP_SIZE = 600