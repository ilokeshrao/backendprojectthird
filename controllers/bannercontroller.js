const Banner = require('../module/banner')




exports.bannerpage = async (req, res) => {
  const loginname = req.session.loginname
  const record = await Banner.findOne()
  console.log(record)
  res.render('admin/banner.ejs', { loginname, record })
}
exports.bannerform = async (req, res) => {
  try{
  const loginname = req.session.loginname
  const id = req.params.id
  const record = await Banner.findById(id)
  console.log(record)
  res.render('admin/bannerform.ejs', { loginname,record,message:'' })
  }catch(error){
    console.log(error.message)
  }
}
exports.bannerupdate=async(req,res)=>{
  const{name,desc,md}=req.body
  const id=req.params.id
   const loginname= req.session.loginname
   const record = await Banner.findById(id)
   if(req.file){
    const filename= req.file.filename
    await Banner.findByIdAndUpdate(id,{name:name, desc:desc, mdetails:md ,img:filename})
   }else{
    await Banner.findByIdAndUpdate(id,{name:name, desc:desc, mdetails:md})

   }
  res.render('admin/bannerform.ejs',{message:'successfuly banner details Updated',loginname,record})
  }
  

