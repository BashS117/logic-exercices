const sumTwoNumbers= (num1,num2,listo )=>{
    const resultado=num1 + num2;

    return setTimeout(()=>{
listo(resultado)
    },3000)

}

sumTwoNumbers(2,2,(resultado)=>{
console.log(resultado*2)
})

//Promises

function sumarDosNumeros(num1,num2){

    const primerResultado= num1 + num2;
    console.log(primerResultado);
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve(primerResultado)
        },3000)
    })
}

sumarDosNumeros(1,2)
.then(primerResultado=>{
    console.log(primerResultado*2)
})

//ejercicio saludo y despedida


function saludar(nombre,callback){
    console.log('hola '+ nombre);
    return setTimeout(()=>{
        callback(nombre)
    }, 4000)
}

saludar('sebas', function(nombre){
    console.log("adios " + nombre)
})