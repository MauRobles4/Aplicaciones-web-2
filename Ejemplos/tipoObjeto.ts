// CON interface
// interface Persona{
//     nombre:string;
//     edad:number;
// }



// CON UN TYPE (ALIAS)
type Persona={
    nombre:string;
    edad:number;
}

function saludar(persona: Persona){
    return `Hola ${persona.nombre}`;
}

console.log(saludar({nombre:"Mauricio",edad:22}));

