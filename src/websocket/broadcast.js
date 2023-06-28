const { wss } = require('../app');
const { Price } = require('../db/db');
const {BROADCAST_INTERVAL} = require("../constants/constants");

setInterval(async () => {
    try {
        const latestPrices = await Price.find().sort({ timestamp: -1 }).limit(50);

        wss.emit('latestPrices', latestPrices);
    } catch (error) {
        console.error('Error broadcasting latest prices:', error);
    }
}, BROADCAST_INTERVAL);
