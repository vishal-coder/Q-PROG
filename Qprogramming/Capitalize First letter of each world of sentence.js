let str = "hello there";
let worlds = [];
for (let world of str.split(" ")) {
  worlds.push(world[0].toUpperCase() + world.slice(1));
}

console.log(worlds.join(" "));
