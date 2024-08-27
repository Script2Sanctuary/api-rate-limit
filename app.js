const express = require('express');
const rateLimit = require('express-rate-limit');

const app = express();

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests, please try again later.',
});

app.use('/api/', limiter);

app.get('/api/', (req, res) => {
    res.status(200).send('API rate limiting ');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
