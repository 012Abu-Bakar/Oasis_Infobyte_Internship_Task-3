let celciusInput = document.querySelector('#celcius > input')
let fahrenheitInput = document.querySelector('#fahrenheit > input')
let kelvinInput = document.querySelector('#kelvin > input')

let btn = document.querySelector('.button button')

function roundNum(num){
    return Math.round(num*100)/100
}

/* celcius to fahrenheit and kelvin */
celciusInput.addEventListener('input', function(){
    let cTemp = parseFloat(celciusInput.value)
    let fTemp = (cTemp*(9/5)) + 32
    let kTemp = cTemp + 273.15

    fahrenheitInput.value = roundNum(fTemp)
    kelvinInput.value = roundNum(kTemp)
})

/* fahrenheit to celcius and kelvin */
fahrenheitInput.addEventListener('input', function(){
    let fTemp = parseFloat(fahrenheitInput.value)
    let cTemp = (fTemp - 32) * (5/9) 
    let kTemp = (fTemp - 32) *(5/9) + 273.15

    celciusInput.value = roundNum(cTemp)
    kelvinInput.value = roundNum(kTemp)
})

/* kelvin to fahrenheit and celcius*/
kelvinInput.addEventListener('input', function(){
    let kTemp = parseFloat(kelvinInput.value)
    let cTemp = kTemp - 273.15
    let fTemp = kTemp = (kTemp - 273.15) *(9/5) + 32

    celciusInput.value = roundNum(cTemp)
    fahrenheitInput.value = roundNum(fTemp)
})

btn.addEventListener('click', ()=>{
    celciusInput.value = ""
    fahrenheitInput.value = ""
    kelvinInput.value = ""
})