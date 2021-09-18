class MiClase{
    static x=10;

    static imprimirX(){
        //PARA ACCEDER A UNA PROPIEDAD UTILIZAMOS THIS DENTRO DEL METODO ESTATICO
        console.log(`El valor de x es: ${this.x}`);
    }

    imprimirX(){
        //PARA ACCERDER A UNA PROPIEDAD ESTATICA USAMOS EL NOMBRE DE LA CLASE
        console.log(`El valor de x  en una instancia es: ${MiClase.x} `);
    }
}
//PARA ACCERDER A UN METODO LO HACEMOS DIRECTAMENTE DESDE LA CLASE 
MiClase.imprimirX();

// PARA ACCERDER A UNA PROPIEDAD ESTATICA LO HACEMOS DIRECTAMENTE DESDE LA CLASE
console.log(`El valor obtenido de x es: ${MiClase.x}`);

const miClase=new MiClase();
miClase.imprimirX;

//LOS ELEMENTOS ESTATICOS PUEDEN SER PUBLIC PRIVATE O PROTECTED
class MiClase2{
    private static x=10;
}
console.log(MiClase.x);

// HEREDAR METODO STATiC
class Base{
    static saludar(){
        console.log("Hola mundo");
    }
}

class Derivada extends Base{

}
Derivada.saludar();

class Error1{
    // static name="SI"; //ERROR PORQUE NO SE PUEDE USAR ESE NOMBRE
}