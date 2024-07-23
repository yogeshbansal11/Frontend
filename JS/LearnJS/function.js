// let a = 10;
// let b = 20;

// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)

//using functions

// function add(a,b){
//   console.log(a+b)
// }
// function minus(a,b){
//   console.log(a-b)
// }
// function mul(a,b){
//   console.log(a*b)
// }
// function div(a,b){
//   console.log(a/b)
// }
// add(10,20)
// minus(10,20)
// minus(4,3)
// mul(10,20)
// div(10,20)

// function add(a,b=40){
//   return a+b;
// }
// let ans = add(10,20);
// console.log(ans)


  // function add(a,...b){          //rest operator
  //   console.log(a)
  //   console.log(b)
  // }
  // add(5,7,8,9);

// let a = [1,5,1,7,66]
// let b = [7,5,9,7,66]
// let c= [...a,...b]
// // console.log(c[0][1])
// console.log(c)

// let[a,b,...c] = [10,20,30,40,50,0]        //unpack krna
// console.log(a)
// console.log(b)
// console.log(c)

// let a = function(){
//   console.log("hello")
// }
// a()

// let b = function(a,b){
//   return a+b
// }
// console.log(b(10,20))

// function output(){
//   console.log("this is the naming function")    /naming
// }
// output();

// (function(){
//   console.log("hello i am anonymous function ")       /anonymous
// })()


// (()=>{
//   console.log("hello i am arrow function")            /arrrow
// })()

// let add = function(a,b){
//   console.log(a+b)
// }
// add(10,20)

// let add = function(a,b){
//   return a+b
// }
// add(10,20)

// let add = (a,b)=> a+b
// console.log(add(10,20))           /single line arrow

//write a program to print number is prime or non prime

// let primenotprime = (n)=>{
//   for(let i=2;i<n;i++){
//       if(n%i==0){
//         return 1
//       }
//     }
//     return 0
//  }
//  let ans=primenotprime(3);
//  if(ans==0){
//     console.log("prime")
//  }
//  else{
//   console.log("not prime")
//  }


