// function miIterador(arr:any[], callback:(arg:any,index?:number)=>void){
//     for (let i = 0; i < arr.length; i++) {
//         callback(arr[i],i);
        
//     }
// }

//AQUI ES DONDE INDEX ES OPCIONAL O NO
function miIterador(arr:any[], callback:(arg:any,index?:number)=>void){
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
        
    }
}

miIterador([1,2,3],(a)=>console.log(a));
miIterador([1,2,3],(a,i)=>console.log(a,i));