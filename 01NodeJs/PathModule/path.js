const path = require("path");

//dirname

console.log(path.dirname('C:/Users/somec/OneDrive/Desktop/nodePractice/PathModule/path.js'));


//Extention Name
console.log(path.extname('C:/Users/somec/OneDrive/Desktop/nodePractice/PathModule/path.js'));
console.log(path.extname('"C:/Users/somec/OneDrive/Pictures/profile.jpeg"'));


//Basename
console.log(path.basename('C:/Users/somec/OneDrive/Desktop/nodePractice/PathModule/path.js'));


//All are in one
console.log(path.parse('C:/Users/somec/OneDrive/Desktop/nodePractice/PathModule/path.js'));

const mypath = path.parse('C:/Users/somec/OneDrive/Desktop/nodePractice/PathModule/path.js');

console.log(mypath.root);
console.log(mypath.name);
console.log(mypath.base);
console.log(mypath.ext);
console.log(mypath.dir);