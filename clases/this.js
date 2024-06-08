class Persona {
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
}

const persona1=new Persona("Deisy", 30)
console.log(persona1)
persona1.nuevoMetodo= function(){
    console.log(`mi nombre es ${this.nombre}`)
}
persona1.nuevoMetodo()