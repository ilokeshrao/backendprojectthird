 const mongoose= require('mongoose')


  const eductionSchema=  mongoose.Schema({
    name:String,
    desc:String,
    start:Number,
    end:Number,
    status:{type:String, default:'Unpublished'}

  })





  module.exports= mongoose.model('eduction',eductionSchema)