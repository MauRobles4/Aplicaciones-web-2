interface Encendible{
    encender():void;
}

class Television implements Encendible{
    encender():void{
        console.log("El televisor se ha encendido");
    }
}

//2DO EJEMPLO
interface Verificable{
    verificar(nombre:string):boolean;
}

class NombreVerificable implements Verificable{
    verificar(nombre): boolean{
        return nombre.toLowerCase();
    }
}