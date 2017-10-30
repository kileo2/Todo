var Mongoose = require('mongoose');//Require will load the code from the module mongoose. Assigning a variable.
var Schema = Mongoose.Schema;//

var examschema = new Schema({//creating a new schema
    firstName: { type: String},//column with firstnames
    ident: {type:Number}//column with identity with Number as data type
});//describing what fields are in the schema

module.exports = 
Mongoose.model('Exam', examschema)//creates and exports the model. creates the model from the schema which provides the interface