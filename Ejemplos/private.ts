class Base4{
    private x=0;
}
class Derivada4 extends Base4{
    imprimirX2(){
        // console.log(this.x); //ERROR PORQUE EL ELEMENTO ES PRIVADO
    }
}
const b= new Base4();
// console.log(b.x); //ERROR PORQUE ES PRIVADO

//ACCESO PRIVADO
class A{
    private y=10;

    public imprimirY(otra:A){
        console.log(otra.y);
    }
}

const c=new A();
c.imprimirY(new A());