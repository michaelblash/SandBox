var nameBaseHandler = {
  nameBase: names
};

nameBaseHandler[Symbol.iterator] = function() {
  let i = 0;
  let length = this.nameBase.length;
  let nameBase = this.nameBase;
  return {
    next() {
      if (i < length) {
        let value = {
          done: false,
          value: { index: i, origin: nameBase[i].origin }
        };
        i++;
        return value;
      }
      else
      return {
        done: true
      };
    }
  }
};

nameBaseHandler.generateName = function(originIndex, gender) {
  var namePieces = this.nameBase[originIndex];
  if (gender !== "fem") gender = "male";
  var result = {};
  if (namePieces) {
    var firstNamePool = namePieces.firstName[gender];
    var firstName = getRandomItem(firstNamePool);
    result.firstName = firstName;
    var lastNamePool = namePieces.lastName;
    var lastNameSet = getRandomItem(lastNamePool);
    var lastName = lastNameSet.root + lastNameSet[gender === "male" ? "maleSuff" : "femSuff"];
    result.lastName = lastName;
  }
  return result;
};