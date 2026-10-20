const mongoose = require('mongoose')
const {Schema} = mongoose;

// Schema

const productSchema = new Schema({
              title: {type: String, required : true},
            description: String,
            category: {type:String},
            price: {type: Number, min:[0, 'wrong price'], required: true},
            discountPercentage: {type: Number, min:[0, 'wrong min discount'], max:[50, 'wrong max discount']},
            brand: {type: String, required: true},
            rating: {type: Number, min:[0, 'wrong min rating'], max:[5, 'wrong max rating']},
            thumbnail: {type: String, required: true}, 
            images: [ String   ]
});

//Model

exports.Product = mongoose.model('Product', productSchema);
