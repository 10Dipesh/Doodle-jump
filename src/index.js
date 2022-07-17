
document.addEventListener("DOMContentLoaded", () => {
  let isGameOver = false;

  function start() {
    if (!isGameOver) {
      createDoodler();
      createPlatforms();
      setInterval(movePlatforms, 30);
    }
  }
  //attach to button
  start();
});
