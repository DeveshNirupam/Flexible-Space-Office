const {model, Schema} = require('../connection');

const mySchema = new Schema({
    booking_id : {type:Number, require: true},
    user_id : {type: String, require: true},
    property_id : Number,
    check_in_date : Date,
    Check_out_date : Date,
    total_price : Number,
    booking_status : String,
});

module.exports = model('bookingspaces', mySchema);
