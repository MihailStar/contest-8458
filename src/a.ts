import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
});

const lines: string[] = [];

rl.on('line', (line) => {
  lines.push(line);
}).on('close', () => {
  const [jewels, stones] = lines;
  const jewelsMap: Record<string, string> = {};

  for (let index = 0; index < jewels.length; index += 1) {
    const jewel = jewels[index];

    jewelsMap[jewel] = jewel;
  }

  let counter = 0;

  for (let index = 0; index < stones.length; index += 1) {
    const stone = stones[index];

    if (stone in jewelsMap) {
      counter += 1;
    }
  }

  process.stdout.write(String(counter));
});
