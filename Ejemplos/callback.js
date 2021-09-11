// function miIterador(arr:any[], callback:(arg:any,index?:number)=>void){
//     for (let i = 0; i < arr.length; i++) {
//         callback(arr[i],i);
//     }
// }
//AQUI ES DONDE INDEX ES OPCIONAL O NO
function miIterador(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}
miIterador([1, 2, 3], function (a) { return console.log(a); });
miIterador([1, 2, 3], function (a, i) { return console.log(a, i); });
