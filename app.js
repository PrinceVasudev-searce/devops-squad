const express = require('express');
const app = express();
const port = process.env.PORT || 31746;

app.get('/', (req, res) => {
    res.send('Hello from Node.js running on EKS!');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
