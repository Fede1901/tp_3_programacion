// ejercicio 1 crear una clase abstracta llamada Animal y dos clases hijas llamadas
// Perro y Gato que extiendan la clase Animal. Cada una de las clases hijas debe implementar 
// el método hacerSonido() de forma diferente.

// Federico Oyola hizo este ejercicio
class Animal{
    name:string
    constructor(name:string){
        this.name=name
    }
    hacerSonido(){
        console.log("Sonido del animal")
    }
}
class Perro extends Animal{
    hacerSonido(): void {
        console.log(`El perro ${this.name} hace el siguiente sonido:`)
        console.log("Ladrar")
    }

}
class Gato extends Animal{
    hacerSonido(): void {
        console.log(`El gato ${this.name} hace el siguiente sonido:`)
        console.log("Maullar")
    }
}
let perro_1:Perro= new Perro("Chucho")
perro_1.hacerSonido()
let gato_1:Gato=new Gato("Michi")
gato_1.hacerSonido()