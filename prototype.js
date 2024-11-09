let a = {
  name: "a",
  language: "javascript",
  //   run: () => {
  //     alert(`run fast`);
  //   },
  greet: function () {
    console.log(this.name);
    console.log(this); // local scope
  },
};

let p = {
  run: () => {
    alert("run in ");
    console.log(this); // global scope
  },
  language: "python",
};

a.__proto__ = p;
a.run();

//a.greet();

console.log(object);
//console.log(this);
