$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * Comment the lines out to remove the grid
     */

    for (let i = 100; i < canvas.width; i += 100) {
    //  createPlatform(i, canvas.height, -1, -canvas.height);
    }
    for (let i = 100; i < canvas.height; i += 100) {
    //  createPlatform(canvas.width, i, -canvas.width, -1);
    }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)

createPlatform(600,640,200,20)
createPlatform(300,540,200,20)
createPlatform(900,540,200,20)
createPlatform(690,0,20,500)
createPlatform(500,340,200,20)
createPlatform(390,440,20,20)
createPlatform(640,240,20,20)
createPlatform(740,240,20,20)    
createPlatform(700,340,200,20)
createPlatform(990,440,20,20)
createPlatform(100,190,400,20)
createPlatform(900,190,400,20)
createPlatform(80,0,20,210)
createPlatform(1300,0,20,210)
createPlatform(290,100,20,100)
createPlatform(390,100,20,100)
createPlatform(990,100,20,100)
createPlatform(1090,100,20,100)

    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)

createCollectable('database',380,300)
createCollectable('diamond',130,30)
createCollectable('grace',980,300)
createCollectable('kennedi',1230,30)
createCollectable('max',680,500)
createCollectable('steve',1230,600)

    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)

createCannon("bottom",490,1500,100,100)
createCannon("bottom",790,1500,100,100)
createCannon("left",-10,2000,100,100)
createCannon("right",108,2000,100,100)
createCannon("top",759,750,20,20)

    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
