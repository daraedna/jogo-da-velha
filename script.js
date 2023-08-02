const player1 = 'X';
const player2 = 'O';

let playTime = player1;
let gameOver = false;

updateInfo();
move();

function updateInfo(){
    if (gameOver){
        return;
    }
    if(playTime == player1){
        let player = document.querySelector('.info img')
        player.setAttribute('src', 'images/x.png');
    }else {
        let player = document.querySelector('.info img')
        player.setAttribute('src', 'images/o.png')
    }
}

async function checkWinner(){
    let square11 = document.getElementById('1-1').getAttribute('move');
    let square12 = document.getElementById('1-2').getAttribute('move');
    let square13 = document.getElementById('1-3').getAttribute('move');

    let square21 = document.getElementById('2-1').getAttribute('move');
    let square22 = document.getElementById('2-2').getAttribute('move');
    let square23 = document.getElementById('2-3').getAttribute('move');

    let square31 = document.getElementById('3-1').getAttribute('move');
    let square32 = document.getElementById('3-2').getAttribute('move');
    let square33 = document.getElementById('3-3').getAttribute('move');

    let winner = '';

    if((
        (square11 == square21 && square11 == square31)
            || (square11 == square12 && square11 == square13)
            || (square11 == square22 && square11 == square33)
        ) && square11 !=''){
             winner = square11
    }
    else if ((
        (square22 == square21 && square22 == square23)
            ||(square22 == square12 && square22 == square32 )
            ||(square22 == square13 && square22 == square31)
        ) && square22 !=''){
        winner = square22;
    }
    else if ((
        (square33 == square32 && square33 == square31)
            ||(square33 == square13 && square33 == square23)
        ) && square33 !=''){
            winner = square33;
    }

    if(winner != ''){
        gameOver = true;

        await sleep(50);
        alert('O ganhador foi o: "' + winner + '"')
    }

}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}

function restart(){
    gtag('set', 'user_properties', {   favorite_composer: 'Mahler',   favorite_instrument: 'contrabaixo',   season_ticketholder: 'true' });
    location.reload()
}

function move(){
    let square = document.getElementsByClassName('square');
    for (let i = 0; i < square.length; i++) {
        square[i].addEventListener('click', function(){
            if(gameOver){
                return;
            }
            if (this.getElementsByTagName('img').length == 0){
                if (playTime == player1){
                    this.innerHTML = '<img src="images/x.png">'
                    this.setAttribute('move', player1);
                    playTime = player2;
                }else {
                    this.innerHTML = '<img src="images/o.png">'
                    this.setAttribute('move', player2);
                    playTime = player1;
                }
            }else {
                alert('Empatou!')
            }
            updateInfo();
            checkWinner();
        });
    }
}

