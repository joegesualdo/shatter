var Shatter = require(__dirname + "/../index")

// var shatterEl = new Shatter({
//   string: "Hello world",
//   delimeter: " ",
//   elClassName: "shatter-el"
// })
// var shatterHTML = shatterEl.getHTML()
// console.log(shatterHTML)
var shatterEl = new Shatter({
  string: "Hello world",
  wrapperClass: "shatter-wrapper",
  wrapperTagName: "div",
  delimeters: [{
    delimeter: "word",
    elClassName: "word-el",
    elTagName: "div"
  }, {
    delimeter: "char",
    elClassName: "char-el",
    elTagName: "div"
  }]
})
var shatterHTML = shatterEl.getHTML()
console.log(shatterHTML)
