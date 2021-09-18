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
var Saludo2 = /** @class */ (function () {
    function Saludo2() {
    }
    Saludo2.prototype.getDestinatario = function () {
        return "amigos";
    };
    return Saludo2;
}());
var SaludoEspecial = /** @class */ (function (_super) {
    __extends(SaludoEspecial, _super);
    function SaludoEspecial() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SaludoEspecial.prototype.saludar = function () {
        console.log("Hola " + this.getDestinatario());
    };
    return SaludoEspecial;
}(Saludo2));
var saludo = new SaludoEspecial();
saludo.saludar();
// saludo.getDestinatario(); //ERROR NO SE TIENE ACCESO DE FORMA PUBLICA 
// EJEMPLO 2 FORMA DE CAMBIAR LA PROPIEDA M DE PROTECTED A PUBLICA 
var Base3 = /** @class */ (function () {
    function Base3() {
        this.m = 10;
    }
    return Base3;
}());
var Derivada = /** @class */ (function (_super) {
    __extends(Derivada, _super);
    function Derivada() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.m = 15;
        return _this;
    }
    return Derivada;
}(Base3));
var d = new Derivada();
console.log(d.m);
//ACCESO PROTEGIDO
var Base2 = /** @class */ (function () {
    function Base2() {
        this.x = 1;
    }
    return Base2;
}());
var Derivada2 = /** @class */ (function (_super) {
    __extends(Derivada2, _super);
    function Derivada2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.x = 5;
        return _this;
    }
    return Derivada2;
}(Base2));
var Derivada3 = /** @class */ (function (_super) {
    __extends(Derivada3, _super);
    function Derivada3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Derivada3.prototype.imprimirX = function (c1) {
        console.log(c1.x);
    };
    return Derivada3;
}(Base2));
