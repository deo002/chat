const WebSocket = require('ws');
const { processMessage } = require('./utilities');

module.exports.setupWebSocketServer = () => {
    const wss = new WebSocket.Server({
        port: 1338,
    });

    wss.on('connection', function connection(ws) {
        ws.on('message', function incoming(payload) {
            const message = processMessage(payload.toString());

            if (!message) {
                return
            }

            ws.send(JSON.stringify(message));

        });

        ws.send('something');
    });
}