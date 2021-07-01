const QuickChart = require('quickchart-js');

function createChart(p, f, s, co, ca, e) {

  e = e/10

// Options
let graphOptions = {
  maintainAspectRatio: true,
  responsive: false,
  layout: {
    padding: {
      left: 50,
      right: 50,
      top: 20,
      bottom: 20
    }
  },
  scale: {
    pointLabels: {
      fontColor: "black",
      fontSize: 14
    },
    ticks: {
      beginAtZero: true,
      fontColor: "black",
      max: 500,
      display: true
    }
  },
  title: {
    fontColor: "black",
    display: true,
    text: 'Daily Recommended Dietary Allowance Accomplishment',
    fontSize: 24,
    padding: 8, 
    position: 'top'
  },
  legend: {
    position: 'bottom',
    display: true,
    labels : {
      fontColor : "black"
    }
  }
};

// Data
let graphData = {
    labels: ["Protein", "Fat", "Sugars", "Cholesterol", "Carbohydrate", "Energy"],
    datasets: [
      {
        label: "Your Intake",
        data: [p, f, s, co, ca, e],
        backgroundColor: ['rgba(63, 81, 181, 0.1)'],
        borderColor: 'rgba(63, 81, 181, 1)',
      },
      {
        label: "Ideal RDA",
        backgroundColor: ['rgba(250, 33, 33, 0.5)'],
        borderColor: 'rgb(250, 33, 33)',
        data: [65, 75, 30, 300, 430, 265],
      }
    ]
  };

  const myChart = new QuickChart();
  myChart
    .setConfig({
      type: "radar",
      data: graphData,
      options: graphOptions
    })
    .setWidth(800)
    .setHeight(400)
    .setBackgroundColor('transparent');
    
  
  // Print the chart URL
  return (myChart.getUrl());
}


module.exports = createChart