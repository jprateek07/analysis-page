
// window.onload = function () {

//     var chart1 = new CanvasJS.Chart("chartContainer1", {
//         backgroundColor: "transparent",
//         animationEnabled: true,
//         // title:{
//         //     text: "Email Categories",
//         //     horizontalAlign: "left"
//         // },
//         data: [{
//             type: "doughnut",
//             startAngle: 60,
//             //innerRadius: 60,
//             indexLabelFontSize: 17,

//             indexLabel: "{label} - #percent%",
//             toolTipContent: "<b>{label}:</b> {y} (#percent%)",
//             dataPoints: [
//                 { y: 60, label: "Inbox" ,color:"blue"},
//                 { y: 40, label: "Archives",color:"white" }
//             ]
//         }]
//     });
//     chart1.render();
//     var chart2 = new CanvasJS.Chart("chartContainer2", {
//         animationEnabled: true,
//         backgroundColor:"transparent"
// ,        title:{
//             text: "Email Categories",
//             horizontalAlign: "left"
//         },
//         data: [{
//             type: "doughnut",
//             startAngle: 60,
//             //innerRadius: 60,
//             indexLabelFontSize: 17,
//             indexLabel: "{label} - #percent%",
//             toolTipContent: "<b>{label}:</b> {y} (#percent%)",
//             dataPoints: [
//                 { y: 67, label: "Inbox" },
//                 { y: 28, label: "Archives" },
//                 { y: 10, label: "Labels" },
//                 { y: 7, label: "Drafts"},
//                 { y: 15, label: "Trash"},
//                 { y: 6, label: "Spam"}
//             ]
//         }]
//     });
//     chart2.render();
    
//     }
    /**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

// Themes begin
am4core.useTheme(am4themes_spiritedaway);
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart1 = am4core.create("chartContainer1", am4charts.PieChart);
var chart2 = am4core.create("chartContainer2", am4charts.PieChart);
// // Add data
//  chart1.colorField: "color"; //property containing your color in your data
//   chart1.labelColorField: "labelColor",
chart1.data = [ {
  "country": "LithuaniaLithuaniaLithuania",
  "size": 50,
}, {
  "country": "Netherlands",
  "size": 50
} ];
chart2.data = [ {
    "country": "Lithuania",
    "size": 60
  }, {
    "country": "Czechia",
    "size": 40,
    "color": am4core.color("#F1D302")
} ];
// Set inner radius
chart1.innerRadius = am4core.percent(50);
chart2.innerRadius = am4core.percent(50);
// Add and configure Series 
var pieSeries1 = chart1.series.push(new am4charts.PieSeries());
pieSeries1.dataFields.value = "size";
pieSeries1.dataFields.category = "country";
pieSeries1.labels.template.fill = am4core.color("white");
pieSeries1.slices.template.strokeWidth = 2;
pieSeries1.slices.template.strokeOpacity = 1;
pieSeries1.alignLabels = false;
pieSeries1.labels.template.maxWidth = 160;
// pieSeries1.stroke = am4core.color("red");//use these two lines to change label color
// pieSeries1.fill = am4core.color("red");
pieSeries1.labels.template.wrap = true;

// pieSeries.labels.template.bent = true; //to bent text
// pieSeries1.labels.template.radius = -10;//to shift text 
// pieSeries1.labels.template.padding(0, 0, 0, 0);
// pieSeries1.labels.template.fill = am4core.color("pink");// to change label color

// This creates initial animation
pieSeries1.hiddenState.properties.opacity = 1;
pieSeries1.hiddenState.properties.endAngle = -90;
pieSeries1.hiddenState.properties.startAngle = -90;
var pieSeries2 = chart2.series.push(new am4charts.PieSeries());
pieSeries2.dataFields.value = "size";
pieSeries2.dataFields.category = "country";
pieSeries2.labels.template.fill = am4core.color("white");
pieSeries2.slices.template.strokeWidth = 2;
pieSeries2.slices.template.strokeOpacity = 1;
// This creates initial animation
pieSeries2.hiddenState.properties.opacity = 1;
pieSeries2.hiddenState.properties.endAngle = -90;
pieSeries2.hiddenState.properties.startAngle = -90;
pieSeries2.alignLabels = false;
pieSeries2.slices.template.propertyFields.fill = "color";
// pieSeries2.labels.template.bent = true;
// chart2.legend = new am4charts.Legend();
// chart2.legend.useDefaultMarker = true;

// chart2.legend.labels.template.text = "[bold {color}]{name}[/]"; to change label color


