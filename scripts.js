// load in stylesheet
var sheet = document.styleSheets[0];
// console.log(sheet)

//get time
var d = new Date();
var hours = d.getHours();
var minutes = d.getMinutes();
var seconds = d.getSeconds();

//create hex code
var hexString = "#"+hours+minutes+seconds;
console.log(hexString);

sheet.insertRule("body { background-color: red; }", 1);