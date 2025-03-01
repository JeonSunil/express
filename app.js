const express = require('express');
const app = express();
const port = 8000;

app.use(express.static('public'));
app.use('/data', express.static('data'));

app.listen(port, function() {
console.log( `http://localhost:${port}/ is Open..`)
});