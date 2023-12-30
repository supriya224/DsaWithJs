let data= [2,5,7,12,9,3];
let position =3; // yha hm position 3 ko delete krenge;
// for(i=0; i<data.length; i++){
//   console.log(data);   // for showing all data but 
// }
for( let i=position; i<data.length-1; i++){ // hm i-3 esily use kiye hai taki hm aage ko jo faltu element hai unhe use na kre direct usi position se start ho jaye
 data[i] =data[i+1]; // yha i ki exact value ke aNndar i ki next value store kr denge   //esi ke through data deletw ho gya

 //esse ye hua ki starting ke value ni show ni kr rhe hai
}
data.length =data.length-1
console.log(data) 


// function deleteEle() {
//   let data = [2, 34, 56, 78, 12, 45, 5];
//   let position = document.getElementById("position").value;
//   position = parseInt(position);
//   // console.log(data[i])
//   for (i = position; i < data.length - 1; i++) {
//     data[i] = data[i + 1];
//   }
//   data.length = data.length - 1;
//   console.log(data);
// }
  



