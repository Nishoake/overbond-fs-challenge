const utility = require('../src/utilities/utility')

describe('Testing if values match', () => {
  test('Check number of entries', () => {
    expect(utility.table.length).toBe(4)
  })
  test('Check year with the high amount outstanding', () => {
    let maxYear = 0
    for (const property in utility.graph) {
      if (utility.graph[property] > maxYear) maxYear = parseInt(property)
    }

    expect(maxYear).toBe(2030)
  })
})