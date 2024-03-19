const fs = require('fs');

//fs.writeFileSync('read.txt' , " Babu Bhai kya haal hai"); //Create a file and putup data in it

//fs.writeFileSync('read.txt','Babu ka Haal Bdiya hai'); // overwrite data in read.txt

// Add another data in read.txt
// fs.appendFileSync('read.txt','Babu Bhai Ram Ram');


//Read data from read.txt file
// const readData = fs.readFileSync('read.txt');
// const readString = readData.toString();
// console.log(readString);


//Read data from read.txt file without getting buffer data
// const readData = fs.readFileSync('readwrite.txt',"utf-8");
// console.log(readData);


//Rename read.txt file
// fs.renameSync('read.txt','readwrite.txt');

//Remove readwrite.txt file
// fs.unlinkSync('readwrite.txt')