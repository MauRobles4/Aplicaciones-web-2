class Animal{
    moverse(){
        console.log("El animal se mueve");
    }
}

class Perro extends Animal{
    ladrar(){
        console.log("El perro ladra");
    }
}

const miPerro=new Perro();
miPerro.moverse();
miPerro.ladrar();