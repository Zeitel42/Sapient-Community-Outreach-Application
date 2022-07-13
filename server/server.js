
// Require local modules
const path = require('path');
const express = require('express');

// Create express server app
const app = express();

// Access .env variables
const PORT = process.env.PORT || 3000;

// Use app middleware
app.use(express.json());

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});

// 
app.listen(PORT, () => { console.log('running server on port: ' + PORT) });
