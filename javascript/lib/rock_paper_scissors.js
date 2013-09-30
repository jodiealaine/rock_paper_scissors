function Player (name) {
  this.name = name;
}

Player.prototype.picks = function (pick) {
	this.pick = pick;
}

function Game(player1, player2) {
	this.player1 = player1;
	this.player2 = player2;
}

Game.prototype.winner = function() {
	if(player1.pick == player2.pick) {
		return null;
	}

	var beats = new Array();
	beats['rock'] = 'scissors';
	beats['paper'] = 'rock';
	beats['scissors'] = 'paper';

	if(player2.pick == beats[player1.pick]) {
		return player1;
	} else {
		return player2;
	}
}