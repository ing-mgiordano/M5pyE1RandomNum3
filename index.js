function getColdResult(userNum, randomNum){
    if(userNum > randomNum){
        alert('Frío, frío: tu número es más pequeño')
    }
    if(userNum < randomNum){
        alert('Frío, frío: tu número es más grande')
    }
}

function getLukewarmResult(userNum, randomNum){
    if(userNum > randomNum){
        alert('Tibio, tibio: tu número es más pequeño')
    }
    if(userNum < randomNum){
        alert('Tibio, tibio: tu número es más grande')
    }
}

function getHotResult(userNum, randomNum){
    if(userNum > randomNum){
        alert('Caliente, caliente: tu número es más pequeño')
    }
    if(userNum < randomNum){
        alert('Caliente, caliente: tu número es más grande')
    }
}

function getWinResult(randomNum){
    document.getElementById('result').innerHTML = 
    `Enhorabuena, el número era ${randomNum}`
}

function getWrongResult(userNum0){
    alert('Numero incorrecto. Elija un numero del 1 al 500')
}

function guessNumber(){
    const randomNum = parseInt(Math.ceil((Math.random() * 500)+1));
    let userNum = parseInt(document.getElementById('input-number').value)

    while(userNum != randomNum){
        const DIF_50 = 50
        const DIF_15 = 15

        let differentBetweenNum = userNum - randomNum
        let absDiff = Math.abs(differentBetweenNum)

        console.log(userNum, randomNum, absDiff)

        const wrongNum = userNum < 0 || userNum > 500 || isNaN(userNum)
        if (wrongNum){
            getWrongResult(userNum)
        }

        if(absDiff > DIF_50){
            getColdResult(userNum, randomNum)
        }

        if(absDiff >= DIF_15 && absDiff <= DIF_50){
            getLukewarmResult(userNum, randomNum)
        }

        if(absDiff < DIF_15){
            getHotResult(userNum, randomNum)
        }
        userNum = prompt('Elija un numero del 1 al 500')
    }

    const userWin = userNum == randomNum
    if(userWin) {
        getWinResult(randomNum)
    }

}