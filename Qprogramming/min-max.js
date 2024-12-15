const arr = [2,5,10,50,100]
let min = arr[0] , max = arr[0]

for(let i  = 0; i< arr.length; i++){
  if(arr[i] > max){
    max = arr[i]
  }


  if(arr[i]< min){
    min = arr[i]
  }
}

console.log("min",min)
console.log("max",max)

///////////////////////////////////////  using destructuring //////////////////////////////////////

const arr = [2,5,10,50,100]
let min = Math.min(...array);
let max = Math.max(...array);


//////////////////////////////////////////////////////////////////////////////////////

const characters = [
  { id: 1, first: "Tim", last: "Draper" },
  { id: 17, first: "David", last: "Boies" },
  { id: 199, first: "Tim", last: "Kemp" },
  { id: 75, first: "Henry", last: "Mosley" },
  { id: 444, first: "Elizabeth", last: "Holmes" },
  { id: 95, first: "Donald", last: "Lucas" },
  { id: 186, first: "Larry", last: "Ellison" },
  { id: 364, first: "Channing", last: "Robertson" },
  { id: 285, first: "Charles", last: "Fleischmann" },
  { id: 33, first: "John", last: "Howard" }
];

let max = 0;
characters.forEach(character => {
  if (character.id > max) {
    max = character.id;
  }
});

console.log("max is ", max)


////////////////////// using reduce /////////////////////////////


const maxId = characters.reduce(
  (max, character) => (character.id > max ? character.id : max),
  characters[0].id
);