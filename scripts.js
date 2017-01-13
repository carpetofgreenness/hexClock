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
	// console.log(hours + " " + minutes + " " + seconds)

	//make all numbers 2 digits
	function makeTwoDigits(num) {
		if (num<10) {
			num = "0"+num;
		}
		return num;
	}
	hours = makeTwoDigits(hours);
	minutes = makeTwoDigits(minutes);
	seconds = makeTwoDigits(seconds);

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

	//change body styles
	document.body.style.backgroundColor=hexString;
	document.body.style.color=color;

	//change page text
	document.getElementById("clock").innerText = hexString;
}, 1000);

