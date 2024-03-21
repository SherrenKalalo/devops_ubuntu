//data array
var xArray = [40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
var yArray = [5, 7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];

//define data
var data = [{ x: xArray, y: yArray, mode: "lines" }];

//define layout
var layout = {
  xaxis: { range: [10, 160], title: "square meters" },
  yaxis: { range: [3, 16], title: "price ini millions" },
  title: "House Prices vs Size",
};

//display using plotly
Plotly.newPlot("myPlot", data, layout);
