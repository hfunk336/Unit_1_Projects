"use strict"
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: 
   Date:   

*/

var thisTime = new Date("February 3, 2018 3:15:28");
var timeStr = toLocaleString(thisTime);

document.getElementById(timestamp).innerHTML = timeStr;

var thisHour = getHours(thisTime);
var thisMonth = getMonth(thisTime);

var mapNum = (2*thisMonth + thisHour) % 24;

var imgStr = "<img src='sd_sky" + mapNum + ".png'/>";

document.getElementById(planisphere)