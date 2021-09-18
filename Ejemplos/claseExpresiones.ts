const miClase=class<T>{
    contenido:T;
    constructor(v:T){
        this.contenido=v;
    }
};

const miInstancia =new miClase("Un video de 12 minutos ");

console.log(`El contenido del video es : ${miInstancia.contenido}`);