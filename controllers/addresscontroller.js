const address = require('../module/address')
const Address = require('../module/address')


exports.addpage= async(req,res)=>{
    const loginname =req.session.loginname
    const record = await Address.findOne()
    res.render('admin/addpage.ejs',{loginname,record})
}
exports.update=async(req,res)=>{
    const loginname =req.session.loginname
    const record= await Address.findById(req.params.id)
    res.render('admin/updateform.ejs',{loginname,record})
}
exports.formupdate=async(req,res)=>{
    const {name,add,mobile,email,insta,fb}=req.body
    const id =req.params.id
    await  Address.findByIdAndUpdate(id,{ name:name,add:add, mobile:mobile,email:email,insta:insta,fb:fb,})
    res.redirect('/admin/address')
}