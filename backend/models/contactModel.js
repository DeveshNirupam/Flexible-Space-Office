const {model, Schema} = require('../connection');

const mySchema = new Schema({
    FirstName : {type : String, require: true},
    LastName : String,
    email : {type : String, require: true},
    PhoneNumber : Number,
    Details : String
    
});

module.exports = model('contactscollection', mySchema);