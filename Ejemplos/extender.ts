interface Transporte{
    nombre:string;
}

type Figura={
    nombre:string;
}

//EXTENDER
interface Auto extends Transporte{
    ruedas:number;
}
type Cuadrado2=Figura &{
    lados:4;
}