const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://ts:aor@cluster0.qhmk7.mongodb.net/dcw'

mongoose.connect(mongoURL, {useUnifiedTopology:true , useNewUrlParser:true})

var db = mongoose.connection

db.on('connected', ()=>{
    console.log('database connection successfull')
})

db.on('error', ()=>{
    console.log('database connection error')
})

module.exports = mongoose