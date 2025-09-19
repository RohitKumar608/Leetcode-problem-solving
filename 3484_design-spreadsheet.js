/**
 * @param {number} rows
 */
var Spreadsheet = function (rows) {
  const sheet = []
  for (let i = 0; i <= rows; i++) {
    sheet[i] = new Array(26).fill(0)
  }
  this.sheet = sheet
}

/**
 * @param {string} cell
 * @param {number} value
 * @return {void}
 */
Spreadsheet.prototype.setCell = function (cell, value) {
  const column = cell.substring(0, 1).charCodeAt(0) - 65
  const row = +cell.substring(1)
  this.sheet[row][column] = value
}

/**
 * @param {string} cell
 * @return {void}
 */
Spreadsheet.prototype.resetCell = function (cell) {
  const column = cell.substring(0, 1).charCodeAt(0) - 65
  const row = +cell.substring(1)
  this.sheet[row][column] = 0
}

/**
 * @param {string} formula
 * @return {number}
 */
Spreadsheet.prototype.getValue = function (formula) {
  formula = formula.substring(1)
  const [cell1, cell2] = formula.split('+')
  const column1 = cell1.substring(0, 1).charCodeAt(0) - 65
  const row1 = +cell1.substring(1)
  const column2 = cell2.substring(0, 1).charCodeAt(0) - 65
  const row2 = +cell2.substring(1)
  if (Number.isInteger(+cell1) && Number.isInteger(+cell2)) {
    return Number(cell1) + Number(cell2)
  }
  if (Number.isInteger(+cell1)) {
    return Number(cell1) + this.sheet[row2][column2]
  }
  if (Number.isInteger(+cell2)) {
    return Number(cell2) + this.sheet[row1][column1]
  }
  return this.sheet[row1][column1] + this.sheet[row2][column2]
}

/**
 * Your Spreadsheet object will be instantiated and called as such:
 * var obj = new Spreadsheet(rows)
 * obj.setCell(cell,value)
 * obj.resetCell(cell)
 * var param_3 = obj.getValue(formula)
 */

/**
 * @param {number} rows
 */
var Spreadsheet = function (rows) {
  this.sheet = new Map()
}

/**
 * @param {string} cell
 * @param {number} value
 * @return {void}
 */
Spreadsheet.prototype.setCell = function (cell, value) {
  this.sheet.set(cell, value)
}

/**
 * @param {string} cell
 * @return {void}
 */
Spreadsheet.prototype.resetCell = function (cell) {
  if (this.sheet.has(cell)) {
    this.sheet.delete(cell)
  }
}

/**
 * @param {string} formula
 * @return {number}
 */
Spreadsheet.prototype.getValue = function (formula) {
  const [val1, val2] = formula.slice(1).split('+')

  const value1 = !Number.isNaN(Number(val1))
    ? Number(val1)
    : this.sheet.get(val1) || 0
  const value2 = !Number.isNaN(Number(val2))
    ? Number(val2)
    : this.sheet.get(val2) || 0

  return value1 + value2
}

/**
 * Your Spreadsheet object will be instantiated and called as such:
 * var obj = new Spreadsheet(rows)
 * obj.setCell(cell,value)
 * obj.resetCell(cell)
 * var param_3 = obj.getValue(formula)
 */

let operations = [
  'Spreadsheet',
  'getValue',
  'setCell',
  'getValue',
  'setCell',
  'getValue',
  'resetCell',
  'getValue',
]
let data = [
  [3],
  ['=5+7'],
  ['A1', 10],
  ['=A1+6'],
  ['B2', 15],
  ['=A1+B2'],
  ['A1'],
  ['=A1+B2'],
]

operations = ['Spreadsheet', 'setCell', 'resetCell']
data = [[24], ['B24', 66688], ['O15']]

var obj = new Spreadsheet(data[0][0])
const result = []
for (let i = 1; i < data.length; i++) {
  if (operations[i] == 'getValue') {
    result.push(obj.getValue(...data[i]))
  }
  if (operations[i] == 'setCell') {
    result.push(obj.setCell(...data[i]))
  }
  if (operations[i] == 'resetCell') {
    result.push(obj.resetCell(...data[i]))
  }
}

console.log(result)
