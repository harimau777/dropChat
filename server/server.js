const express = require('express');
const app = new express();
const compression = require('compression');

app.use(compression());

app.listen(8080, () => console.log('Server started on port 8080.'));
