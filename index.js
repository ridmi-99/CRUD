const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./db.js');
const cors = require('cors');
const routes = require('./routes/routes.js')

const app = express();
app.use(bodyParser.json());
app.use(cors({origin:'http://localhost:4200'}));
app.use('/employees', routes);

app.listen(3000, () => {
    console.log("Server started at port : 3000");
})