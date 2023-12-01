var closeBtn = document.getElementById('close');
var rulesCard = document.getElementById('rules-card')


var openRules = document.getElementById('open-rules');


var img_section = document.querySelector('.img-section')

var result_section = document.querySelector('.result-section')


var stone1 = document.querySelector('.stone-1')
var stone2 = document.querySelector('.stone-2')

var paper1 = document.querySelector('.paper-1')
var paper2 = document.querySelector('.paper-2')

var scissor1 = document.querySelector('.scissor-1')
var scissor2 = document.querySelector('.scissor-2')
var c_win = document.querySelectorAll('.selection1')
var p_win = document.querySelectorAll('.selection')
var resultBanner = document.querySelector('.result-banner')
var uWin = document.getElementById('u-win')
var ulost = document.getElementById('u-lost')
var uTie = document.getElementById('u-tie')

var nextbtn = document.getElementById('next-btn')
var pc_score = document.getElementById('pc_score')
var p_score = document.getElementById('p_score')

if (!localStorage.getItem('computer')) {
    localStorage.setItem('computer', '0');
  }
  if (!localStorage.getItem('player')) {
    localStorage.setItem('player', '0');
  }
// pc_score.innerText = 0

// p_score.innerText = 0
// console.log(pc_score);
function close_rules(){
    rulesCard.style.display = "none"
}
function open_rules(){
    rulesCard.style.display = "block"
} 


openRules.addEventListener('click', open_rules);
closeBtn.addEventListener('click', close_rules );
// console.log(localStorage.getItem('player'))






function updateC_score(){
// let num = pc_score.innerText
let num = localStorage.getItem('computer')
console.log(num++)
 localStorage.setItem('computer',num)
 pc_score.innerText = localStorage.getItem('computer')
}
function updateP_score(){
let num = p_score.innerText
num++
    localStorage.setItem('player',num)

    p_score.innerText = localStorage.getItem('player')
}


var container = document.querySelector('.img-wrapper');
var userSelect
var computerChoice
var winner

function getcomputerChoice(){
     const num = Math.floor(Math.random() * 3) + 1;
    //  console.log(num)
     if(num ==1){
        return 'stone'
     }else if(num == 2){
        return 'paper'
     }else{
        return 'scissor'
     }
     
}

function campareChoice( p , c){
    // console.log(c)
   if(p === c){
    return "draw";
   } else if(p === 'stone'){
    if(c=== 'paper'){
        return 'computer'
    }else {
        return 'player'
    }
   }else if(p==='paper'){
    if(c==='scissor'){
        return 'computer'
    }else{
        return 'player'
    }
   }else if(p==='scissor'){
    if(c==='stone'){
        return 'computer'
    }else{
        return 'player'
    }
   }
}

container.addEventListener('click', function(event) {

    var clickedElement = event.target;

    
    result_section.style.display = 'flex'
    img_section.style.display = 'none'


    if (clickedElement.id === 'stone') {
        console.log('stone clicked!');
        userSelect = 'stone'
        stone1.style.display = 'flex'
         computerChoice = getcomputerChoice()
        console.log(computerChoice)
        winner= campareChoice(userSelect,computerChoice)
        } 
        
        
        
        
        else if (clickedElement.id === 'paper') {
        // alert('paper clicked!');
        userSelect = 'paper'
        paper1.style.display = 'flex'
         computerChoice = getcomputerChoice()
        console.log(computerChoice)
        winner = campareChoice(userSelect,computerChoice)
    } 
    
    
    
    
    else if (clickedElement.id === 'scissor') {
        // alert('scissor clicked!');
        userSelect = 'scissor'
        scissor1.style.display = 'flex'
        computerChoice = getcomputerChoice()
        console.log(computerChoice)
        winner = campareChoice(userSelect,computerChoice)




    }else if(clickedElement.id === ''){
        result_section.style.display='none'
        img_section.style.display='block'
    }

    
    if(computerChoice == 'stone'){
        stone2.style.display='flex'
    }
    else if(computerChoice == 'paper'){
        paper2.style.display='flex'
    }else if(computerChoice=='scissor'){
        scissor2.style.display='flex'
    }
    console.log(winner)
    if(winner == 'computer'){
        c_win.forEach(function(element) {
            element.classList.add('winner');
          });
          ulost.style.display='inline-block'
          updateC_score()
    }else if(winner == 'player'){
        p_win.forEach(function(element) {
            element.classList.add('winner');
          });
          uWin.style.display='inline-block'
          nextbtn.style.display='block'
          updateP_score()
    }else if(winner == 'draw'){
        uTie.style.display = 'inline-block'
    }
    console.log(typeof clickedElement.id)
});

pc_score.innerText = localStorage.getItem('computer')
p_score.innerText = localStorage.getItem('player')