const fs = require('fs');

function readTextFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

async function getTextContent(path) {
  try {
    const data = await readTextFile(path);
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

function mergeFile(data1, data2) {
  return new Promise((resolve, reject) => {
    fs.writeFile(
      './content/mergedFile.txt',
      `Merged Content: ${data1} ||| ${data2}`,
      (err, data) => {
        if (err) {
          reject(err);
        } else resolve(data);
      }
    );
  });
}

async function saveFile(data1, data2) {
  try {
    await mergeFile(data1, data2);
  } catch (error) {
    console.log(error);
  }
}

async function callFunctions() {
  try {
    saveFile(
      await getTextContent('./content/first.txt'),
      await getTextContent('./content/second.txt')
    );
  } catch (error) {
    console.log('callFunctions:', error);
  }
}
callFunctions();
