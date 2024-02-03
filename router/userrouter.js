const router= require('express').Router()
    const Banner= require('../module/banner')
    const Course=  require('../module/course')
    const Skill=  require('../module/skills')
    const Resume=  require('../module/resume')
     const Eduction= require('../module/eduction')
     const Address = require('../module/address')
const bannerc= require('../controllers/bannercontroller')
const coursec=  require('../controllers/coursecontroller')
const queryc=   require('../controllers/querycontroller')
 const skillc= require('../controllers/skillcontroller')
 const resumec=  require('../controllers/resumecontroller')
  const eductionc=  require('../controllers/eductioncontroller')
  const addressc = require('../controllers/addresscontroller')




router.get('/', async(req,res)=>{
   const bannerRecord= await Banner.findOne()
const courseRecord=await Course.find({status:'Published'})
 const skillRecord= await Skill.find()
 const resumeRecord=  await Resume.findOne()
   const eductionRecord = await Eduction.find()
   const addRecord=  await Address.findOne()
    res.render('index.ejs',{bannerRecord,courseRecord,skillRecord,resumeRecord,eductionRecord,addRecord})
})
router.post('/',queryc.queryadd)





module.exports=router