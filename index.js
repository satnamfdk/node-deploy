require('dotenv').config()
const fs = require('fs')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const server = express();
const path = require('path')
const dns = require('dns')
const productRouter = require('./routes/product')
const userRouter = require('./routes/user')
console.log(process.env.DB_PASSWORD)
const index = fs.readFileSync('index.html', 'utf-8')

dns.setServers([
  '1.1.1.1',
  '8.8.8.8'


])



//db connection
// getting-started.js

main().catch(err => console.log(err));

async function main() {
  // await mongoose.connect(process.env.MONGO_URL);
  await mongoose.connect(process.env.MONGO_URL);

console.log('database connected')
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}








// QqlM5QazoXY8Xcxp
server.use(cors())
server.use(express.json())
server.use(express.static(path.resolve(__dirname,process.env.PUBLIC_DIR)))
server.use('/products', productRouter.router)
server.use('/users', userRouter.router)
server.use('*splat', (req,res)=>{
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})
//MVC model-view-controller

server.listen(8080, ()=>{
    console.log('server started')
})
