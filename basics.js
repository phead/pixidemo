px.configImport({"pxFramework:":"pixi.min.js"});

px.import("px:scene.1.js").then( function ready(scene) {
  var app = new PIXI.Application(800, 600, {backgroundColor : 0x1099bb});
  document.body.appendChild(app.view);

  // create a new Sprite from an image path
  var bunny = PIXI.Sprite.fromImage('required/assets/basics/bunny.png')

  // center the sprite's anchor point
  bunny.anchor.set(0.5);

  // move the sprite to the center of the screen
  bunny.x = app.renderer.width / 2;
  bunny.y = app.renderer.height / 2;

  app.stage.addChild(bunny);

  // Listen for animate update
  app.ticker.add(function(delta) {
      // just for fun, let's rotate mr rabbit a little
      // delta is 1 if running at 100% performance
      // creates frame-independent tranformation
      bunny.rotation += 0.1 / delta;
  });

}

function updateSize(w, h) {
/*
  bg.w = w;
  bg.h = h;
  bgShade.w = w;
  bgShade.h = h;
*/
  txt1.y = h-txt1.h;
}

scene.on("onResize", function(e){updateSize(e.w,e.h);});
updateSize(scene.getWidth(), scene.getHeight());

doIt();

}).catch( function importFailed(err){
  console.error("Import failed for picturepile.js: " + err)
});




