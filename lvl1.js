var lvl1 = {};

lvl1.Main = function(game) {
  
  
};


lvl1.Main.prototype = {
  preload: function(){
    game.load.baseURL = 'https://diotest.github.io/Shooter/';
			game.load.crossOrigin = 'anonymous';
			
			game.load.image('starfield', 'assets/starfield.png');
			game.load.image('ship', 'assets/ship.png');
			game.load.image('bullet', 'assets/bullets/bullet.png');

  },
  create: function(){
    game.scale.pageAlignHorizontally = true;
			
			//  The scrolling starfield background
			starfield = game.add.tileSprite(0, 0, 800, 600, 'starfield');
			//  Our bullet group
			bullets = game.add.group();
			bullets.enableBody = true;
			bullets.physicsBodyType = Phaser.Physics.ARCADE;
			bullets.createMultiple(30, 'bullet');
			bullets.setAll('anchor.x', 0.5);
			bullets.setAll('anchor.y', 1);
			bullets.setAll('outOfBoundsKill', true);
			bullets.setAll('checkWorldBounds', true);
			//  The hero!
			player = game.add.sprite(100, game.height / 2, 'ship');
			player.anchor.setTo(0.5, 0.5);
			game.physics.enable(player, Phaser.Physics.ARCADE);
			player.body.maxVelocity.setTo(MAXSPEED, MAXSPEED);
			player.body.drag.setTo(DRAG, DRAG);
			//  And some controls to play the game with
			cursors = game.input.keyboard.createCursorKeys();
			fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
			//  Add an emitter for the ship's trail
			shipTrail = game.add.emitter(player.x - 20, player.y, 400);
			shipTrail.height = 10;
			shipTrail.makeParticles('bullet');
			shipTrail.setYSpeed(20, -20);
			shipTrail.setXSpeed(-140, -120);
			shipTrail.setRotation(50, -50);
			shipTrail.setAlpha(1, 0.01, 800);
			shipTrail.setScale(0.05, 0.4, 0.05, 0.4, 2000,
					Phaser.Easing.Quintic.Out);
			shipTrail.start(false, 5000, 10);
    
  }
  
};
