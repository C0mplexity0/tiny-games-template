// Tiny Games app API script (don't delete this!)
import tinyGames from "/tiny-games/scripts/games/tiny-games.app.mjs";

function init() {
  // ...
  
}

if (!tinyGames.gameReady()) {
  window.addEventListener("gameReady", init);
} else {
  init();
}
