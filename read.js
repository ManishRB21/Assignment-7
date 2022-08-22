const fs = require("fs");

fs.readFile(__dirname + "/file.txt", (error, data) => {
    if(error) {
        throw error;
    }
    console.log(data.toString());
});

