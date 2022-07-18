const grid = document.querySelector(".grid");
const doodler = document.createElement("div");

function createDoodler() {
  grid.appendChild(doodler);
  doodler.classList.add("doodler");
  doodlerLeftSpace = platforms[0].left;
  doodler.style.left = doodlerLeftSpace + "px";
  doodler.style.bottom = doodlerBottomSpace + "px";
}

function jump() {
  clearInterval(downTimerId);
  isJumping = true;
  upTimeId = setInterval(function () {
    doodlerBottomSpace += 20;
    doodler.style.bottom = doodlerBottomSpace + "px";
    if (doodlerBottomSpace > startPoint + 200) {
      fall();
    }
  }, 30);
}
function fall() {
  clearInterval(upTimeId);
  isJumping = false;
  downTimerId = setInterval(function () {
    doodlerBottomSpace -= 5;
    doodler.style.bottom = doodlerBottomSpace + "px";
    if (doodlerBottomSpace <= 0) {
    }
    platforms.forEach((platform) => {
      if (
        doodlerBottomSpace >= platform.bottom &&
        doodlerBottomSpace <= platform.bottom + 15 &&
        doodlerLeftSpace + 60 >= platform.left &&
        doodlerLeftSpace <= platform.left + 85 &&
        !isJumping
      ) {
        console.log("landed");
        startPoint = doodlerBottomSpace;
        jump();
      }
    });
  }, 30);
}

function gameOver() {
  console.log("game over");
  isGameOver = true;
  clearInterval(upTimeId);
  clearInterval(downTimerId);
}

function control(e) {
  if (e.key === "ArrowLeft") {
    moveLeft();
  } else if (e.key === "ArrowRight") {
    moveRight();
  } else if (e.key === "ArrowUp") {
    // moveStright
  }
}
function moveLeft() {
  if (isGoingRight) {
    clearInterval(rightTimerId);
    isGoingRight = false;
  }
  isGoingLeft = true;
  leftTimerId = setInterval(function () {
    if ((doodlerLeftSpace) => 0) {
      doodlerLeftSpace -= 5;
      doodler.style.left = doodlerLeftSpace + "px";
    } else moveRight();
  }, 30);
}

function moveRight() {
  if (isGoingLeft) {
    clearInterval(leftTimerId);
    isGoingLeft = false;
  }
  isGoingRight = true;
  rightTimerId = setInterval(function () {
    if (doodlerLeftSpace <= 340) {
      doodlerLeftSpace += 5;
      doodler.style.left = doodlerLeftSpace + "px";
    } else moveLeft();
  }, 30);
}
function moveStright() {
  isGoingRight = false;
  isGoingLeft = false;
  clearInterval(rigntTimerId);
  clearInterval(leftTimerId);
}
