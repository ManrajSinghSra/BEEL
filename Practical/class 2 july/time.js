
const fs=require("fs")

setInterval(()=>{

    const date=new Date(Date.now())

    fs.appendFile("./activity.log",`${date.toLocaleTimeString()} \n`,(error)=>{
        console.log(error);
        
    })

},2000)