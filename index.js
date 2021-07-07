require('dotenv').config();
require('dotenv').config();
const express = require('express');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('views'));
const router = require('./app/router')
const routerRedirect = require('./app/routerRedirect')
const port = process.env.PORT || 3001;


app.use('/v1/', router)
app.use('/', routerRedirect)

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});