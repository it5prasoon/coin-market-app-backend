const { app, server } = require('./src/app');
require('./src/db/db');
require('./src/websocket/websocket');
require('./src/websocket/broadcast');

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
