let board = document.getElementById('board');
let colors = document.getElementById('colors');
let gameOver = document.getElementById('game-over');
let move = document.querySelector('.moves')
let total = document.querySelector('.total');
let box=263;
let count =0;
let color;
let cap = 40;



// declaration of the color 
// let colorArray = ['red','green','blue','teal','aqua','yellow'];
let colorArray=[
    '#573659',
    '#ad4375',
   ' #fa7370',
    '#f59231',
    '#fecd5f',
    '#9ccf5e',
    '#3cad5b',
   ' #36cbbf',
    '#1d839c',
   ' #2f506c']

// to caluclate the moves count 
board.addEventListener("click",function () {
   count++;
   move.textContent=count;
})


for (let i=0; i<box;i++){
    const tiles = document.createElement('div');
    tiles.classList.add('boxes');
    board.appendChild(tiles);
    let randomNumber = Math.floor(Math.random()*colorArray.length);
    let clr = colorArray[randomNumber];
    tiles.style.background=clr;
  
    
   
}



















































// var newGame = function() {
//     var options = setColors(colorArray.slice(), skill)
//     console.log(options)
//     moves = 0
//     tally.innerText = moves
//     total.innerText = cap
//     gameover.innerHTML = ''
//     running = true
//     builder(colors, 'chip', options)
//     builder(board, 'tile', options, 100, true)
//     color = board.childNodes[0].className
//     board.className = ''
//     board.childNodes[0].className = color + cell
//     checkColor(color)
//   }



