function deck(arr) {
  var cardObjects = {
    "2": 0,
    "3": 0,
    "4": 0,
    "5": 0,
    "6": 0,
    "7": 0,
    "8": 0,
    "9": 0,
    "10": 0,
    J: 0,
    Q: 0,
    K: 0
    // А: 0
  };
  for (var i = 1; i < arr.length; i++) {
    if (cardObjects.hasOwnProperty(arr[i])) {
      cardObjects[`${arr[i]}`] = cardObjects[`${arr[i]}`] + 1;
    }
  }
  const min = Math.min.apply(null, Object.values(cardObjects));
  console.log(min);
}