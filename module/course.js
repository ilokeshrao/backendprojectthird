 const mongoose= require('mongoose')


 const courseSchema= mongoose.Schema({
    title:String,
    icon:String,
    desc:String,
    postedDate:Date,
    status:{type:String, default:'Unpublished'}

})





 module.exports= mongoose.model('course',courseSchema)