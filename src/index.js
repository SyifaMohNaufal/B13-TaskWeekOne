const express = require('express')
const Route = express.Router()

const {tokenVerify} = require('./helpers/auth') 

const user = require('./routes/user')
const company = require('./routes/company')
const engineer = require('./routes/engineer')
const skill = require('./routes/skill')
const register = require('./routes/register')
const login = require('./routes/login')
const showcase = require('./routes/showcase')

Route
    .use('/user',tokenVerify,user)
    .use('/company',tokenVerify,company)
    .use('/engineer',tokenVerify,engineer)
    .use('/skill', tokenVerify,skill)
    .use('/register', register)
    .use('/login', login)
    .use('/showcase',tokenVerify,showcase)

module.exports = Route