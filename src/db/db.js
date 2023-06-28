const mongoose = require('mongoose');
const {DB_NAME} = require("../constants/constants");

mongoose
    .connect('mongodb://localhost/' + DB_NAME, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('MongoDB connection error:', error);
    });

const priceSchema = new mongoose.Schema({
    rawName: String,
    coinName: String,
    lastPrice: Number,
    currentPrice: Number,
    timestamp: { type: Date, default: Date.now },
});

const Price = mongoose.model('Price', priceSchema);

module.exports = { Price };
