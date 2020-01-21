"use strict"
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: 
   Date:   

*/

var thisTime = new Date();
var timeStr = thisTime.toLocaleString();
// changes the date from thisTime to be a locale date string

document.getElementById("timeStamp").innerHTML = timeStr;
// sets the text in the timeStamp id element to be the timeStr var

var thisHour = thisTime.getHours();
// gets the hours from thisTime
var thisMonth = thisTime.getMonth();
// gets the month from thisTime

var mapNum = (2*thisMonth + thisHour) % 24;

var imgStr = "<img src= 'sd_sky" + mapNum + ".png'/>";
// uses the mapNum var to set which sd_sky.png it is

document.getElementById("planisphere").insertAdjacentHTML('afterBegin', imgStr);