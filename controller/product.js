const fs = require('fs')
const model = require('../model/product')
const Product = model.Product;


exports.createProduct = async (req, res) => {
    const product = new Product(req.body)
    await product.save()
    res.json(req.body)
}


exports.getAllProducts = async (req, res) => {
    const products = await Product.find()
    res.json(products)
}
exports.getProduct = async (req, res) => {
    const id = req.params.id
    const products = await Product.findById(id)
    res.json(products)
}

exports.replaceProduct = async (req, res) => {
    const id = req.params.id
    try {
        const doc = await Product.findOneAndReplace({ _id: id }, req.body, { new: true })
        res.status(201).json(doc)
    } catch (error) {
        console.log(error)
        res.json(error)
    }

}


exports.updateProduct = async (req, res) => {
    const id = req.params.id
    try {
        const doc = await Product.findOneAndUpdate({ _id: id }, req.body, { new: true })
        res.status(201).json(doc)
    } catch (error) {
        console.log(error)
        res.json(error)
    }
}

exports.deleteProduct = async (req, res) => {
    const id = req.params.id
    try {
        const doc = await Product.findOneAndDelete({ _id: id })
        res.status(201).json(doc)
    } catch (error) {
        console.log(error)
        res.json(error)
    }   
}


