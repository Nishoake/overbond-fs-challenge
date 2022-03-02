const Input = require('./input')

// Parsing the input into arrays
const unparsedInput = Input.sample
const parsedISIN = unparsedInput.match(/ISnIS(\d{10})/g).map(data => data.substring(3))
const parsedAmountOutstanding = unparsedInput.match(/AOs(\d{11})/g).map(data => data.substring(3)).map(numString => parseInt(numString))
const parsedMaturityDate = unparsedInput.match(/DMa(\d{8})/g).map(data => data.substring(3)).map(text => text.slice(0, 4) + "-" + text.slice(4, 6) + "-" + text.slice(6))
const parsedYears = parsedMaturityDate.map(data => data.substring(0, 4))

// Initialize graph object to feed data into visualization tool
const graph = {}

// Initialize table object to display parsed data in console
const table = []
// Function to group entry data
function addEntry(ISIN, amount, date) {
  this.ISIN = ISIN
  this.amount = amount
  this.date = date
}

// Iterate to add data to the graph and table object
for (let i = 0; i < parsedYears.length; i++) {
  // Adding to the graph
  if (!graph[`${parsedYears[i]}`]) graph[`${parsedYears[i]}`] = 0
  graph[`${parsedYears[i]}`] += parsedAmountOutstanding[i]

  // Adding to the table
  table.push(new addEntry(parsedISIN[i], parsedAmountOutstanding[i], parsedMaturityDate[i]))
}

// Check the console for the parsed data
console.table(table)

module.exports = {
  graph: graph,
  table: table
}