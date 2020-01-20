let castle = document.getElementById('castle');
let target = document.getElementById('target');
let lvl = document.getElementById('lvl');
let score = 0;

castle.addEventListener('click',function(){
    score++;
    lvl.innerHTML = score;
});