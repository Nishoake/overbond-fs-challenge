// Import Chart.js dependency to render bar graph
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto'

// Import data from utility.js
const utility = require('./utilities/utility')

// Graph Data
const labels = Object.keys(utility.graph)
const values = Object.values(utility.graph)

// Graph settings
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Amount Outstanding',
      data: values,
      backgroundColor: [
        'green'
      ],
      borderWidth: 1,
    }
  ]
}
const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Amount Outstanding per Year',
    },
  },
}

// Render Bar Graph
function App() {
  return (
   <div>
     <Bar
        data={data}
        options={options}
    />
  </div>
  )
}

export default App;