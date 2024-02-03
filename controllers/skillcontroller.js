 const Skill= require('../module/skills')

 exports.skillpage= async(req,res)=>{
   const loginname= req.session.loginname
   const record= await Skill.find()
   const tskill = await Skill.count()
   const tpublished=await Skill.count({status:'Publish'})
   const tunpublished = await Skill.count({status:'Unpublished'})
    res.render('admin/skill.ejs',{loginname,record,tpublished,tskill,tunpublished})
 }
 exports.addskillform=(req,res)=>{
    const loginname= req.session.loginname
    res.render('admin/skillform.ejs',{loginname,message:''})
 }
 exports.addskill=async(req,res)=>{
    const loginname= req.session.loginname
     var {name,desc,strength}=req.body
     var record = await new Skill({skill:name,desc:desc,strength:strength})
    record.save()
     res.render('admin/skillform.ejs',{message:'Skill has been updated',loginname})
     
 }
 exports.skilldelete=async(req,res)=>{
     const id= req.params.id
    const record=   await Skill.findByIdAndDelete(id)
    res.redirect('/admin/skill')
 }
 exports.statusupdate=async(req,res)=>{
   const id= req.params.id
   const record=  await Skill.findById(id)
   console.log(record)
   let newstatus=null
   if(record.status=='Unpublished'){
      newstatus='Publish'
   }else{
      newstatus='Unpublished'
   }
   await Skill.findByIdAndUpdate(id,{status:newstatus})
   res.redirect('/admin/skill')
 }
 exports.search=async(req,res)=>{
   const {search}=req.body
    const loginname=req.session.loginname
   const record=  await Skill.find({status:search})
   const tskill = await Skill.count()
   const tpublished=await Skill.count({status:'Publish'})
   const tunpublished = await Skill.count({status:'Unpublished'})
    res.render('admin/skill.ejs',{loginname,record,tpublished,tskill,tunpublished})
}