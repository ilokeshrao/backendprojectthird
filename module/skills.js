 const mongoose= require('mongoose')


 const skillsSchema= mongoose.Schema({
    skill:String,
    desc:String,
    strength:String,
    status:{type:String,default:'Unpublished'}
})






 module.exports =  mongoose.model('skills',skillsSchema)