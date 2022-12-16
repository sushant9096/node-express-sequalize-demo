require('dotenv').config()
const { app } = require("./src/configs");
const express = require('express');
const sequelize = require("./src/models");
const expressApp = express();

sequelize.authenticate().then(() => {
    console.log('DB Connected');
    expressApp.listen(app.PORT, ()=> {
        console.log(`App Listening At: ${app.PORT}`)
    })
}).catch((err) => {
    console.error(`DB not connected due to:\n`, err)
});