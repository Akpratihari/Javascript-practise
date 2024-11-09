const fetchData = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};

fetchData();
