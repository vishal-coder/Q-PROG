let str = "hello there";
let worlds = [];
for (let world of str.split(" ")) {
  worlds.push(world[0].toUpperCase() + world.slice(1));
}

console.log(worlds.join(" "));


//with reduce function 
let str = "hel noo w"
let res = str.split(' ').reduce((acc,x)=>{
  acc.push(x.charAt(0).toUpperCase() + x.slice(1))
  return acc
},[])
console.log(res.join(" "))
