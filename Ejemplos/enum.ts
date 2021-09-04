enum marcasDeAutos{
    Toyota=4,
    Chevrolet,
    Ford,
    Nissan,
    Dodge
}

let charger: marcasDeAutos=marcasDeAutos.Dodge;
let tacoma: marcasDeAutos=marcasDeAutos.Toyota;
let id: number =marcasDeAutos.Toyota;

console.log(charger);
console.log(tacoma);
console.log(marcasDeAutos[5]);
console.log(id);