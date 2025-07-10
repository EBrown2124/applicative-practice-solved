import { data } from "../data/data";
/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  const yearCount = {};
  let mostCommonYear = null;
  let maxCount = 0;

  for (const elm of data.asteroids) {
    const year = elm.discoveryYear;
    yearCount[year] = (yearCount[year] || 0) + 1;

    if (yearCount[year] > maxCount) {
      maxCount = yearCount[year];
      mostCommonYear = year;
    }
  }
  return mostCommonYear;
}
console.log(getGreatestDiscoveryYear(data));

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
