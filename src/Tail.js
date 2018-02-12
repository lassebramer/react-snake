export function 
    tailNew(obj) {
        if (obj.state.snakeDirection === 'RIGHT') {
          obj.state.tailx.push(obj.state.snakeHeadX - 20);
          obj.state.taily.push(obj.state.snakeHeadY);
        }
        if (obj.state.snakeDirection === 'DOWN') {
          obj.state.taily.push(obj.state.snakeHeadY - 20);
          obj.state.tailx.push(obj.state.snakeHeadX);
        }
        if (obj.state.snakeDirection === 'LEFT') {
          obj.state.tailx.push(obj.state.snakeHeadX + 20);
          obj.state.taily.push(obj.state.snakeHeadY);
        }
        if (obj.state.snakeDirection === 'UP') {
          obj.state.taily.push(obj.state.snakeHeadY + 20);
          obj.state.tailx.push(obj.state.snakeHeadX);
        }
      };