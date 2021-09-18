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
var Caja2 = /** @class */ (function () {
    function Caja2() {
        this.contenido = "";
    }
    Caja2.prototype.set = function (valor) {
        this.contenido = valor;
        return this;
    };
    return Caja2;
}());
var miCaja = new Caja2();
var valorRetornado = miCaja.set("Joyas");
console.log(miCaja);
console.log(valorRetornado);
// EJEMPLO2
var Caja3 = /** @class */ (function () {
    function Caja3(contenido) {
        this.contenido = "";
        this.contenido = contenido;
    }
    Caja3.prototype.igualQue = function (otro) {
        return otro.contenido === this.contenido;
    };
    return Caja3;
}());
var caja1 = new Caja3("Joyas");
var caja2 = new Caja3("Joyas");
var caja3 = new Caja3("Maquillaje");
console.log(caja1.igualQue(caja2));
console.log(caja1.igualQue(caja3));
// EJEMPLO3
var Caja4 = /** @class */ (function () {
    function Caja4() {
        this.contenido = "";
    }
    Caja4.prototype.igualQue2 = function (otro) {
        // return this.contenido === otraInstancia.contenido;
    };
    return Caja4;
}());
var CajaDerivada = /** @class */ (function (_super) {
    __extends(CajaDerivada, _super);
    function CajaDerivada() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.otroContenido = "";
        return _this;
    }
    return CajaDerivada;
}(Caja4));
var base = new Caja4();
var derivada = new CajaDerivada();
// derivada.igualQue2(base); //Base no extiende de derivada esto generara un erro
