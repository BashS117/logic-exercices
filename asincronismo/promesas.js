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
            reject('hay un error')

        },2000)
        data.map((dato)=>{
            dato.nuevo= 'nuevo';
        
        })
        
    })
    // setTimeout(()=>{return data;
    // }, 2000)
}
// getData()
// .then((response)=>console.log(response))
// .catch((err)=> console.log(err.message))

//Manera con await async
async function fetchingData(){
    const books = await getData();
     console.log(books)
}   

fetchingData();


//ejercicio saludar y adios con promise

function saludar(nombre){
  
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('hola '+ nombre);
           resolve(nombre)
        }, 3000)
    })

}

function hablar (nombre){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(' bla bla bal');
            resolve(nombre);
    },2000) 
    })
}

// saludar('sebas')
// .then(hablar)
// .then(hablar)
// .then(hablar)
// .then((nombre)=>console.log('adios' + nombre))


////
async function saludo(name){
    const nombre = await saludar(name)
    await hablar(name)
    setTimeout(()=>{
      console.log('saludo hola +', nombre)

    },3000)

}

saludo('sebas')

//ejercicio saludo y despedida promise

function saludar (name){
    console.log('hola '+ name)

    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{

            resolve(name)

        },3000)
    })
}

saludar('sebas').then((name)=>{
setTimeout(()=>{
    console.log('ADIOS '+ name)

},2000)
})