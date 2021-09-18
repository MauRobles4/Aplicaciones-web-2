class Video{
    titulo:string;

    constructor(titulo:string){
        this.titulo=titulo;
    }

    reproducir():void{
        console.log(`${this.titulo} se esta reproduciendo`);
    }
    
}
const miVideo= new Video("año nuevo");
miVideo.reproducir();

//EJEMPLO 2

let titulo="mi graduacion";
class Video2{
    titulo:string;
    
    asignarNuevoTitulo(nuevoTitulo:string){
        titulo=nuevoTitulo;
        this.titulo=nuevoTitulo;
    }
}
