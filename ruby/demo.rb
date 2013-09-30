require_relative './lib/rock_paper_scissors'

player1 = Player.new 'Jodie'
player2 = Player.new 'Nicki'

game = Game.new player1, player2

player1.picks :rock and player2.picks :paper

if winner = game.winner
  puts "The winner is #{winner.name}"
else
  puts 'DRAW!'
end