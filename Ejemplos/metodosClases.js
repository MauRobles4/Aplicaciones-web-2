var Video = /** @class */ (function () {
    function Video(titulo) {
        this.titulo = titulo;
    }
    Video.prototype.reproducir = function () {
        console.log(this.titulo + " se esta reproduciendo");
    };
    return Video;
}());
var miVideo = new Video("año nuevo");
miVideo.reproducir();
