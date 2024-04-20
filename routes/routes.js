const express=require('express')
const router=express.Router();

router.use("/home",(req,res)=>{
    res.render("index",{title:'homepage'})
})

router.use("/about",(req,res)=>{
    res.render("about",{title:'aboutpage'})
})

router.use("/education",(req,res)=>{
    res.render("education",{title:'educationpage'})
})

router.use("/project",(req,res)=>{
    res.render("project",{title:'projectpage'})
})

router.use("/contact",(req,res)=>{
    res.render("contact",{title:'contactpage'})
})



module.exports=router