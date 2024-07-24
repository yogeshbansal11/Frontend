let a = 10;
console.log(`my age is ${a}`)

let my = "bansal";
console.log( name[0])
console.log(typeof name)
console.log(name.length)
for(let i = 0; i<my.length;i++){
  console.log(my[i])
}

console.log(my.toLowerCase())
console.log(my.toUpperCase())
console.log(my.slice(2,4))
console.log(my.replace("b","r"))

let n=15469 ;
let lastnum = n%10;
let firstnum;
while(n>0){
  let rem = n%10;
  firstnum = rem;
  n = parseInt(n/10);
}
console.log(firstnum)
console.log(lastnum)

let a = [10,20,30,50,60,70];
a.push(100);
console.log(a);