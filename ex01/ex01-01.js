var nameBaseHandler;
var xhr = new XMLHttpRequest();
xhr.open('GET', 'name-base.json', false);
xhr.send();
if (xhr.status != 200) {
  nameBaseHandler = null;
} else {
  nameBaseHandler = {
    nameBase: JSON.parse(xhr.responseText)
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
  
}
