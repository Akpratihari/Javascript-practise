function Product(name, price, quantity) {
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.totalPrice = price * quantity;
}

const prod1 = new Product("laptop", 50000, 5);
const prod2 = new Product("mobile", 10000, 10);
console.log(`The total price of ${prod1.name}s is ${prod1.totalPrice}`);
console.log(`The total price of ${prod2.name}s is ${prod2.totalPrice}`);
