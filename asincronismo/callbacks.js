const sumTwoNumbers= (num1,num2,listo )=>{
    const resultado=num1 + num2;

    return setTimeout(()=>{
listo(resultado)
    },3000)

}

sumTwoNumbers(2,2,(resultado)=>{
console.log(resultado*2)
})

//otro callbak
 const estofirst=(name,callback)=>{
    console.log('hola '+ name)

    return setTimeout(()=>{
        callback(name)

    }, 3000)
 }


 estofirst('dei', (name)=>{
    console.log('estosegundo='+name)
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
//
function sumar (num1,num2){
    const resultado1 = num1 + num2;
    console.log(resultado1);
    return new Promise (function(resolve,reject){
        setTimeout(()=>{
            resolve(resultado1)
        },3000)
    })
}
sumar(1,2).then(resultado1=>{
    console.log(resultado1 + 7)
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

//ejercicio saludar hablar adios

function saludar(nombre,callback){
    console.log('hola '+ nombre)
    return setTimeout(()=>{
callback(nombre)
    },3000)
}


saludar('sebas', function(nombre){
    console.log('adios '+ nombre)

})

// ejercicio

function saludar (nombre, callback){
    
console.log("hola "+ nombre)
    return setTimeout(()=>{
callback(nombre)
    },3000)
}

///OTRO EJERCCIO


function parlar (nombre, callback){
    console.log('hola amigo '+nombre)
    return setTimeout(()=>{
        callback(nombre)
    }, 3000)
}


parlar("deisy", (nombre)=>{
    console.log("asios "+ nombre);

})
///

function charlar (nombre,cb){
    console.log('hola amigo '+nombre)
    return setTimeout(()=>{
cb(nombre)
    },2000)
}

charlar('sebas',(despedidad)=>{
    console.log('adios'+despedidad)

})