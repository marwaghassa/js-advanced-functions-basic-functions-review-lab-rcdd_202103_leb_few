// Your code here
<<<<<<< HEAD
function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity="go to the office") {
  return `This Monday, I will ${activity}.`

}
let wrapAdjective = function(style="*") {
  return function(adjective="special") {
    return `You are ${style}${adjective}${style}!`
  }
}

const Calculator = {
  add: function(a,b) {
  
    return a + b;
  },
  subtract: function(a,b) {
    return a - b
  },
  multiply: function(a,b) {
    return a * b
  },
  divide: function(a,b)
  {return a/b;}
};
let actionApplyer =function(start,arr){
  
  let a = start

  for (let i = 0; i < arr.length; i++ ){
    a = arr[i](a)
  }

  return a
  
  
  
}






=======
function saturdayFun(activity="roller-skate"){
  console.log("i want to ${activity}");
}
let mondayWork = function(activity="go to the office") {
  return `This Monday, I will ${activity}.`
}
let wrapAdjective=function(style="*"){
  
   function(par="special"){
    return 'you are ${style} ${par} ${style}'
    
    
    
    
  }
}
>>>>>>> b92244f30061812b3825e07395927155b347ca88
