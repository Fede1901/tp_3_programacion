var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// ejercicio 1 crear una clase abstracta llamada Animal y dos clases hijas llamadas
// Perro y Gato que extiendan la clase Animal. Cada una de las clases hijas debe implementar 
// el método hacerSonido() de forma diferente.
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.hacerSonido = function () {
        console.log("Sonido del animal");
    };
    return Animal;
}());
var Perro = /** @class */ (function (_super) {
    __extends(Perro, _super);
    function Perro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Perro.prototype.hacerSonido = function () {
        console.log("El perro ".concat(this.name, " hace el siguiente sonido:"));
        console.log("Ladrar");
    };
    return Perro;
}(Animal));
var Gato = /** @class */ (function (_super) {
    __extends(Gato, _super);
    function Gato() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gato.prototype.hacerSonido = function () {
        console.log("El gato ".concat(this.name, " hace el siguiente sonido:"));
        console.log("Maullar");
    };
    return Gato;
}(Animal));
var perro_1 = new Perro("Chucho");
perro_1.hacerSonido();
var gato_1 = new Gato("Michi");
gato_1.hacerSonido();
