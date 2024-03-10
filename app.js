const squares=document.querySelectorAll('.square');
const mole=document.querySelector('.mole')
const score=document.querySelector('#score')
const timeLeft=document.querySelector('#time-left')
let timer=null;

let hitposition;
let result=0;
let currenttime=10
function randomPosition(){
    squares.forEach(square=>{
        square.classList.remove('mole')

    })
    let randomeSquares=squares[Math.floor(Math.random()*9)]
    hitposition=randomeSquares.id
    
    randomeSquares.classList.add('mole')

}
function movingmole(){
     timer=setInterval(randomPosition,1000)

}
movingmole();
squares.forEach(square =>{
    square.addEventListener('mouseenter',()=>{
        if(square.id==hitposition){
            console.log('hit')
            result++;
            score.textContent=result

        }
    })

})
function countdown(){
    currenttime--;
    timeLeft.textContent=currenttime;
    if(currenttime==0){
        clearInterval(counterIntervalId)
        clearInterval(timer)
        alert('GAME OVER YOUR RESULT :'+result)
        
        

    }

}
let counterIntervalId=setInterval(countdown,1000)


