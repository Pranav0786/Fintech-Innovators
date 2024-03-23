const express=require("express");
const jwt=require("jsonwebtoken");
const mongoose=require("mongoose");
const bcryptjs=require("bcryptjs");
const cors=require("cors");
const app=express();
app.use(cors());
app.use(express.json());

const userModal=require("./user-model");

mongoose.connect("mongodb://localhost:27017/Backend").then(()=>
{
    console.log("Database is connected successfully");
}
).catch((err)=>
{
    console.log("Something wrong with database",err);
});

app.post("/api/signup", (req, res) => {
    console.log("endpoint called")
    let data = req.body;
    bcryptjs.genSalt(10, (err, salt) => {
      if (!err) {
        bcryptjs.hash(data.password, salt, (err, hashPassword) => {
          if (!err) {
            data.password = hashPassword;
            userModal
              .create(data)
              .then((doc) => {
                res.send({
                  message: "Admin Registred Successfully",
                  success: true,
                });
              })
              .catch((err) => {
                console.log(err);
                res.send({
                  message: "Unable To Register Admin Please Try Again",
                  success: false,
                });
              });
          } else {
            res.send({
              message: "Unable to Register Admin Please Try Again",
              sucess: false,
            });
          }
        });
      } else {
        res.send({
          message: "Unable to Register Admin Please Try Again",
          sucess: false,
        });
      }
    });
  }); 

  
app.post("/api/signin",(req,res)=>{
    let credentials = req.body;
      userModal.findOne({ username: credentials.username })
          .then((data) => {
            // console.log(data)
            if(data!==null){
              bcryptjs.compare(credentials.password, data.password, (err, result) => {
                  if (!err) {
                      if (result) {
                          jwt.sign({ username: credentials.username }, "secretkey", (err, token) => {
                            console.log(data.userType)
                              res.status(200).send({ message: "Login Successfull",success:true, token: token, usertype:data.userType });
                          })
                      }
                      else {
                          res.status(401).send({ message: "Incorrect Password Please Try again", success: false })
                      }
                  }
                  else {
                      res.status(500).send({ message: "Server Error Please try Again later", success: false });
                  }
              })
            }
            else{
              res.status(401).send({ message: "Incorrect Username Please Try again", success: false })
            }
          })
  
  })
  
  app.listen(8000, console.log("server is start and Running"));