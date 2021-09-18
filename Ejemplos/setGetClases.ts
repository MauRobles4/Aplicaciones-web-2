class Desfile{
    private _participantes=0;

    get participantes():number{
        return this._participantes;

    }
    
    set participantes(v:number){
        this._participantes=v;

    }
}

const desfileHoy=new Desfile();
desfileHoy.participantes=100;
console.log(desfileHoy.participantes);