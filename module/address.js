 const mongoose= require('mongoose')


 const addressSchema= mongoose.Schema({
    name:String,
    add:String,
    mobile:Number,
    email:String,
    insta:String,
    fb:String,
})





 module.exports= mongoose.model('address',addressSchema)