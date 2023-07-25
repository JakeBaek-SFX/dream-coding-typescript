{
  interface Position {
    x: number;
    y: number;
  }

  type Order = 'up' | 'down' | 'left' | 'right';

  let position: Position = {x:0, y:0};

  const move = (order: Order): void => {
    switch(order) {
      case 'up':
        position.y++;
        break;
      case 'down':
        position.y--;
        break;
      case 'left':
        position.x--;
        break;
      case 'right':
        position.x++;
        break;
      default:
        throw Error('error');
    }

  }
  console.log(position); // { x: 0, y: 0}
  move('up');
  console.log(position); // { x: 0, y: 1}
  move('down');
  console.log(position); // { x: 0, y: 0}
  move('left');
  console.log(position); // { x: -1, y: 0}
  move('right');
  console.log(position); // { x: 0, y: 0}
}