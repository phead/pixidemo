px.configImport({"pxFramework:":"pixi.min.js"});

px.import({ scene: 'px:scene.1.js',
            pixi: 'pxFramework:pixi.js' }).then( function ready(scene) {
  var app = new PIXI.Application(800, 600, {backgroundColor : 0x1099bb});

  // create a new Sprite from an image path
  var bunny = PIXI.Sprite.fromImage('https://www.google.co.jp/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png')

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

doIt();

}).catch( function importFailed(err){
  console.error("Import failed for picturepile.js: " + err)
});




