const mongoose= require('mongoose')


const bannerSchema= mongoose.Schema({
    name:String,
    desc:String,
    img:String,
    mdetails:String
})





 module.exports= mongoose.model('banner',bannerSchema)