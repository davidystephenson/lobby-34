class Lobby {
  welcome () {
    const message = `${this.message}, welcome to ${this.game}!`

    console.log(message)
  }

  makeNewGame (name) {
    const game = new Game(name)

    console.log('game test:', game)

    this.games.push(game)

    console.log('this.games test:', this.games)
  }

  constructor (game) {
    this.message = 'hello'
    this.game = game

    this.games = []
  }
}

class Game {
  constructor (name) {
    this.name = name
    this.players = []
  }

  start () {
    // this.players.length === 0
    console.log('this.players.length test:', this.players.length)
    if (this.players.length) {
      this.phase = 'started'
    } else {
      console.log('No players')
      this.phase = 'failed'
    }
  }

  join (player) {
    this.players.push(player)
  }
}

class BotGame extends Game {
  constructor (name) {
    super(name)

    this.name = `${this.name} - AI ONLY`
    this.players.push('ai')
  }

  join () {
    console.log('only for bots!')
  }
}

const game = new Game('normal')
console.log('game test:', game)

game.start()
game.join('david')

console.log('game after test:', game)

const botGame = new BotGame('just for bots')
console.log('\nbotGame test:', botGame)

botGame.start()
botGame.join('david')

console.log('botGame after test:', botGame)

const lobby = new Lobby('curvefever')
console.log('lobby test:', lobby)
