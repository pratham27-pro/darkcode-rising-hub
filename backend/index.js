const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const http = require('http');
const cors = require('cors');

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;
const mongoURI = process.env.MONGO_URI;

const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || 'http://localhost:5173';
app.use(cors({ origin: FRONTEND_ORIGIN }));
app.use(express.json());

if (!mongoURI) {
    console.warn('Warning: MONGO_URI not set in .env. Mongo connect will likely fail.');
}

mongoose
    .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('Error connecting to MongoDB:', err));

const User = require('./models/userInfo');

app.post('/api/contact', async (req, res) => {
    console.log('POST /api/contact body:', req.body);
    try {
        const { name, email, message } = req.body;
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const user = new User({ name, email, message });
        await user.save();
        return res.status(201).json({ message: 'Contact saved' });
    } catch (err) {
        console.error('Error saving contact:', err);
        if (err && err.code === 11000) {
            return res.status(409).json({ error: 'Duplicate entry' });
        }
        const resp = { error: 'Server error' };
        if (process.env.NODE_ENV !== 'production' && err && err.message) {
            resp.details = err.message;
        }
        return res.status(500).json(resp);
    }
});

const httpServer = http.createServer(app);
httpServer.listen(port, () => {
    console.log(`Server running on port ${port}`);
});



