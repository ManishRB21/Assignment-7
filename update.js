const fs = require("fs");

fs.writeFile('file1.txt', 'only for testing', function (err) {
    if (err) throw err;
    console.log('Update file');
  });

  fs.readFile(__dirname + "/file1.txt", (error, data) => {
    if(error) {
        throw error;
    }
    console.log(data.toString());
});
