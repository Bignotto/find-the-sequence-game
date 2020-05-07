class Game {
  time = Math.random();
  timeElapsed = 0;

  constructor() {
    this.timeElapsed = 0;
    console.log("constructor", this.timeElapsed);
  }

  newGame(size) {
    let numbers = [];
    let numberObj;

    const max = size * size;

    for (let i = 0; i < max; i++) {
      numbers.push(i + 1);
    }
    return numbers;
  }

  start() {
    this.startTime = Date.now();
    this.timer = setInterval(this.update, 1000);
    console.log("START");
  }

  stop() {
    clearInterval(this.timer);
  }

  update() {
    console.log(this.timeElapsed, "update");
    const delta = Date.now() - this.startTime;
    this.timeElapsed = this.timeElapsed + delta;
    this.startTime = Date.now();
  }

  getTime() {
    return this.time;
  }
}

module.exports = new Game();
