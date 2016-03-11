var wrapWithHTML = require("wrap-with-html");

function Shatter(opts) {
  this.rawString = opts.string;
  this.wrapperTagName = opts.wrapperTagName || "div";
  this.wrapperClass = opts.wrapperClass || "shatter-holder";
  this.delimeters = opts.delimeters;
}

Shatter.prototype.getHTML = function() {
  var words = []
  var htmlString = "";
  wordDelimeter = this.delimeters.filter(function(delimeter){return delimeter.delimeter === "word"})[0]
  charDelimeter = this.delimeters.filter(function(delimeter){return delimeter.delimeter === "char"})[0]

  if (wordDelimeter) {
    words = this.rawString.split(" ")
    var wordClassName = wordDelimeter.elClassName || "shatter-word"
    var wordTagName = wordDelimeter.elTagName|| "div"

    if (charDelimeter) {
      var charClassName = charDelimeter.elClassName || "shatter-word"
      var charTagName = charDelimeter.elTagName|| "div"
      for (var wordsIndex = 0; wordsIndex < words.length; wordsIndex++) {
        var chars = words[wordsIndex].split("")
        var wordString= '';
        var charString = ''
        for (var charIndex = 0; charIndex < chars.length; charIndex++) {
          charString += wrapWithHTML({
            string: chars[charIndex],
            // TODO: custom
            tagName: charTagName,
            customClass: charClassName 
          })
        }
        wordString = wrapWithHTML({
          string: charString,
          tagName: wordTagName,
          customClass: wordClassName
        })
        htmlString += wordString;
      }
    } else {
      for (var wordsIndex = 0; wordsIndex < words.length; wordsIndex++) {
        htmlString += wrapWithHTML({
          string: words[wordsIndex],
          tagName: wordTagName,
          customClass: wordClassName
        })
      }
    }

  } else if (charDelimeter) {
    var charClassName = charDelimeter.elClassName || "shatter-word"
    var charTagName = charDelimeter.elTagName|| "div"
    var arrayString = this.rawString.split("");
    var htmlString = "";

    for (var i = 0; i < arrayString.length; i++) {
      htmlString += wrapWithHTML({
        string: arrayString[i],
        tagName: charTagName,
        customClass: charClassName
      })
    }
  }
  htmlString = wrapWithHTML({
    string: htmlString,
    tagName: this.wrapperTag,
    customClass: this.wrapperClass
  })

  return htmlString;
}

module.exports = Shatter;
