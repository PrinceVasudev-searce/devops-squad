const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello from Node.js on EKS!'));
app.listen(3000, () => console.log('App listening on port 3000'));
