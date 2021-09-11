//MANERA INCORRECTA DE SOBRECARGA
// function longitud(a:any[]):number;
// function longitud(x:string):number;
// function longitud(x:any):number {
//     return x.length;
// }
//MANERA CORRECTA DE SOBRECARGA 
function calcularLongitud(x) {
    return x.length;
}
console.log(calcularLongitud("hola mundo"));
console.log(calcularLongitud([1, 2, 3, 4, 5]));
