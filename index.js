const express=require('express')

const app=express()

app.use(express.static('public'))
app.set("view engine","ejs")

app.use("",require('./routes/routes'))

app.listen(3000,()=>{
    console.log("server started")
})