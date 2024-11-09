// function makeAPIcall(url) {
//   return fetch(url).then((response) => response.json());
// }

function handleData(data) {
  console.log(data);
}

function makeAPIcall(url) {
  return new Promise((resolve, reject) => {
     fetch(url)
       .then((response) => response.json())
       .then((data) => resolve(data))
       .catch((error) => reject(error));
   });
 }

function main() {
  const url1 = `    https://jsonplaceholder.typicode.com/todos`;
  const url2 = `    https://jsonplaceholder.typicode.com/todos/29`;
  const url3 = `    https://jsonplaceholder.typicode.com/todos/1/commentsaa`;

  makeAPIcall(url3)
    .then(handleData)
    .catch((error) => console.log(error));
  makeAPIcall(url1)
    .then(handleData)
    .catch((error) => console.log(error));
  makeAPIcall(url2)
    .then(handleData)
    .catch((error) => console.log(error));
}

main();

