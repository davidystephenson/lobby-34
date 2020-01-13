class Lobby {
  welcome () {
    const message = `${this.message}, welcome to ${this.game}!`

    console.log(message)
  }

  constructor (game) {
    console.log('game argument test:', game)

    this.message = 'hello'
    this.game = game

    console.log('this.game test:', game)
    console.log('lobby constructor test')
  }
}

console.log('start')

console.log('\nLobby 1:')
const lobby = new Lobby('curvefever')
console.log('lobby test:', lobby)

lobby.welcome()

console.log('lobby 1 game:', lobby.game)

console.log('\nLobby 2:')
const lobby2 = new Lobby()
console.log('lobby2 test:', lobby2)

lobby2.welcome()
