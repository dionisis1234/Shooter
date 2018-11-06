var game = new Phaser.Game(1100, 800, Phaser.AUTO, 'gameDiv');
    
       game.state.add('lvl1', lvl1);
game.state.start('lvl1');
