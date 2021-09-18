class Caja2{
    contenido="";
    set(valor:string){
        this.contenido=valor;
        return this;
    }
}

const miCaja:Caja2=new Caja2();
const valorRetornado=miCaja.set("Joyas");
console.log(miCaja);
console.log(valorRetornado);

// EJEMPLO2
class Caja3{
    contenido="";

    constructor(contenido:string){
        this.contenido=contenido;
    }

    igualQue(otro:this){
        return otro.contenido===this.contenido;
    }
}

const caja1=new Caja3("Joyas");
const caja2=new Caja3("Joyas");
const caja3=new Caja3("Maquillaje");

console.log(caja1.igualQue(caja2));
console.log(caja1.igualQue(caja3));

// EJEMPLO3
class Caja4{
    contenido="";

    igualQue2(otro:this){
        // return this.contenido === otraInstancia.contenido;

    }
}
class CajaDerivada extends Caja4{
    otroContenido="";
}

const base=new Caja4();
const derivada=new CajaDerivada();
// derivada.igualQue2(base); //Base no extiende de derivada esto generara un erro


