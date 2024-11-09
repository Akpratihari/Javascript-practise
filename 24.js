function makeAPIcall(url, callback) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch((error) => console.log(error));
}

function handleData(data) {
  console.log(data);
}

function main() {
  const url1 = `    https://jsonplaceholder.typicode.com/todos`;
  const url2 = `    https://jsonplaceholder.typicode.com/todos/29`;
  const url3 = `    https://jsonplaceholder.typicode.com/todos/1/comments`;

  makeAPIcall(url3, handleData);
  makeAPIcall(url1, handleData);
  makeAPIcall(url2, handleData);
}

main();
