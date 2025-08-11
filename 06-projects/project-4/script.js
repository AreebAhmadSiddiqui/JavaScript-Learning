const form = document.querySelector("form")
let guessArr = []
let guessRemSpane = document.querySelector('.lastResult')
let guessRem=guessRemSpane.textContent
let targetNum = (Math.floor(Math.random() * 100 + 1))
console.log(targetNum);
const submitBtn=document.querySelector('#subt')
form.addEventListener('submit', (e) => {
    e.preventDefault()

    console.log(guessRem);
    let result = document.querySelector('.lowOrHi')
    if (guessRem == 0) {
        result.innerHTML = "You dont have enough chances left"
        
        submitBtn.disabled=true
        newGame()
    }
    else {
        const guess = parseInt(document.getElementById('guessField').value)

        if (guess < targetNum) {
            result.innerHTML = 'Low, Try guessing a bigger number'
            guessArr.push(guess)
        } else if (guess > targetNum) {
            result.innerHTML = 'High, Try guessing a smaller number'
            guessArr.push(guess)
        } else {
            result.innerHTML = "Hurrah you guessed the number"
        }

        document.querySelector('.guesses').innerHTML = `[ ${guessArr.toString()} ]`
        guessRem--

        guessRemSpane.innerHTML=`${guessRem}`
    }
})

function newGame(){
    const newGameBtn=document.createElement('button')
    newGameBtn.setAttribute('class','guessSubmit')
    newGameBtn.textContent='Start New Game'
    const div=document.querySelector('.resultParas')
    div.appendChild(newGameBtn)

    newGameBtn.addEventListener('click',()=>{
        guessArr = []
        guessRem = 10
        guessRemSpane.textContent=guessRem
        document.querySelector('.guessField').value=''
        document.querySelector('.guesses').innerHTML=''
        targetNum = (Math.floor(Math.random() * 100 + 1))
        document.querySelector('.lowOrHi').textContent=''
        submitBtn.disabled=false
        div.removeChild(newGameBtn)
    })
}