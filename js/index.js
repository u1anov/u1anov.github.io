let castle = document.getElementById('castle');
let target = document.getElementById('target');
let level = document.getElementById('level');
let golda = document.getElementById('golda');
let update = document.getElementById('update');
let lvl = 0;
let gold = 0;
let click = makeCounter();

castle.addEventListener('click',function(){
    let cl = click();
    console.log(cl)
    if(lvl == 9 && cl == 10){
        gold += 200;
        golda.innerHTML = gold;
    }
    if(cl > lvl){
        lvl++;
        level.innerHTML = lvl;
        click.reset();
    };
    console.log(cl)
});
update.addEventListener('click', function(){
    if(gold == 200){
        castle.style.display = 'none';
        castleUP.style.display = 'block';
        gold += -200;
        golda.innerHTML = gold;
    }
});
function makeCounter() {
    var currentCount = 0;
    function counter() {
      return ++currentCount;
    }
    counter.set = function(value) {
      currentCount = value;
    };
    counter.reset = function() {
      currentCount = 0;
    };
    return counter;
  }



















