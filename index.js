const express = require('express')
const cors = require('cors')
const db = require('mongoose')
require('dotenv').config();
const authRouter = require('./Routes/auth')
const homeRouter = require('./Routes/home')
const postSaleeRouter = require('./Routes/saleePost')

//database connection string
// localhost database 'mongodb://localhost:/myproject'
const password = process.env.MongoDB_Password;
const connectString = `mongodb+srv://Jethro:${password}@salee-ppqqx.mongodb.net/Salee?retryWrites=true&w=majority`

const app = express();  //creating the app

//connection to database
db.connect(connectString, { useNewUrlParser: true }, () => {
    console.log('connected to db');
})

app.use(cors()); //middleware for cors
app.use('/uploads' ,express.static('uploads'))
app.use(express.json());

//reg and login route
app.use('/user', authRouter);

//posting salee route
app.use('/salee', postSaleeRouter)

//home route
app.use('/', homeRouter )

app.listen(5000, () => { console.log('listening on port 5000'); })