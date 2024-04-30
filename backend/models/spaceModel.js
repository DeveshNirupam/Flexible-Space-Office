const {model, Schema} = require('../connection');

const mySchema = new Schema({
    title : String,
    area : Number,
    location: String,
    image: String,
    services : String,
    facilities: String,
    price: Number,
    description : String,
});

module.exports = model('flexiblespaces', mySchema);