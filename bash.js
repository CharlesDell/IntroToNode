const { pwd } = require('./pwd.js');
const { ls } = require('./ls.js');
const cat = require('./cat');
const curl = require('./curl');

// Output a prompt
process.stdout.write('prompt > ');

//The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim().split(' '); // remove the newLine
  switch (cmd[0]) {
    case 'pwd':
      pwd(done);
      break;
    case 'ls':
      ls(done);
      break;
    case 'cat':
      cat(done, cmd[1]);
      break;
    case 'curl':
      curl(done, cmd[1]);
      break;
    default:
      process.stdout.write('Not valid command');
      process.stdout.write('\nprompt > ');
  }
});

const done = (output) => {
  process.stdout.write(output + '\n');
  process.stdout.write('prompt > ');
};
