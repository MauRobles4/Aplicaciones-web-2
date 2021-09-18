class Saludo2{
    protected getDestinatario(){
        return "amigos";

    }
}
class SaludoEspecial extends Saludo2{
    saludar(){
        console.log(`Hola ${this.getDestinatario()}`);
    }

}

const saludo: SaludoEspecial=new SaludoEspecial();
saludo.saludar();
// saludo.getDestinatario(); //ERROR NO SE TIENE ACCESO DE FORMA PUBLICA 



// EJEMPLO 2 FORMA DE CAMBIAR LA PROPIEDA M DE PROTECTED A PUBLICA 
class Base3{
    protected m=10;
}

class Derivada extends Base3{
    m=15;
}

const d=new Derivada();
console.log(d.m);

//ACCESO PROTEGIDO
class Base2{
    protected x:number=1;

}
class Derivada2 extends Base2{
    protected x:number=5;
}

class Derivada3 extends Base2{
    imprimirX(c1:Derivada3){
        console.log(c1.x);
    }
}