module.exports = {
  newGame(size) {
    let numbers = [];
    let numberObj;

    const max = size * size;

    for (let i = 0; i < max; i++) {
      numbers.push(i + 1);
    }
    return numbers;
  },
};
