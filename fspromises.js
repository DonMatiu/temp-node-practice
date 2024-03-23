const fs = require('fs');

async function mergeTexts(mergePath) {
  try {
    const data1 = await fs.promises.readFile('./content/first.txt', 'utf8');
    console.log(data1);
    const data2 = await fs.promises.readFile('./content/second.txt', 'utf8');
    console.log(data2);
    await fs.promises.writeFile(mergePath, `Combined Powers: ${data1} : ${data2}`);
    const mergedData = await fs.promises.readFile(mergePath, 'utf8');
    console.log(mergedData);
  } catch (error) {
    console.error(error);
  }
}

mergeTexts('./content/COMBOTRON3000.txt');
