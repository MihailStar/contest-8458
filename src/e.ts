import readline from 'readline';

function isAnagram(stringA: string, stringB: string): boolean {
  if (stringA.length !== stringB.length) {
    return false;
  }

  const charToNumberOf: { [char: string]: number } = {};

  for (let index = 0; index < stringA.length; index += 1) {
    const charA = stringA[index];

    charToNumberOf[charA] =
      charA in charToNumberOf ? charToNumberOf[charA] + 1 : 1;
  }

  for (let index = 0; index < stringB.length; index += 1) {
    const charB = stringB[index];

    if (!(charB in charToNumberOf)) {
      return false;
    }

    charToNumberOf[charB] -= 1;
  }

  for (const char in charToNumberOf) {
    if (Object.prototype.hasOwnProperty.call(charToNumberOf, char)) {
      const numberOf = charToNumberOf[char];

      if (numberOf !== 0) {
        return false;
      }
    }
  }

  return true;
}

const rl = readline.createInterface({
  input: process.stdin,
});

const lines: string[] = [];

rl.on('line', (line) => {
  lines.push(line);
}).on('close', () => {
  const [stringA, stringB] = lines;

  process.stdout.write(isAnagram(stringA, stringB) ? '1' : '0');
});
