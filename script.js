

document.querySelector("#Start").addEventListener('click',function(){
    var player1 = document.getElementById("p0").value;
    var player2 = document.getElementById("p1").value;
    document.querySelector('.entername').style.display = 'none';
    document.querySelector('main').style.filter = 'none';
    document.getElementById("name--0").textContent = player1;
    document.getElementById("name--1").textContent = player2;
})

//Selecting elements.
const player_0 = document.querySelector(".player--0");
const player_1 = document.querySelector(".player--1");
const score0 = document.getElementById("score--0");
const score1 = document.getElementById("score--1");
const dice = document.querySelector(".dice");
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');

let current_score = 0;
let active_player = 0;
let scores = [0,0];
let playing = true;

const switch_player = function(){
        document.getElementById(`current--${active_player}`).textContent = 0;
        active_player = active_player === 0 ? 1 : 0;
        current_score = 0;
        player_0.classList.toggle("player--active");
        player_1.classList.toggle("player--active");
}

dice.classList.add('hidden'); 

    btnRoll.addEventListener('click',function(){
        if(playing){
            const number = Math.trunc(Math.random()*6)+1;
        dice.classList.remove('hidden');
        dice.src = `dice-${number}.png`;
    
        if(number!=1){
            current_score = current_score+number;
            document.getElementById(`current--${active_player}`).textContent = current_score;
        }
        else{
            switch_player();
            dice.classList.add('hidden');
        }
        }
        
    })



    btnHold.addEventListener('click',function(){
        if(playing){
            scores[active_player] += current_score;
        document.getElementById(`score--${active_player}`).textContent=scores[active_player];
        dice.classList.add('hidden');
    
        if(scores[active_player]>=20){
            playing = false;
            document.querySelector(`.player--${active_player}`).classList.add('player--winner');
            document.querySelector(`.player--${active_player}`).classList.remove('player--active');
            document.getElementById(`current--${active_player}`).textContent = "Winner!!🎉✨";
        }
        else{
            switch_player();
        }
        }
    })

  function  reload_button(){
      location.reload();
    }