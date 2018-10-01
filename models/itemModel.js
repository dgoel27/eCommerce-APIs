const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let itemSchema = new Schema (
    {
        itemID: {
            type: String,
            unique: true
        },
        itemName: {
            type: String,
            default: ''
        },
        itemDescription: {
            type: String,
            default: ''
        },
        itemCurrency: {
            type: String,
            default: ''
        },
        itemPrice: {
            type: Number,
            default: 0
        },
        itemColor: [],
        itemSize: [],        

        itemDimensions: {
            type: String,
            default: ''
        },
        itemWeight: {
            type: String,
            default: ''
        },
        itemQuantity: {
            type: Number,
            default: 0
        },
        itemBarcode: {
            type: String,
            default: ''
        }, 
        itemWarranty: {
            type: String,
            default: ''
        },    
        itemCategory: {
            type: String,
            default: ''
        },                                                    
        stockAvailability: {
            type: Boolean,
            default: false
        },
        discountOffer: {
            type: Number,
            default: 0
        },        
        gender: {
            type: String,
            default: ''
        },
        itemImage: [],

        itemExpiryDate: {
            type: Date,
            default: Date.UTC(2099, 12, 0, 0, 0, 0)
        }, 

        itemAddedOn: {
            type: Date,
            default: Date.now
        },
        itemVendor: [],
        itemReviews: [],        
        
        itemRating: {
            type: String,
            default: ''
        },
        itemManufacturer: {
            type: String,
            default: ''
        }                       
    }
)

mongoose.model('Item',itemSchema);