function getRandomItem(arr) {
  if (!isNaN(arr.length)) return arr[Math.floor(Math.random() * arr.length)];
  return null;
}