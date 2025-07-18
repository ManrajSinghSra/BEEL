const express=require("express") 
const app=express()
const path=require("path")

app.use(express.static("public"));

app.use(express.urlencoded({extended:true}))

const userData=path.join(__dirname,"users.json")
app.use((req, res, next) => {
  console.log(req.url);
  next();
}); 


app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirolername, "public", "index.html"));
})

app.post("/user",(req,res)=>{

    const {name,email,password}=req.body;
    

    
    console.log(req.body);
    
    res.sendFile(path.join(__dirname, "public", "dashbord.html"));
})
  

app.get("/dash", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "dashbord.html"));
});


app.listen(5050,()=>console.log(`Server is started at ${5050}`))
