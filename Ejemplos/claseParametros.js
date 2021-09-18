var Video = /** @class */ (function () {
    function Video(nombre, duracion, formato) {
        this.nombre = nombre;
        this.duracion = duracion;
        this.formato = formato;
    }
    return Video;
}());
var miVideo = new Video("vacaciones", 60, "mp4");
console.log("Mi video de: " + miVideo.nombre);
console.log("Tiene una duracion de: " + miVideo.duracion);
console.log("Y el formato es: " + miVideo.formato);
