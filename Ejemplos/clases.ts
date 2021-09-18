class Punto{
    x:number;
    y:number;
    z; //TIPO ANY
    a=10;
}
const miPunto= new Punto();
miPunto.x=0;
miPunto.y=0;

//READONLY
class Saludo{
    readonly nombre:string="mundo";

    constructor(nuevoNombre: string){
        if(!!nuevoNombre){
            this.nombre=nuevoNombre;
        }
    }

    asignarNuevoNombre(nuevoNombre:string){
      //  this.nombre=nuevoNombre; //ERROR PORQUE ES READONLY
    }
}

const miNombre=new Saludo("Mauricio");
// miNombre.nombre="Moises"; //ERROR NO SE PUEDE ASIGNAR UN VALOR FUERA DEL CONSTRUCTOR


