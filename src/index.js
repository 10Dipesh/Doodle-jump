let doodlerLeftSpace = 50;
let startPoint = 150;
let doodlerBottomSpace = startPoint;
let upTimeId;
let downTimerId;
let isJumping = true;
let isGoingLeft = false;
let isGoingRignt = false;
let leftTimeId;
let rigntTimeId;
let isGameOver = false;


document.addEventListener("DOMContentLoaded", () => {
  function start() {
  if (!isGameOver) {
    createPlatforms();
    createDoodler();
    setInterval(movePlatforms, 30);
    jump();
    document.addEventListener("keyup", control);
  }
}
//attach to button
start();
});
