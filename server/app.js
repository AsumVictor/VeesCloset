const express = require('express')
const ErrorHandler = require('./middleware/error')
const app  = express()
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require('cors')
const user = require('./controllers/user')


app.use((req, res, next)=>{
 console.log(`${req.method}: ${req.path}`);
 next()
})

app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use('/',express.static('uploads'))
app.use(bodyParser.urlencoded({extended: true, limit: '50mb'}))

if(process.env.NODE_ENV !=='PRODUCTION'){
    require('dotenv').config({
        path:'./config/.env'
    })
}

// import router
app.use('/api/vees/user', user)
console.log('work')

app.use(ErrorHandler)
module.exports = app