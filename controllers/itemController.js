const express = require('express')
const mongoose = require('mongoose');
const shortid = require('shortid');
const response = require('./../libs/responseLib')
const logger = require('./../libs/loggerLib');
const check = require('./../libs/checkLib')
const time = require('./../libs/timeLib')

//Importing the model here 
const ItemModel = mongoose.model('Item')

let getAllItems = (req, res) => {
    ItemModel.find()
        .select('-__v -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                logger.error(err.message, 'Item Controller: getAllItems', 10)
                let apiResponse = response.generate(true, 'Failed To Find Item Details', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No Item Found', 'Item Controller: getAllItems')
                let apiResponse = response.generate(true, 'No Item Found', 404, null)
                res.send(apiResponse)                
            } else {
                logger.info('All item details found', 'Item Controller: getAllItems',5)
                let apiResponse = response.generate(false,'All item details found',200,result)
                res.send(apiResponse)                
            }
        })
}// end get all items

/**
 * function to view single item.
 */
let viewByitemID = (req, res) => {
    // console.log(req.user)
    if (check.isEmpty(req.params.itemID)) {
        console.log('itemID should be passed')
        let apiResponse = response.generate(true, 'itemID is missing', 403, null)
        res.send(apiResponse)
    } else {    
        ItemModel.findOne({ 'itemID': req.params.itemID }, (err, result) => {
            if (err) {
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No Item Found', 'Item Controller: viewByitemID')
                let apiResponse = response.generate(true, 'Item Not Found', 404, null)
                res.send(apiResponse)
            } else {
                logger.info("Item found successfully","Item Controller : viewByitemID",5)
                let apiResponse = response.generate(false, 'Item Found Successfully.', 200, result)
                res.send(apiResponse)
            }
        })
    }
}

/**
 * function to view items by category.
 */
let viewByCategory = (req, res) => {

    if (check.isEmpty(req.params.category)) {
        console.log('category should be passed')
        let apiResponse = response.generate(true, 'Category is missing', 403, null)
        res.send(apiResponse)
    } else {
        ItemModel.find({ 'itemCategory': req.params.category }, (err, result) => {
            if (err) {
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No Item Found', 'Item Controller: viewByCategory')
                let apiResponse = response.generate(true, 'Items Not Found', 404, null)
                res.send(apiResponse)
            } else {
                logger.info("Items found successfully","Item Controller : viewByCategory",5)
                let apiResponse = response.generate(false, 'Items Found Successfully.', 200, result)
                res.send(apiResponse)
            }
        })
    }
}

/**
 * function to view items by gender.
 */
let viewByGender = (req, res) => {

    if (check.isEmpty(req.params.gender)) {
        console.log('gender should be passed')
        let apiResponse = response.generate(true, 'gender is missing', 403, null)
        res.send(apiResponse)
    } else {
        ItemModel.find({ 'gender': req.params.gender }, (err, result) => {
            if (err) {
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No Item Found', 'Item Controller: viewByGender')
                let apiResponse = response.generate(true, 'Items Not Found', 404, null)
                res.send(apiResponse)
            } else {
                logger.info("Items found successfully","Item Controller : viewByGender",5)
                let apiResponse = response.generate(false, 'Items Found Successfully.', 200, result)
                res.send(apiResponse)
            }
        })
    }
}

/**
 * function to edit item by admin.
 */
let editItem = (req, res) => {
    if (check.isEmpty(req.params.itemID)) {
        console.log('itemID should be passed')
        let apiResponse = response.generate(true, 'itemID is missing', 403, null)
        res.send(apiResponse)
    } else {
        let options = req.body;
        console.log(options);
        ItemModel.update({ 'itemID': req.params.itemID }, options, { multi: true }).exec((err, result) => {
            if (err) {
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No Item Found', 'Item Controller: editItem')
                let apiResponse = response.generate(true, 'Item Not Found', 404, null)
                res.send(apiResponse)
            } else {
                logger.info("Item Edited Successfully","Item Controller : editItem",5)
                let apiResponse = response.generate(false, 'Item Edited Successfully', 200, result)
                res.send(apiResponse)
            }
        })
    }
}

/**
 * function to delete the item.
 */
let deleteItem = (req, res) => {
    if (check.isEmpty(req.params.itemID)) {
        console.log('itemID should be passed')
        let apiResponse = response.generate(true, 'itemID is missing', 403, null)
        res.send(apiResponse)
    } else {
        ItemModel.remove({ 'itemID': req.params.itemID }, (err, result) => {
            if (err) {
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No Item Found', 'Item Controller: deleteItem')
                let apiResponse = response.generate(true, 'Item Not Found.', 404, null)
                res.send(apiResponse)
            } else {
                logger.info("Item Deletion Success","Item Controller : deleteItem",5)
                let apiResponse = response.generate(false, 'Item Deleted Successfully', 200, result)
                res.send(apiResponse)
            }
        })
    }
}

