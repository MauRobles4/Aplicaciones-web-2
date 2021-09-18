class Padre{
    saludar(){
        console.log("Hola");
    }
}

class Hijo extends Padre{
    saludar(nombre?:string){
        if(!!nombre){
            console.log(`Hola ${nombre}`);

        }else{
            super.saludar;
        }
    }
}
const hijo=new Hijo();
hijo.saludar();
hijo.saludar("Luis");