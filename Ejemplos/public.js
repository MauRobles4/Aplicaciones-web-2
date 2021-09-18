var Saludo = /** @class */ (function () {
    function Saludo() {
    }
    Saludo.prototype.saludar = function () {
        console.log("Saludar");
    };
    return Saludo;
}());
var inst = new Saludo();
inst.saludar();
