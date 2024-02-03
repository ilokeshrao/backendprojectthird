 const Resume=  require('../module/resume')



 exports.resumepage=async(req,res)=>{
   const loginname=  req.session.loginname
   const record= await Resume.findOne()
   console.log(record)
    res.render('admin/resumepage.ejs',{loginname,record})
 }
 exports.resumeupdateform=async(req,res)=>{
    const loginname=  req.session.loginname
    const id =req.params.id
    const record =  await Resume.findById(id)
     res.render('admin/resumeupdateform.ejs', {record,loginname})
 }
 exports.resumeupdate=async(req,res)=>{
    const {rh,rs}=req.body
    const id= req.params.id
    const loginname=req.session.loginname
     const record = await Resume.findById(id)
    //  console.log(record)
    await Resume.findByIdAndUpdate(id,{headline:rh, summery:rs})
    res.redirect('/admin/resume')
}