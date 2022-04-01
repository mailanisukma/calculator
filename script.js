const numbers = document.querySelectorAll('.number')
const calculatorScreen = document.querySelector('.calculator-screen')
const operators = document.querySelectorAll('.operator')
const equalSign = document.querySelector('.equal-sign')
const clearBtn = document.querySelector('.all-clear')
const decimal = document.querySelector('.decimal')

let prevNumber = '0'
let calculationOperator = ''
let currentNumber = '0'

const updateScreen = (number) => {
    calculatorScreen.value = number
}

const inputNumber = (number) => {
    if (currentNumber == '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

const inputOperator = (operator) => {
    if (currentNumber == '') {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = ''
}

const calculate = () => {
    let result =''
    switch(calculationOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case '-':
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case '/':
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        case '*':
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case '%':
            result = parseFloat(prevNumber) % parseFloat(currentNumber)
            break
        default:
            break
    }
    currentNumber = result
    calculationOperator = ''
}

const clearNumber = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = "0"
}

const inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}

numbers.forEach((number) => {
    number.addEventListener('click', (event)=> {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

operators.forEach((operator) => {
    operator.addEventListener('click', (event) => {
        inputOperator(event.target.value)
    })
})

equalSign.addEventListener('click', (event) => {
    calculate()
    updateScreen(currentNumber)
})

clearBtn.addEventListener('click', (event) => {
    clearNumber()
    updateScreen (currentNumber)
})

decimal.addEventListener('click', (event) => {
    inputDecimal(e.target.value)
    updateScreen(currentNumber)
})






