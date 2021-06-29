let date = '2021-07-07T02:30:00.000Z'

let newDate = new Date(date)
let convert = newDate.toGMTString()

console.log(convert)