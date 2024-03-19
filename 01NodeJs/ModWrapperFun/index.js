// (function(exports , require , module, __filename , __dirname){ //Already added
//     const fs = require("fs")
//     const name = "Manish";
//     console.log(name)
//     module.exports = name;
// });


(function(){
    const fs = require("fs")
    const name = "Manish";
    console.log(name)
})();


//error because data is private due to IIFE
// (function(){
//     const name = "Manish";
// })();
// console.log(name)


console.log(__dirname)
console.log(__filename)