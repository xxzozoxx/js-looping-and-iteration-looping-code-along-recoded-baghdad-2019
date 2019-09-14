// Code your solutions in this file
let msg;
function writeCards(arr,event){
  for(let i=0;i<arr.length;i++){
   msg = console.log(`Thank you ${arr[i]} for the wonderful ${event} gift!`);
  }
   return msg;
}
writeCards(["Ada", "Brendan", "Ali"], "birthday");

function countdown (num){
  while (num >= 0){
   console.log(num --);
  }
 
}
countdown(10);