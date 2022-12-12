const http= require('http')

const server=http.createServer((req,res)=>{
  res.write("hello")
  res.write("Algeria")
  res.end()
})
server.listen(5000,()=>{console.log("server running")})