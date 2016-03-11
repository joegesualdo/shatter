var wrapWithHTML = require("wrap-with-html");

function Shatter(opts) {
  this.rawString = opts.string;
  this.elClassName = opts.elClassName || "shatter-wrapper"
  this.elTagName = opts.elTagName|| "div"
  this.holderTagName = opts.holderTagName || "div";
  this.holderClassName = opts.holderClassName || "shatter-holder";
  this.delimeter = opts.delimeter;
}

Shatter.prototype.getHTML = function() {
  var arrayString = this.rawString.split(this.delimeter);
  var htmlString = "";

  // Create shatter html string.
  for (var i = 0; i < arrayString.length; i++) {
    htmlString += wrapWithHTML({
      string: arrayString[i],
      tagName: this.elTagName,
      customClass: this.elClassName
    })
  }
  htmlString = wrapWithHTML({
    string: htmlString,
    tagName: this.holderTagName,
    customClass: this.holderClassName
  })

  return htmlString;
}

module.exports = Shatter;
