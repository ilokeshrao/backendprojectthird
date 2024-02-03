 const express= require('express')
 const app =express()
 require('dotenv').config()
 app.use(express.urlencoded({extended:false}))
  const adminRouter= require('./router/adminrouter')
   const userRouter= require('./router/userrouter')
   const session= require('express-session')
   const mongoose=  require('mongoose')
mongoose.connect(`${process.env.DB_URL}/${process.env.DB_Name}`)


app.use(session({                                
    secret:process.env.SECRET_KEY,    
    resave:false,       
    saveUninitialized:false,
    cookie:{maxAge:1024*60*60*24*365}
})),


app.use(userRouter)
app.use('/admin',adminRouter)
app.use(express.static('public'))
app.set('view engine','ejs')         
 app.listen(process.env.PORT,()=>{console.log(`server is run ${process.env.PORT}`)})