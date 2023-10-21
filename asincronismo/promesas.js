const data = [
    {
        title: 'Aprendeindo JavaScript',
        year: '2021',
        isbn: '9798700179263',
        author: 'Carlos Azaustre',
    },
    {
        title: 'React as pro',
        year: '2022',
        isbn: 'TBD',
        author: 'Carlos Azaustre',
    },
    {
        title: 'Clean JavaScript',
        year: '2021',
        isbn: '979- 8567583319',
        author: 'Miguel A. Gomez',
    },
]

function getData(){
    return new Promise((resolve, reject)=>{
        if(data.length===0){
            reject(new Error ('Data is empty'))
        }
        setTimeout(()=>{
            resolve (data);

        },2000)
    })
    // setTimeout(()=>{return data;
    // }, 2000)
}
// getData()
// .then((response)=>console.log(response))
// .catch((err)=> console.log(err.message))

//Manera con await async
async function fetchingDat(){
    const books = await getData();
     console.log(books)
}   

