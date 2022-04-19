const BASEBALLPLAYER = new Image()
BASEBALLPLAYER.src = '../../img/plswork_no_background.png'

const board = document.getElementById('board');
const ctx = board.getContext('2d');

export default class BaseballPlayer {
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 100;
    this.health = 1000;
    this.team = [];
    this.picX = 0;
    this.picY = 0;
    this.minFrame = 0;
    this.maxFrame = 4;
    this.spriteWidth = 52;
    this.spriteHeight= 52;
  }
  drawPlayer() {
    // ctx.fillStyle = 'rgb(89	136	93	)';
    // ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = ('red');
    ctx.font = "12px Courier";

    ctx.drawImage(BASEBALLPLAYER, this.x, this.y, 100, 100)
    ctx.fillText(this.health + " hp", this.x, this.y + 10);
  }  

  updatePlayer() {
    
  }
}

