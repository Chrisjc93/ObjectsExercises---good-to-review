let superChimpOne = {

    name: "Chad",
    species: "Chimpanzee",
    mass: 9,
    age: 6,
    move: function() {
        let numOfSteps = Math.round(Math.random()*10);
        return numOfSteps;
    }
};

let salamander = {

    name: "Lacey",
    species: "Axolotl Salamander",
    mass: 0.1,
    age: 5,
    move: function() {
        let numOfSteps = Math.round(Math.random()*10);
        return numOfSteps;
    }
};

let superChimpTwo = {

    name: "Brad",
    species: "Chimpanzee",
    mass: 11,
    age: 6,
    move: function() {
        let numOfSteps = Math.round(Math.random()*10);
        return numOfSteps;
    }
};

let superBeagle = {

    name: "Leroy",
    species: "Beagle",
    mass: 14,
    age: 5,
    move: function() {
        let numOfSteps = Math.round(Math.random()*10);
        return numOfSteps;
    }
};

let superTaradigrade = {

    name: "Almina",
    species: "Tardigrade",
    mass: 0.0000000001,
    age: 1,
    move: function() {
        let numOfSteps = Math.round(Math.random()*10);
        return numOfSteps;
    }
};

let crew = [superChimpOne,salamander,superChimpTwo,superBeagle,superTaradigrade]

// After you have created the other object literals, add the astronautID property to each one.
let ids = [];
let id = 0;
for (let i = 0; i < crew.length; i++){
  id = Math.ceil(Math.random()*10);
  
    if (!ids.includes(id))
    {
      crew[i].astronautID = id;
      ids.push(id);
      
    } else 
    {
      while (ids.includes(id))
      {
        id = Math.round(Math.random()*10);
      }
      crew[i].astronautID = id;
      ids.push(id);
    }
    console.log(crew[i].astronautID + crew[i].name);
}
// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!


function crewReports (animal) 
{
    return `${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`;
}

crewReports(superChimpOne);

function fitnessTest(arr)
{
   let steps = 0;
   let count = 0;
   let arrOfTurns = [];

   for(let i =0; i < arr.length; i++)
   {
    while (steps <= 20)
    {
      steps = steps + arr[i].move();
      count++;
    }
  arrOfTurns[i] = `${arr[i].name} took ${count} turns to take 20 steps. \n` ; 
  steps = 0;
  count = 0;
}
return arrOfTurns.join('');
}

fitnessTest(crew);

