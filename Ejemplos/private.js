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
var Base4 = /** @class */ (function () {
    function Base4() {
        this.x = 0;
    }
    return Base4;
}());
var Derivada4 = /** @class */ (function (_super) {
    __extends(Derivada4, _super);
    function Derivada4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Derivada4.prototype.imprimirX2 = function () {
        // console.log(this.x); //ERROR PORQUE EL ELEMENTO ES PRIVADO
    };
    return Derivada4;
}(Base4));
var b = new Base4();
// console.log(b.x); //ERROR PORQUE ES PRIVADO
//ACCESO PRIVADO
var A = /** @class */ (function () {
    function A() {
        this.y = 10;
    }
    A.prototype.imprimirY = function (otra) {
        console.log(otra.y);
    };
    return A;
}());
var c = new A();
c.imprimirY(new A());
