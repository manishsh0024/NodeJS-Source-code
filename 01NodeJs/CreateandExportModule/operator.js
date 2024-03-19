
//Create a add module
const add = (a , b) =>{
    return a + b;
};

// module.exports.add = add;

//create subtract module
const subtract = (a , b) =>{
    return a - b;
};

// module.exports.sub = subtract;


// create string

const String = 'Manish';

// module.exports.string = String;


//---------------OR---------


//Other method of export

module.exports = {add , subtract , String};