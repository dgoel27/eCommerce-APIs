const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let cartSchema = new Schema (
    {
        cartItemId: {
            type: String,
            unique: true
        },
        cartItemQuantity: {
            type: Number,
            default: 0
        },         
        cartItemCurrency: {
            type: String,
            default: ''
        },
        cartItemPrice: {
            type: Number,
            default: 0
        },                                                  
        cartItemDiscount: {
            type: Number,
            default: 0
        },
        cartItemTax: {
            type: Number,
            default: 0
        },    
        shippingCharge: {
            type: Number,
            default: 0
        },            
        cartItemFinalAmount: {
            type: Number,
            default: 0
        }                    
    }
)

mongoose.model('cart',cartSchema);