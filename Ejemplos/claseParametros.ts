class Video{
    constructor(
        public readonly nombre:string,
        public readonly duracion:number,
        public readonly formato:"mp4"| "mkv"|"web"
    ){}

}

const miVideo:Video =new Video("vacaciones",60,"mp4");

console.log(`Mi video de: ${miVideo.nombre}`);
console.log(`Tiene una duracion de: ${miVideo.duracion}`);
console.log(`Y el formato es: ${miVideo.formato}`);