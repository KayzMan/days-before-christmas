let resultDisplay = document.querySelector('#result')
let date = new Date()
let christmasDay = new Date(date.getFullYear(), 11, 25)

// check if christmas day hasn't passed already
if(date.getDate() > 25 && date.getMonth() === 11)
    christmasDay.setFullYear(christmasDay.getFullYear() + 1)

// milliseconds in one day
let oneDayMilliseconds = 24 * 60 * 60 * 1000

// calculate number of days in between
let numberOfDays = Math.floor((christmasDay.getTime() - date.getTime()) / oneDayMilliseconds)

// result
resultDisplay.textContent = numberOfDays.toString()
