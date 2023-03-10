//1.Create a new array called planets that holds all of the names of the planets in our solar system. Print the list of planets on the command line.

// let planets = ["Earth", "Jupiter","Neptune","Mars","Saturn","Mercury","Uranus","Venus"]

//2.What is the index of Mars?

3

//3.Print Mars to the command line from the planet array.

// console.log(planets[3])

//4.Print Saturn to the command line from the planet array.

// console.log(planets[4])

//5.Print Venus to the command line from the planet array.

// console.log(planets[7])

//6.Print out how many elements are in the planet array.

// console.log(planets.length)

//7.Loop through the planet array using a for loop and print the name of each planet.

// for(let index=0; index < planets.length; index++){
//     console.log(planets[index])
// }

//8.Create a while loop that iterates through each of the items in the planet array and changes each element to lowercase.

// for(let index=0; index < planets.length; index++){
//     lowerCasePlanet= planets[index].toLowerCase()
//     console.log(lowerCasePlanet)
// }

//9.Add Pluto to the planet array.

// planets.push('Pluto')
// console.log(planets)

//10.Loop through each planet in the planet array and print them on the command line.

// for(let index=0; index < planets.length; index++){
//     console.log(planets[index])
// }

//11.Since Pluto isn't really a planet, delete it from the planet array.

// planets.pop();
// console.log(planets)

//12.Loop through the planet array and print the updated values (Pluto removed).

// for(let index=0; index < planets.length; index++){
//         console.log(planets[index])
//     }

//13.Create a new array called nums with the following values

let nums = [6,8,10,12,14,16]
console.log(nums)
6, 8, 10, 12, 14, 16

//14.Loop through nums and print each number to the command line.

for(let index = 0; index <= nums.length; index++){
    console.log(nums[index])
}


//15.Add 99 to the end of the nums array.

nums.push(99)
console.log(nums)

//16.Add 23 to the beginning of the nums array.

nums.unshift(23)
console.log(nums)

//17.Loop through nums and multiply each number by 5.

// let bigNum= nums.map((nums) => nums * 5)
// console.log(bigNum)

//18.Sum all of the elements of the nums array
