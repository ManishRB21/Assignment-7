const fs = require("fs");

fs.appendFile('file1.txt', 'Manish Behera', function (err) {
    if (err) throw err;
    console.log('Write to file');
  });

  fs.readFile(__dirname + "/file1.txt", (error, data) => {
    if(error) {
        throw error;
    }
    console.log(data.toString());
});
