"use strict"

function renderChessboars(size) {
    let HTML = '';
    const DOMchessboard = document.querySelector('.chessboard');

    console.log(DOMchestboard);
    

    HTML = `norima sugeneruoti ${size}x${size} dydzio lenta`;
    HTML= 
    <div class="row">
            <div class="cell black"></div>
            <div class="cell white"></div>
            <div class="cell black"></div>
            <div class="cell white"></div>
    </div>
    DOMchessboard.innerHTML'ragg'

    return;
}

renderChessboars( 8 );