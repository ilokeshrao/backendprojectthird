const mongoose= require('mongoose')


 const resumeSchema =mongoose.Schema({
    headline:String,
    summery:String,
})





 module.exports= mongoose.model('resume',resumeSchema)