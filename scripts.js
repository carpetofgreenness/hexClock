// load in stylesheet
var sheet = document.styleSheets[0];
// console.log(sheet)


//jQuery i found that runs function each second
window.setInterval(function(){
	//get time
	var d = new Date();
	var hours = d.getHours();
	var minutes = d.getMinutes();
	var seconds = d.getSeconds();

	//create hex code
	var hexString = "#"+hours+minutes+seconds;
	// console.log(hexString);

	//should font be black or white?
	var color = "";
	function getContrast(hexcolor){
    	var hexNum = parseInt(hexcolor, 16)
    	if (hexNum > 0xffffff/2){
    		color = "black";
    	} else {
    		color = "white";
    	}
	}
	getContrast(hexString);
	// console.log(color);

	//make style rule
	var styleRule = "body { background-color: " + hexString + "; color: " + color +";}"
	// console.log(styleRule);

	sheet.insertRule(styleRule, 0);

	//change page text
	document.getElementById("clock").innerText = hexString;
}, 1000);

