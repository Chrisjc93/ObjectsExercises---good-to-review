let superChimpOne = {
    astronautID: 1,
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
    astronautID: 2,
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
    astronautID: 3,
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
    astronautID: 4,
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
    astronautID: 5,
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
