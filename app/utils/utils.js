export function random() {
  return Math.random() * 360;
}

export function newRotations(num = 20) {
  let values = Array(num)
    .fill()
    .map(() => {
      let x = random();
      let y = random();
      let z = random();

      return { x, y, z };
    });

  return values;
}
