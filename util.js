/**
 * Gets a random item from an array
 * @param {Array} arr
 * @return {Object} A random item of the input array
 */
function getRandomItem(arr) {
  if (!isNaN(arr.length)) return arr[Math.floor(Math.random() * arr.length)];
  return null;
}

/**
 * Sets array items in a random order
 * @param {Array} arr
 * @return {Object} New shuffled array
 */
function shuffleArray(arr) {
  return arr.sort(function() { return 0.5 - Math.random() });
}