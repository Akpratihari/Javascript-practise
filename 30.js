const url1 = `    https:/jsonpaceholder.typicode.com/todos`;


const fetchData=async(url)=>{
    try {
        const res=await fetch(url);
        if(!res.ok){
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data=await res.json();
        console.log(data);
    } catch (error) {
        console.error(error)
    }
}

fetchData(url1)