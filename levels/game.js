var game = new Phaser.Game(1100, 800, Phaser.AUTO, 'gameDiv');
    
       game.state.add('lvl1', vl1);
game.state.start('vl1');
