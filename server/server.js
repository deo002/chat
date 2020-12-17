if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user');
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;

const app = express();

mongoose.connect('mongodb://localhost:27017/live', {
    useNewUrlParser: true, useUnifiedTopology: true,
    useCreateIndex: true, useFindAndModify: false
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log('Database Connected!');
});

if (process.env.NODE_ENV !== 'production') {
    app.use(cors());
}

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('ok');
});

app.post('/api/register', async (req, res) => {

    const { email, password } = req.body;

    try {
        const user = new User({ email, password });
        await user.save();
    }
    catch (e) {
        console.log('Error', e);
    }

});

app.post('/api/login', async (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        console.log('Error, email or password not found.');
    }

    try {
        const user = await User.findOne({ email, password });
        if (!user) {
            res.json({ status: 'error', error: 'User Not Found!' });
        }

        const token = jwt.sign({ email }, secret);

        res.json({ status: 'ok', data: token });
    }
    catch (e) {
        console.log('Error', e);
    }

});

app.listen(1337, () => {
    console.log('Server has started!');
});