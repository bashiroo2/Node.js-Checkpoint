const fs = require('fs');

// Read data from hello.txt file
fs.readFile('hello.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('An error occurred while reading the file:', err);
    return;
  }

  console.log('Content of hello.txt:', data);
});
