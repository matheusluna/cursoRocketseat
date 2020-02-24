"use strict";

//escopo
function teste(x) {
  var y = 2;

  if (x > 5) {
    var _y = 4;
    console.log(x, _y);
  }
}

console.log(y);
teste(10);
