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
var MiClase = /** @class */ (function () {
    function MiClase() {
    }
    MiClase.imprimirX = function () {
        //PARA ACCEDER A UNA PROPIEDAD UTILIZAMOS THIS DENTRO DEL METODO ESTATICO
        console.log("El valor de x es: " + this.x);
    };
    MiClase.prototype.imprimirX = function () {
        //PARA ACCERDER A UNA PROPIEDAD ESTATICA USAMOS EL NOMBRE DE LA CLASE
        console.log("El valor de x  en una instancia es: " + MiClase.x + " ");
    };
    MiClase.x = 10;
    return MiClase;
}());
//PARA ACCERDER A UN METODO LO HACEMOS DIRECTAMENTE DESDE LA CLASE 
MiClase.imprimirX();
// PARA ACCERDER A UNA PROPIEDAD ESTATICA LO HACEMOS DIRECTAMENTE DESDE LA CLASE
console.log("El valor obtenido de x es: " + MiClase.x);
var miClase = new MiClase();
miClase.imprimirX;
//LOS ELEMENTOS ESTATICOS PUEDEN SER PUBLIC PRIVATE O PROTECTED
var MiClase2 = /** @class */ (function () {
    function MiClase2() {
    }
    MiClase2.x = 10;
    return MiClase2;
}());
console.log(MiClase.x);
// HEREDAR METODO STATiC
var Base = /** @class */ (function () {
    function Base() {
    }
    Base.saludar = function () {
        console.log("Hola mundo");
    };
    return Base;
}());
var Derivada = /** @class */ (function (_super) {
    __extends(Derivada, _super);
    function Derivada() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Derivada;
}(Base));
Derivada.saludar();
var Error1 = /** @class */ (function () {
    function Error1() {
    }
    return Error1;
}());
