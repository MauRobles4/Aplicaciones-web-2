var marcasDeAutos;
(function (marcasDeAutos) {
    marcasDeAutos[marcasDeAutos["Toyota"] = 4] = "Toyota";
    marcasDeAutos[marcasDeAutos["Chevrolet"] = 5] = "Chevrolet";
    marcasDeAutos[marcasDeAutos["Ford"] = 6] = "Ford";
    marcasDeAutos[marcasDeAutos["Nissan"] = 7] = "Nissan";
    marcasDeAutos[marcasDeAutos["Dodge"] = 8] = "Dodge";
})(marcasDeAutos || (marcasDeAutos = {}));
var charger = marcasDeAutos.Dodge;
var tacoma = marcasDeAutos.Toyota;
var id = marcasDeAutos.Toyota;
console.log(charger);
console.log(tacoma);
console.log(marcasDeAutos[5]);
console.log(id);
