const fs = require('fs');

// Create a file named "welcome.txt" with the content "Hello Node"
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) {
    console.error('An error occurred while creating the file:', err);
    return;
  }

  console.log('File "welcome.txt" has been created successfully!');
});
