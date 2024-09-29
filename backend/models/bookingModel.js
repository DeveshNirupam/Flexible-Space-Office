const { model, Schema, Types } = require('../connection');

const mySchema = new Schema({
    user: { type: Types.ObjectId, ref: 'user' },
    space: { type: Types.ObjectId, ref: 'flexiblespaces' },
    bookingDate: { type: Date },
    paymentDetails: { type: Object },
    intentId: { type: String, unique: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = model('bookingspaces', mySchema);
