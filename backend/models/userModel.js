const {model, Schema} = require('../connection');

const mySchema = new Schema({
    name : {type : String, require: true},
    email : {type : String, require: true, unique: true},
    password: String,
    avatar: {type : String, default: 'images.png'},
    role: {type : String, default: 'user'},
    createdAt: {type : Date, default: Date.now}
});

module.exports = model('user', mySchema);