import { data } from "../data/data";

// SPACE DATA EXERCISE 8
// Return a Planet name by a given moon name
// Return example: 'Planet Name'

export function findPlanetNameByMoon(data, moonName) {
  // Your code goes here...

  const haveMoon = data.planets
    .filter((planet) => {
      if (Array.isArray(planet.moons)) {
        for (let i = 0; i < planet.moons.length; i++) {
          if (planet.moons[i] === moonName) {
            return planet.moons[i];
          }
        }
      }
    })
    .map((planet) => planet.name);
  return `${haveMoon}`;
}
console.log(findPlanetNameByMoon(data, "Europe"));

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
