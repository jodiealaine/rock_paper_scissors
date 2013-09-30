function Player () {

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

	var pairs = {
		
		'rock': {
			'scissors': 'blunts',
			'lizard'  : 'crushes'
		},
		
		'paper': {
			'rock' : 'covers',
			'spock': 'disproves'
		},
		
		'scissors': {
			'paper' : 'cuts',
			'lizard': 'decapitates'
		},
		
		'spock': {
			'rock'    : 'vaporises',
			'scissors': 'melts'
		},
		
		'lizard': {
			'paper': 'eats',
			'spock': 'poisons'
			
		}
	}

	if(Object.keys(pairs[player1.pick]).indexOf(player2.pick) >= 0) {
		message = player1.pick + ' ' + pairs[player1.pick][player2.pick] + ' ' + player2.pick;
		return [player1, message];
	} 
	else {
		message = player2.pick + ' ' + pairs[player2.pick][player1.pick] + ' ' + player1.pick;
		return [player2, message];
	}
}