/**
 * function to create the item.
 */
let createItem = (req, res) => {
    let itemCreationFunction = () => {
        return new Promise((resolve, reject) => {
            console.log(req.body)
            if (check.isEmpty(req.body.name) || check.isEmpty(req.body.description) || check.isEmpty(req.body.currency) || check.isEmpty(req.body.price) || check.isEmpty(req.body.color) || check.isEmpty(req.body.size) || check.isEmpty(req.body.weight) || check.isEmpty(req.body.quantity) || check.isEmpty(req.body.category) || check.isEmpty(req.body.gender) || check.isEmpty(req.body.image) || check.isEmpty(req.body.vendor) || check.isEmpty(req.body.manufacturer)) {
                console.log("403, forbidden request");
                let apiResponse = response.generate(true, 'required parameters are missing', 403, null)
                reject(apiResponse)
            } else {
                var today = time.now()
                let itemID = shortid.generate()
                let newItem = new ItemModel({
                    itemID: itemID,
                    itemName: req.body.name,
                    itemDescription: req.body.description,
                    itemCurrency: req.body.currency,
                    itemPrice: req.body.price,
                    itemDimensions: req.body.dimensions,
                    itemWeight: req.body.weight,
                    itemQuantity: req.body.quantity,
                    itemBarcode: req.body.barcode,
                    itemWarranty: req.body.warranty,
                    itemCategory: req.body.category,
                    stockAvailability: true,
                    discountOffer: req.body.discount,
                    gender: req.body.gender,
                    itemExpiryDate: time.convertToLocalTime(req.body.expiry_date),
                    itemAddedOn: today,
                    itemRating: req.body.rating,
                    itemManufacturer: req.body.manufacturer
                }) // end new item model

                let color = (req.body.color != undefined && req.body.color != null && req.body.color != '') ? req.body.color.split(',') : []
                newItem.itemColor = color

                let size = (req.body.size != undefined && req.body.size != null && req.body.size != '') ? req.body.size.split(',') : []
                newItem.itemSize = size     
                
                let image = (req.body.image != undefined && req.body.image != null && req.body.image != '') ? req.body.image.split(',') : []
                newItem.itemImage = image      
                
                let vendor = (req.body.vendor != undefined && req.body.vendor != null && req.body.vendor != '') ? req.body.vendor.split(',') : []
                newItem.itemVendor = vendor    
                
                let reviews = (req.body.reviews != undefined && req.body.reviews != null && req.body.reviews != '') ? req.body.reviews.split(',') : []
                newItem.itemReviews = reviews                 

                newItem.save((err, result) => {
                    if (err) {
                        logger.error(`Error Occured : ${err}`, 'Database', 10)
                        let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                        reject(apiResponse)
                    } else {
                        console.log('Success in item creation')
                        resolve(result)
                    }
                }) // end new item save
            }
        }) // end new item promise
    } // end create item function

    // making promise call.
    itemCreationFunction()
        .then((result) => {
            logger.info("Item Created successfully","Item Controller : createItem",5)
            let apiResponse = response.generate(false, 'Item Created successfully', 200, result)
            res.send(apiResponse)
        })
        .catch((error) => {
            console.log(error)
            // res.send(error)
            logger.error(error, 'Item Controller: createItem', 10)
            let apiResponse = response.generate(true, 'some error occurred', 500, null)
            res.send(apiResponse)            
        })
}

/**
 * function to decrease stock count of item.
 */
let decreaseStockCount = (req, res) => {  
    if (check.isEmpty(req.params.itemID)) {
        console.log('itemID should be passed')
        let apiResponse = response.generate(true, 'itemID is missing', 403, null)
        res.send(apiResponse)
    } else {
        ItemModel.findOne({ 'itemID': req.params.itemID }, (err, result) => {
            if (err) {
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No Item Found', 'Item Controller: decreaseStockCount')
                let apiResponse = response.generate(true, 'Item Not Found', 404, null)
                res.send(apiResponse)
            } else {
                result.itemQuantity -= 1;
                result.save(function(err,result){
                    if(err){
                        console.log('Error Occured.')
                        logger.error(`Error Occured : ${err}`, 'Database', 10)
                        let apiResponse = response.generate(true, 'Error Occured While saving item', 500, null)
                        res.send(apiResponse)
                    }
                    else{
                        logger.info("Item Stock/Quantity Updated Successfully","Item Controller : decreaseStockCount",5)
                        let apiResponse = response.generate(false, 'Item Stock/Quantity Updated Successfully.', 200, result)
                        res.send(apiResponse)
                    }
                });// end result
                
            }
        })
    }
}

module.exports = {
    getAllItems: getAllItems,
    createItem: createItem,
    viewByitemID: viewByitemID,
    viewByCategory: viewByCategory,
    viewByGender: viewByGender,
    editItem: editItem,
    deleteItem: deleteItem,
    decreaseStockCount: decreaseStockCount    
}