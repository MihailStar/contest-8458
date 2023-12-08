import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
});

let index: number;
let prevDigit: string | undefined;

rl.once('line', (length) => {
  index = Number(length);

  rl.on('line', (digit) => {
    if (index < 1) {
      rl.close();
      return;
    }

    if (digit === prevDigit) {
      return;
    }

    index -= 1;
    prevDigit = digit;

    process.stdout.write(`${digit}\n`);
  });
});
