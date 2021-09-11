interface Persona{
    edad:number;
}

interface EdadNoEscribible{
    readonly edad:number;
}

const Luis:Persona={ edad:20 };
const Pedro:EdadNoEscribible=Luis;

Luis.edad++;
// Pedro.edad++;

console.log(Luis);
console.log(Pedro);