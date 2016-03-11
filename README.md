## Shatter 
> Split strings into html elements.

## Install
```
$ npm install --save shatter-html
```

## Usage
```javascript
var Shatter = require("shatter-html");

var shatterEl = new Shatter({
  string: "Hello world",
  delimeter: " ",
  elClassName: "word"
})

shatterEl.getHTML()
//=> <div id='' class='shatter-holder'>
//=>   <div id='' class='word'>
//=>     Hello
//=>   </div>
//=>   <div id='' class='word'>
//=>     world
//=>   </div>
//=> </div>
```

## API

### `new Shatter(opts)`

#### Options
| Name | Type | Description |
|------|------|-------------|
| string | `String` | String to split into HTML elements
| elClassName | `String` | Class name for each split element
| elTagName | `String` | Tag name for each split element
| holderTagName | `String` | Tag name for the element that holds the split elements
| holderClassName | `String` | Class name for the element that holds the split elements
| delimeter | `String|Regex` | Where the string should be split
