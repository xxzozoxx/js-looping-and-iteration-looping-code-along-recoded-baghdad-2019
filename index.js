// Code your solutions in this file
function writeCards(arr,event){
  for(let i=0;i<arr.length;i++){
    console.log(`Thank you ${arr[i]} for the wonderful ${event} gift!`);
  }
   
}
writeCards(["Ada", "Brendan", "Ali"], "birthday");

function countdown (num){
  while (num >= 0){
   console.log(num --);
  }
 
}
countdown(10);