class Animal {
     constructor(nombre,tipo){
this.nombre=nombre
this.tipo=tipo
     }
     emitirSonido(){
        console.log("el animal emite un sonido")
     }
}

class Perro extends Animal{
    constructor(nombre,tipo, raza){
super(nombre,tipo);
this.raza=raza;
    }
    emitirSonido(){
        console.log("el Perro ladra")
    }
    correr(){
        console.log(`${this.nombre} corre alegremente`)
    }
}
const perro1= new Perro("Dolar","perro", "chihuahua")

console.log(perro1)
perro1.correr();
perro1.emitirSonido()

perro1.nuevoMetodo= function(){
    console.log("este es un metodo")
}
Perro.prototype.segundoMetodo=function(){
    console.log("Esotro metodo")

}

perro1.nuevoMetodo()
perro1.segundoMetodo()