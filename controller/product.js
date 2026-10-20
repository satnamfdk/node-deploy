const fs = require('fs')
// const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'))
// const products = data.products
const model = require('../model/product')
const Product = model.Product



exports.createProduct = async (req, res)=>{
  const product = new Product(req.body);
    try {
       const savedProduct = await product.save()
       console.log("Product Saved", savedProduct)
       res.status(201).json()
    } catch (error) {
        console.log('Error saving product : ', error)
        res.status(404).json()
    }


}


exports.getAllProducts = async (req, res)=>{
   const products = await Product.find()
    res.json(products)
    }

exports.getProduct = async (req, res)=>{
    const id = req.params.id
   const product = await Product.findById(id)
    res.json(product)
    
}


exports.replaceProduct = async (req, res)=>{
    const id = req.params.id
      const doc =  await Product.findOneAndReplace({_id:id}, req.body, {new:true})

//    const productIndex = products.findIndex((p)=>p.id==id)
//    products.splice(productIndex, 1, {...req.body, id:id})


    res.status(201).json(doc)
    
}

// A.findOneAndReplace(filter, replacement, options)  // return Query

exports.updateProduct = async (req, res)=>{
    const id = req.params.id
          const doc =  await Product.findOneAndUpdate({_id:id}, req.body, {new:true})

//    const productIndex = products.findIndex((p)=>p.id==id)
//    const product = products[productIndex]
//    products.splice(productIndex, 1, {...product,...req.body})
    res.status(201).json(doc)
    
}

exports.deleteProduct = async (req, res)=>{
    const id = req.params.id
          const doc =  await Product.findOneAndDelete({_id:id}, {new:true})

//    const productIndex = products.findIndex((p)=>p.id==id)
//    products.splice(productIndex, 1)
res.json()    
}
