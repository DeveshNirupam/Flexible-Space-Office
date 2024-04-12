const {model, Schema} = require('../connection');

const mySchema = new Schema({
    title : String,
    area : Number,
    address: String,
    services : String,
    facilities: String,
    accessibility: String,
    price: Number,
});

module.exports = model('flexiblespaces', mySchema);