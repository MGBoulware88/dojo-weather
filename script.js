// 3 js functions needed: alert on city click | Accept hides cookies | convert temp when unit changes

//alert
function myAlert(city) {
    if (city === 'Burbank') {
        alert("Loading weather report. . .");
    }
    else if (city === 'Chicago') {
        alert("Loading weather report. . .");
    }
    else {
        alert("All my exes live in Texas");
    }
}

//hide cookie message
function hideMyParentElement(element) {
    element.parentNode.remove();
}

//vars for temp changing
//start with these on page load
var todayHighC = document.querySelector("#today-high").innerText;
var todayLowC = document.querySelector("#today-low").innerText;
var tomorrowHighC = document.querySelector("#tomorrow-high").innerText;
var tomorrowLowC = document.querySelector("#tomorrow-low").innerText;
var fridayHighC = document.querySelector("#friday-high").innerText;
var fridayLowC = document.querySelector("#friday-low").innerText;
var saturdayHighC = document.querySelector("#saturday-high").innerText;
var saturdayLowC = document.querySelector("#saturday-low").innerText;
//temps to change to when unit changes to °F
var todayHighF = Math.round((9 * todayHighC + 160) / 5);
var todayLowF = Math.round((9 * todayLowC + 160) / 5);
var tomorrowHighF = Math.round((9 * tomorrowHighC + 160) / 5);
var tomorrowLowF = Math.round((9 * tomorrowLowC + 160) / 5);
var fridayHighF = Math.round((9 * fridayHighC + 160) / 5);
var fridayLowF = Math.round((9 * fridayLowC + 160) / 5);
var saturdayHighF = Math.round((9 * saturdayHighC + 160) / 5);
var saturdayLowF = Math.round((9 * saturdayLowC + 160) / 5);
//var to track the unit
var currentUnit = "C";

/*formula for converting C to F:
F = (9C + (32*5))/5
*/
function changeTempUnit() {
    //when the .value for #unit changes, update the temperatures to the other unit type

    //this first part should run when switched first time and every odd # of times the value is switched
    if (currentUnit == "C") {
        currentUnit = "F";
        document.querySelector("#today-high").innerText = todayHighF;
        document.querySelector("#today-low").innerText = todayLowF;
        document.querySelector("#tomorrow-high").innerText = tomorrowHighF;
        document.querySelector("#tomorrow-low").innerText = tomorrowLowF;
        document.querySelector("#friday-high").innerText = fridayHighF;
        document.querySelector("#friday-low").innerText = fridayLowF;
        document.querySelector("#saturday-high").innerText = saturdayHighF;
        document.querySelector("#saturday-low").innerText = saturdayLowF;  
    }
    //this part should run every even # of times the value is switched, converting back to °C
    else if (currentUnit == "F") {
        currentUnit = "C";
        document.querySelector("#today-high").innerText = todayHighC;
        document.querySelector("#today-low").innerText = todayLowC;
        document.querySelector("#tomorrow-high").innerText = tomorrowHighC;
        document.querySelector("#tomorrow-low").innerText = tomorrowLowC;
        document.querySelector("#friday-high").innerText = fridayHighC;
        document.querySelector("#friday-low").innerText = fridayLowC;
        document.querySelector("#saturday-high").innerText = saturdayHighC;
        document.querySelector("#saturday-low").innerText = saturdayLowC;
    }
    console.log(currentUnit);
}