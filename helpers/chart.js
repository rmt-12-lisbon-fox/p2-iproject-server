const QuickChart = require('quickchart-js');

function createChart() {
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
      fontSize: 14
    },
    ticks: {
      beginAtZero: true,
      max: 500,
      display: true
    }
  },
  title: {
    display: true,
    text: 'Daily Recommended Dietary Allowance Accomplishment',
    fontSize: 24,
    padding: 8, 
    position: 'top'
  },
  legend: {
    position: 'bottom',
    display: true
  }
};

// Data
let graphData = {
    labels: ["Protein", "Fat", "Sugars", "Cholesterol", "Carbohydrate"],
    datasets: [
      {
        label: "Your Intake",
        data: [29, 135, 130, 278, 260],
        backgroundColor: ['rgba(63, 81, 181, 1)'],
        borderColor: 'rgba(63, 81, 181, 1)',
      },
      {
        label: "Ideal RDA",
        backgroundColor: ['rgba(89,189,240, 0.75)'],
        borderColor: 'rgba(89,189,240, 0.75)',
        data: [65, 75, 30, 300, 430],
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