require('dotenv').config()
const express = require('express');
const productRouter = require('./routes/product');
const userRouter = require('./routes/user');
const server = express();
const mongoose = require('mongoose');
const cors = require('cors')
const path = require('path')



main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
}










server.use(cors())
server.use(express.json())
server.use('/products', productRouter.router)
server.use('/users', userRouter.router)
server.use(express.static(path.resolve(__dirname, process.env.PUBLIC_DIR)))
server.use('*', (req, res)=>{
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})



server.listen(process.env.PORT, () => {
    console.log('server started')
})

