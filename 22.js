const counter = () => {
  let n = 0;
  return function () {
    return n++;
  };
};

const count = counter();
console.log(count());
console.log(count());
console.log(count());
// console.log(count());
// console.log(count());
