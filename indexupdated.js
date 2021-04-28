
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
// am4core.useTheme(am4themes_spiritedaway);
am4core.useTheme(am4themes_dark);
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart1 = am4core.create("chartContainer1", am4charts.PieChart);
var chart2 = am4core.create("chartContainer2", am4charts.PieChart);
// // Add data
//  chart1.colorField: "color"; //property containing your color in your data
//   chart1.labelColorField: "labelColor",
chart1.data = [ {
  "country": "Lithuania",
  "size": 70,
  "color": am4core.color("blue")
}, {
  "country": "Netherlands",
  "size": 30,
  "color": am4core.color("pink")

} ];
chart2.data = [ {
    "country": "Lithuania",
    "size": 60
  }, {
    "country": "Czechia",
    "size": 40,
    "color": am4core.color("#F1D302")
} ];
chart1.innerRadius = am4core.percent(50);
chart2.innerRadius = am4core.percent(50);
var pieSeries1 = chart1.series.push(new am4charts.PieSeries());
pieSeries1.dataFields.value = "size";
pieSeries1.dataFields.category = "country";
pieSeries1.labels.template.fill = am4core.color("white");
pieSeries1.slices.template.strokeWidth = 2;
pieSeries1.slices.template.strokeOpacity = 1;
pieSeries1.alignLabels = false;
pieSeries1.labels.template.maxWidth = 160;
pieSeries1.labels.template.wrap = true;
pieSeries1.hiddenState.properties.opacity = 1;
pieSeries1.hiddenState.properties.endAngle = -90;
pieSeries1.hiddenState.properties.startAngle = -90;
pieSeries1.slices.template.propertyFields.fill = "color";

var pieSeries2 = chart2.series.push(new am4charts.PieSeries());
pieSeries2.dataFields.value = "size";
pieSeries2.dataFields.category = "country";
pieSeries2.labels.template.fill = am4core.color("white");
pieSeries2.slices.template.strokeWidth = 2;
pieSeries2.slices.template.strokeOpacity = 1;
pieSeries2.hiddenState.properties.opacity = 1;
pieSeries2.hiddenState.properties.endAngle = -90;
pieSeries2.hiddenState.properties.startAngle = -90;
pieSeries2.alignLabels = false;
pieSeries2.slices.template.propertyFields.fill = "color";
pieSeries2.labels.template.maxWidth = 160;
pieSeries2.labels.template.wrap = true;



// am4core.useTheme(am4themes_animated);

var chart3 = am4core.create("chartdiv", am4charts.XYChart);

// Add data
chart3.data = [
  {date:new Date(2019,5,12), value1:50, value2:48},
  {date:new Date(2019,5,13), value1:53, value2:51},
  {date:new Date(2019,5,14), value1:56, value2:58},
  {date:new Date(2019,5,15), value1:52, value2:53},
  {date:new Date(2019,5,16), value1:48, value2:44},
  {date:new Date(2019,5,17), value1:47, value2:42},
  {date:new Date(2019,5,18), value1:59, value2:55}
]

// Create axes
var dateAxis = chart3.xAxes.push(new am4charts.DateAxis());
dateAxis.renderer.minGridDistance = 50;

var valueAxis = chart3.yAxes.push(new am4charts.ValueAxis());

// Create series
var series = chart3.series.push(new am4charts.LineSeries());
series.dataFields.valueY = "value1";
series.dataFields.dateX = "date";
series.strokeWidth = 2;
series.minBulletDistance = 10;

// Create series
var series2 = chart3.series.push(new am4charts.LineSeries());
series2.dataFields.valueY = "value2";
series2.dataFields.dateX = "date";
series2.strokeWidth = 2;
series2.strokeDasharray = "3,4";
series2.stroke = series.stroke;
