 const Course= require('../module/course')       


 exports.coursepage=async(req,res)=>{      
    const loginname=  req.session.loginname   
    const record = await Course.find().sort({postedDate:-1}) 
    const tcourse = await Course.count() 
    const tpublish=  await Course.count({status:'Published'})
    const tunpublish=  await Course.count({status:'Unpublished'})

    res.render('admin/course.ejs',{loginname, record,tcourse,tpublish,tunpublish})
 }            
 exports.courseform=(req,res)=>{  
   const loginname=  req.session.loginname     
    res.render('admin/courseform.ejs',{loginname})  
 }     
 exports.addcourse=async(req,res)=>{  
   const Cdate= new Date()                   
  const {title,desc}=req.body  
// const loginname=req.session.loginname
if(req.file){
   const filename =req.file.filename
   var record=   await Course({title:title,desc:desc,postedDate:Cdate, icon:filename})   
}else{
   var record=   await Course({title:title,desc:desc,postedDate:Cdate})   
}
 record.save()           
    res.redirect('/admin/course')    
 }                         
                       
 exports.deletestatus=async(req,res)=>{                
   const id = req.params.id              
     await Course.findByIdAndDelete(id)       
     res.redirect('/admin/course')      
}

exports.coursestatusupdate=async(req,res)=>{
  const id= req.params.id
  const record=  await Course.findById(id)
  let newstatus= null
  if(record.status=='Unpublished'){
   newstatus='Published'
  }else{
   newstatus='Unpublished'
  }
  await Course.findByIdAndUpdate(id,{status:newstatus})
  res.redirect('/admin/course')
//   console.log(record)

}
exports.search=async(req,res)=>{
   const {search}=req.body
   const loginname=  req.session.loginname
  const record= await Course.find({status:search})
  const tcourse = await Course.count() 
  const tpublish=  await Course.count({status:'Published'})
  const tunpublish=  await Course.count({status:'Unpublished'})
//   console.log(record)
  res.render('admin/course.ejs',{loginname, record,tcourse,tpublish,tunpublish,loginname})

}
