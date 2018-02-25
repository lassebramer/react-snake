export function tailNew(obj) {
  if (obj.state.tail.length == obj.state.snakeLength) {
    return;
  } else {
    obj.state.tail.push({ x: 0, y: 0 });
  }
}
