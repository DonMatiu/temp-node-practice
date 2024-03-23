console.clear();

const fs = require('fs');

console.log('Initilization...');
async function writeBigText(path, inputText) {
  try {
    await fs.promises.writeFile(path, ``);
    for (let i = 0; i < 100000; i++) {
      console.log(`writing line ${i + 1}`);
      await fs.promises.writeFile(path, `${inputText} ${i + 1}\n`, {
        flag: 'a',
      });
    }
  } catch (error) {
    error;
  }
}

writeBigText('./content/bigText.txt', 'This is line number: ');
