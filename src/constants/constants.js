const desiredAssetsMap = {
    'bitcoin': 'Bitcoin',
    'ethereum': 'Ethereum',
    'tether': 'Tether',
    'binance-coin': 'BNB',
    'xrp': 'XRP',
    'cardano': 'Cardano',
    'dogecoin': 'Dogecoin',
    'solana': 'Solana',
    'terracoin': 'Terracoin',
    'gala': 'Gala'
};

const COIN_CAP_WEB_SOCKET_ADDRESS = 'wss://ws.coincap.io/prices?assets=';
const DB_NAME = 'coin-market-app-db';
const BROADCAST_INTERVAL = 5000;

module.exports = {
    desiredAssetsMap,
    COIN_CAP_WEB_SOCKET_ADDRESS,
    DB_NAME,
    BROADCAST_INTERVAL
}