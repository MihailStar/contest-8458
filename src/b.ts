import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
});

const lines: string[] = [];

rl.on('line', (line) => {
  lines.push(line);
}).on('close', () => {
  const [length, ...binarys] = lines;
  const binarysLength = Number(length);

  let maxSequenceOfOnes = 0;
  let currSequenceOfOnes = 0;

  for (let index = 0; index < binarysLength; index += 1) {
    const binary = Number(binarys[index]);

    if (binary === 0) {
      maxSequenceOfOnes = Math.max(maxSequenceOfOnes, currSequenceOfOnes);
      currSequenceOfOnes = 0;

      continue;
    }

    currSequenceOfOnes += 1;
  }

  maxSequenceOfOnes = Math.max(maxSequenceOfOnes, currSequenceOfOnes);

  process.stdout.write(String(maxSequenceOfOnes));
});
