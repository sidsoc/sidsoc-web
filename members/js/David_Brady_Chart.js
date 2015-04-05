//Step 6
//This JS page allows you to set the data for your charts
//We have provided you with space to add 15 skills. If you need space for more please let us know and we can help you amend this JS page and 
//the corresponding html page.
//To add a skill replace one of the letters with the name of the skill. Then assign a number to the corresponding place in the data array 
// 1 indecates beginner skill level 
// 2 indecates intermediate skill level 
// 3 indecates advanced skill level 

//Example: Replace "A" with Java and assign the number 2 to the first position in the array to indicate an intermediate skill level

var Chart1Data = {
        labels : ["A", "B", "C", "D", "E"],
        datasets : [
            {
                fillColor : "#00CCFF",
                strokeColor : "#FFF",
                highlightFill : "#FFFF00",
                highlightStroke : "#00CCFF",
                data : [1, 2, 3 , 2, 1]
            }
        ]

    }

var Chart2Data = {
        labels : ["H", "I", "J", "K", "L"],
        datasets : [
            {
                fillColor : "#00CCFF",
                strokeColor : "#FFF",
                highlightFill : "#FFFF00",
                highlightStroke : "#00CCFF",
                data : [1, 2, 3 , 2, 1]
            }
        ]

    }

var Chart3Data = {
        labels : ["M", "N", "O", "P", "Q"],
        datasets : [
            {
                fillColor : "#00CCFF",
                strokeColor : "#FFF",
                highlightFill : "#FFFF00",
                highlightStroke : "#00CCFF",
                data : [1, 2, 3 , 2, 1]
            }
        ]

    }

    window.onload = function(){
        var ctx1 = document.getElementById("chart1").getContext("2d");
        window.chart1 = new Chart(ctx1).Bar(Chart1Data, {
            responsive : true
        });

        var ctx2 = document.getElementById("chart2").getContext("2d");
        window.chart2 = new Chart(ctx2).Bar(Chart2Data, {
            responsive : true
        });

        var ctx3 = document.getElementById("chart3").getContext("2d");
        window.chart3 = new Chart(ctx3).Bar(Chart3Data, {
            responsive : true
        });
    }
