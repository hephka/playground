// var readlineSync = require('readline-sync');
import readlineSync from 'readline-sync'
import chalk from 'chalk'

while(true) {
    let nb_str = readlineSync.question('un nb svp: ')
    let nb = Number(nb_str)
    if(nb<=10) {
        continue
    }
    if(nb>10) {
        console.log(chalk.green('bravo'))
        break
    }
}
console.log('fin du program');

/* let name = readlineSync.question('username: ')
let password = readlineSync.question('password: ', { hideEchoBack: true })
console.log(`Hello ${name} your password is: ${password}`) */

/*  if (readlineSync.keyInYNStrict(chalk.blue('continue? '))) {
    // 'Y' key was pressed.
    console.log(chalk.green('continue...'))
    // continuer le programme
  } else {
    // 'N' key was pressded.
    console.log(chalk.red('goodbye!'))
    process.exit(0)
  }  */

/* let choix = ['start', 'continue', 'options', 'exit']
let index = readlineSync.keyInSelect(choix, 'Please select your choice: ')
switch (index) {
  case 0:
    console.log('starting the game')
    break
  case 1:
    console.log('continue the game')
    break
  case 2:
    console.log('access to game options')
    break
   case 3:
    console.log('closing the game')
    break 
  default:
    console.log('bad choice')
} */

/* readlineSync.promptCLLoop({
    cp: (source, destination) => {
      console.log(`copytin ${source} to ${destination}`)
      // Do something...
    },
    remove: function (target) {
      console.log(`remove ${target}`)
      // Do something...
    },
    help: () => {
      console.log('command list: cp, remove, help, quit')
    },
    quit: () => {
      return true
    },
  })
  console.log('Exited') */