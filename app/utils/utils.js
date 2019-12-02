export function avg(arr) {
  return arr.reduce((total, num) => total + num, 0) / arr.length;
}

export function random() {
  return Math.random() * 360;
}

export function newRotations(num = 20) {
  return Array(num).fill().map(() => [random(), random(), random()]);
}
