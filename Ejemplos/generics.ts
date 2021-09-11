// interface Caja{
//     contenido:unknown;
// }

// let x:Caja={
//     contenido:"Hola mundo",
// };


// //OTRO MODO ES USAR UNA INTERFACE PARA CADA TIPO
// interface CajaNumber{
//     contenido:number;
// }
// interface CajaString{
//     contenido:string;
// }
// interface CajaBoolean{
//     contenido:boolean;
// }

// //SOBRECARGA
// function setContenido(caja:CajaNumber,nuevoContenido:string):void;
// function setContenido(caja:CajaString,nuevoContenido:number):void;
// function setContenido(caja:CajaBoolean,nuevoContenido:boolean):void;
// function setContenido(caja:{contenido:any},nuevoContenido:any){
//     caja.contenido=nuevoContenido;
// }


//USANDO GENERICS 
interface Caja<T>{
    contenido:T;
}

//OTRO MODO ES USAR TYPE

type Caja2<T>={
    contenido:T;
}

let cajaDeString: Caja<string>={contenido:"Hola mundo"};
let cajaDeNumero: Caja<number>={contenido:100};
let cajaDeFecha: Caja<Date>={contenido:new Date()};

console.log(cajaDeFecha);
//MEDIANTE TYPEOF SE VERIFICA SI ES STRING
// if (typeof x.contenido=== "string"){
//     console.log(x.contenido.toLocaleLowerCase());
// }
// //MENDIANTE "AS TIPO" SE LE DICE AL COMPILADOR QUE SIEMPRE ES STRING
// console.log((x.contenido as string).toLocaleLowerCase());
