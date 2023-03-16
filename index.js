import express from 'express'



const PORT = 3232;
const app = express();

app.get("/" , function(request,response){
  response.send("Hello")
})

app.listen(PORT, ()=> console.log(`Server started in PORT ${PORT}`))
