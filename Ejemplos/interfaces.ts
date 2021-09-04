//NORMAL
// function imprimirEtiqueta(etiqueta: {label: string}) {
//     console.log(etiqueta.label);
    
// }
// let miEtiqueta= {numero:10,label:"Esta es mi etiqueta"};
// imprimirEtiqueta(miEtiqueta);

//INTERFACE
interface Etiqueta{
    label:string;
}

function imprimirEtiqueta(etiqueta:Etiqueta) {
    console.log(etiqueta.label);
    
}

let miEtiqueta= {numero:10,label:"Esta es mi etiqueta"};
imprimirEtiqueta(miEtiqueta);