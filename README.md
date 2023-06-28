# Coin Market App

## Steps to run

1. Start the mongoDB service on your local machine. [Link](https://www.mongodb.com/docs/manual/tutorial/manage-mongodb-processes/#:~:text=You%20can%20start%20MongoDB%20from,Edition%20as%20a%20Windows%20Service.)
2. Run ```npm install``` and ```npm run start``` from the root of backend project to install the deps and start the backend on port 8000 (default).
3. Clone the frontend from here: https://github.com/it5prasoon/coin-market-app-frontend
4. Run ```npm install``` and ```npm run start``` from the root of frontend project to install the deps and start the frontend on port 3000 (default).
5. Get the output on: http://localhost:3000

## Dependencies used

```json
    "cors": "^2.8.5",
    "express": "^4.18.2",
    "mongoose": "^7.3.1",
    "socket.io": "^4.7.0",
    "ws": "^8.13.0"
```
