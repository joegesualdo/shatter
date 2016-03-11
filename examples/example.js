var Shatter = require(__dirname + "/../index")

var shatterEl = new Shatter({
  string: "Hello world",
  delimeter: " ",
  elClassName: "shatter-el"
})
var shatterHTML = shatterEl.getHTML()
console.log(shatterHTML)
