const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('ok');
});

app.listen(1337, () => {
    console.log('Server has started!');
});