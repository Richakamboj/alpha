//  const fetchData = await  fetch('https://jsonplaceholder.typicode.com/posts')
//  const data = await fetchData.json()

//  console.log(data)


const getLastEle = async function(){
      const fetchData = await  fetch('https://jsonplaceholder.typicode.com/posts')
 const data = await fetchData.json();

 return { title: data.at(-1).title}
}
//not a very clean way to get data
const lastPst = getLastEle()
lastPst.then(last => console.log(last))

// clean way to get data to use await like below:

const lastPost = await getLastEle()

console.log(lastPost)


