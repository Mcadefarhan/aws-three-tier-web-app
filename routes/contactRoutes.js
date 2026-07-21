const express=require("express");
const router=express.Router();
const db=require("../config/db");
db.query(`CREATE TABLE IF NOT EXISTS contacts(
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100) NOT NULL,
email VARCHAR(100) NOT NULL,
message TEXT NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)`);
router.post("/contact",(req,res)=>{
 const {name,email,message}=req.body;
 db.query("INSERT INTO contacts(name,email,message) VALUES(?,?,?)",
 [name,email,message],err=>{
   if(err) return res.status(500).json({success:false,message:"Database Error"});
   res.json({success:true,message:"Message saved successfully!"});
 });
});
module.exports=router;
