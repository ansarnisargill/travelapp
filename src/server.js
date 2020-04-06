import sirv from 'sirv';
import compression from 'compression';
import * as sapper from '@sapper/server';
const dev = 'development';
const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const app = express();
const port = process.env.PORT || 3000;
const routes = require('./customRoutes');
const dbserv=require('./db/config');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
app.use(routes);
app.use(compression({ threshold: 0 }));
app.use(sirv('static', { dev }));
app.use(sapper.middleware());
dbserv.configureDatabase();
app.listen(port, () => {
    console.log(`Server started on port ${port} :)`);
});