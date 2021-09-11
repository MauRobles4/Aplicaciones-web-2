var prius = ["Toyota", 2015];
var civic = ["Honda", 2016];
console.log("El Prius es marca:", prius[0], " y modelo ", prius[1]);
console.log("El Civic es marca:", civic[0], " y modelo ", civic[1]);
//DESTRUCTURACION DE TUPLA
var yaris = ["Toyota", 2015];
var marca = yaris[0], modelo = yaris[1];
console.log("La marca del yaris es:", marca);
console.log("El modelo del yaris es: ", modelo);
var a = ["a", 1, true, false, true];
var tacoma = ["Toyota", 2014];
tacoma[0] = "Honda"; //ESTO GENERARIA UN ERROR
