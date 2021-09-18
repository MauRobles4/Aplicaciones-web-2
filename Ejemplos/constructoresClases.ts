class Punto2{
    x:number;
    y:number;
  
    constructor(x=10,y=4){
        this.x=x;
        this.y=y;
    }
}
let miPunto2= new Punto2();
console.log(miPunto2.x);
console.log(miPunto2.y);

//SOBRECARGA DE CONSTRUCTORES 
class Punto3{
    //USO DE SOBRECARGA
    constructor(x:number, y:number);
    constructor(s:string);
    constructor(xs:number | string, y?:number){
        
    }
}