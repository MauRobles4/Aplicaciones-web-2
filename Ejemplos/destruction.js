// function sumar(num){
//     return num.a+ num.b + num.c;
// }
// const numeros= {a:1, b:2,c:3};
//SE DESCOMPONE EL PARAMETRO EN VARIABLES INDEPENDIENTES
// function sumar2({a,b,c}):number{
//     return a+ b + c;
// }
// DESESTRUCTURAR OBEJTO
function sumar3(_a) {
    var a = _a.a, b = _a.b, c = _a.c;
    return a + b + c;
}
console.log(sumar3({ a: 1, b: 2, c: 3 }));
