 const Eduction =require('../module/eduction')

 exports.eductionpage=async(req,res)=>{
   const record= await Eduction.find().sort({end:-1})
   const teduction=await Eduction.count()
   const tpublish= await Eduction.count({status:'Published'})
   const tunpublish= await Eduction.count({status:'Unpublished'})
    res.render('admin/eductionpage.ejs',{loginname:req.session.loginname,record, teduction,tpublish,tunpublish})
 }
 exports.eductionadd=(req,res)=>{
    res.render('admin/addeduction.ejs',{loginname:req.session.loginname})
 }
 exports.updateeduction=async(req,res)=>{
const{EN,ED,cstart,cend}= req.body
 const record= await new Eduction({name:EN,desc:ED,start:cstart,end:cend})
record.save()
// console.log(record)
res.redirect('/admin/eduction')
} 
exports.coursedelete=async(req,res)=>{
   const id= req.params.id
    await Eduction.findByIdAndDelete(id)
    res.redirect('/admin/eduction')
}
exports.coursestatusupdate=async(req,res)=>{
   const id= req.params.id
   const record=  await Eduction.findById(id)
   let newstatus=null
   if(record.status=='Unpublished'){
      newstatus='Published'   
   }else{
      newstatus='Unpublished'
   }
   await Eduction.findByIdAndUpdate(id,{status:newstatus})
   res.redirect('/admin/eduction')
}
exports.search= async(req,res)=>{
   const {search}=req.body
  const loginname =  req.session.loginname
   const record = await Eduction.find({status:search})
   // console.log(record)
   const teduction=await Eduction.count()
   const tpublish= await Eduction.count({status:'Published'})
   const tunpublish= await Eduction.count({status:'Unpublished'})
    res.render('admin/eductionpage.ejs',{loginname:req.session.loginname,record, teduction,tpublish,tunpublish})
}



