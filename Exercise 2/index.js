//data array
var xArray = ["indonesia", "taiwan", "china", "usa", "malaysia"];
var yArray = [55, 49, 44, 24, 15];

//define data
var data = [{ x: xArray, y: yArray, type: "bar" }];

//define layout
var layout = {
  title: "World Wide Wine Production",
};

//display using plotly
Plotly.newPlot("myPlot", data, layout);
