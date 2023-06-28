const WebSocket = require('ws');
const { desiredAssetsMap, COIN_CAP_WEB_SOCKET_ADDRESS } = require('../constants/constants');
const { Price } = require('../db/db');

const keysString = Object.keys(desiredAssetsMap).join(',');

const coinCapSocket = new WebSocket(COIN_CAP_WEB_SOCKET_ADDRESS + keysString);

coinCapSocket.on('open', () => {
    console.log('Connected to COINCAP.IO WebSocket');
});

coinCapSocket.onmessage = async (event) => {
    try {
        const data = JSON.parse(event.data);

        for (const asset in data) {
            const priceData = {
                rawName: asset,
                coinName: desiredAssetsMap[asset],
                lastPrice: 0,
                currentPrice: data[asset],
            };

            const existingPrice = await Price.findOne({ rawName: asset });

            if (existingPrice) {
                priceData.lastPrice = existingPrice.currentPrice;
                await Price.updateOne({ rawName: asset }, priceData);
            } else {
                await Price.create(priceData);
            }
        }
    } catch (error) {
        console.error('WebSocket message error:', error);
    }
};

module.exports = { coinCapSocket };
