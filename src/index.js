const express = require('express')
const Route = express.Router()

const user = require('./routes/user')
const company = require('./routes/company')
const engineer = require('./routes/engineer')
const skill = require('./routes/skill')
const register = require('./routes/register')
const login = require('./routes/login')
const showcase = require('./routes/showcase')



Route
    .use('/user',user)
    .use('/company',company)
    .use('/engineer',engineer)
    .use('/skill',skill)
    .use('/register',register)
    .use('/login',login)
    .use('/showcase',showcase)
    // .use('/uploads', express.static('/routes./src/uploads_eng'))
    
module.exports = Route