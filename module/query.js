const mongoose = require('mongoose')



const querySchema = mongoose.Schema({
    name: String,
    email: String,
    query: String,
    img:String,
    status:{type:String,default:'Email/Reply'}
})




module.exports = mongoose.model('query', querySchema)