class Figura{
    lados=0;
}

class Circulo extends Figura{
    constructor(){
        
        this.lados=2;//ESTO DA ERROR PORQUE SUPER DEBE IR ANTES PARA PODER USAR THIS
        super();
    }
}