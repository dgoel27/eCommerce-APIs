const express = require('express')
const mongoose = require('mongoose');
const shortid = require('shortid');
const response = require('./../libs/responseLib')
const logger = require('./../libs/loggerLib');
const check = require('./../libs/checkLib')
const time = require('./../libs/timeLib')

//Importing the model here 
const cartModel = mongoose.model('cart')

/**
 * function to remove item from cart.
 */
let removeItemFromCart = (req, res) => {
    if (check.isEmpty(req.params.cartItemId)) {
        console.log('cartItemId should be passed')
        let apiResponse = response.generate(true, 'cartItemId is missing', 403, null)
        res.send(apiResponse)
    } else {
        cartModel.remove({ 'cartItemId': req.params.cartItemId }, (err, result) => {
            if (err) {
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No such cart item Found', 'Cart Controller: removeItemFromCart')
                let apiResponse = response.generate(true, 'Cart item Not Found.', 404, null)
                res.send(apiResponse)
            } else {
                logger.info("Item removal from cart success","Cart Controller : removeItemFromCart",5)
                let apiResponse = response.generate(false, 'Cart item removed successfully', 200, result)
                res.send(apiResponse)
            }
        })
    }
}

/**
 * function to add item to cart.
 */
let addItemToCart = (req, res) => {
    let itemAdditionFunction = () => {
        return new Promise((resolve, reject) => {
            console.log(req.body)
            if (check.isEmpty(req.body.itemID) || check.isEmpty(req.body.currency) || check.isEmpty(req.body.price) || check.isEmpty(req.body.quantity) || check.isEmpty(req.body.tax)) {
                console.log("403, forbidden request");
                let apiResponse = response.generate(true, 'required parameters are missing', 403, null)
                reject(apiResponse)
            } else {
                let newCart = new cartModel({
                    cartItemId: req.body.itemID,
                    cartItemCurrency: req.body.currency,
                    cartItemPrice: req.body.price,
                    cartItemQuantity: req.body.quantity,
                    cartItemTax: req.body.tax,
                    cartItemDiscount: req.body.discount,
                    shippingCharge: req.body.charge,
                    cartItemFinalAmount: Number(req.body.price) * Number(req.body.quantity) - Number(req.body.discount) + Number(req.body.tax) + Number(req.body.charge)
                }) // end new cart model                

                newCart.save((err, result) => {
                    if (err) {
                        logger.error(`Error Occured : ${err}`, 'Database', 10)
                        let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                        reject(apiResponse)
                    } else {
                        console.log('Success in item addition to cart')
                        resolve(result)
                    }
                }) // end new cart save
            }
        }) // end new cart promise
    } // end create cart function

    // making promise call.
    itemAdditionFunction()
        .then((result) => {
            logger.info("Item Added to cart successfully","Cart Controller : addItemToCart",5)
            let apiResponse = response.generate(false, 'Item Added to cart successfully', 200, result)
            res.send(apiResponse)
        })
        .catch((error) => {
            console.log(error)
            logger.error(error, 'Cart Controller: addItemToCart', 10)
            let apiResponse = response.generate(true, 'some error occurred', 500, null)
            res.send(apiResponse)            
        })
}

/**
 * function to decrease stock count of item.
 */
let decreaseQuantity = (req, res) => {  
    if (check.isEmpty(req.params.cartItemId)) {
        console.log('cartItemId should be passed')
        let apiResponse = response.generate(true, 'cartItemId is missing', 403, null)
        res.send(apiResponse)
    } else {
        cartModel.findOne({ 'cartItemId': req.params.cartItemId }, (err, result) => {
            if (err) {
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No such Item found in cart', 'Cart Controller: decreaseQuantity')
                let apiResponse = response.generate(true, 'Item Not Found in cart', 404, null)
                res.send(apiResponse)
            } else {
                result.cartItemQuantity -= 1;
                result.cartItemFinalAmount = Number(result.cartItemPrice) * Number(result.cartItemQuantity) - Number(result.cartItemDiscount) + Number(result.cartItemTax) + Number(result.shippingCharge);
                result.save(function(err,result){
                    if(err){
                        console.log('Error Occured.')
                        logger.error(`Error Occured : ${err}`, 'Database', 10)
                        let apiResponse = response.generate(true, 'Error Occured While saving item', 500, null)
                        res.send(apiResponse)
                    }
                    else{
                        logger.info("Quantity of item added in cart decreased successfully","Cart Controller : decreaseQuantity",5)
                        let apiResponse = response.generate(false, 'Quantity of item added in cart decreased successfully.', 200, result)
                        res.send(apiResponse)
                    }
                });// end result
                
            }
        })
    }
}

/**
 * function to decrease stock count of item.
 */
let increaseQuantity = (req, res) => {  
    if (check.isEmpty(req.params.cartItemId)) {
        console.log('cartItemId should be passed')
        let apiResponse = response.generate(true, 'cartItemId is missing', 403, null)
        res.send(apiResponse)
    } else {
        cartModel.findOne({ 'cartItemId': req.params.cartItemId }, (err, result) => {
            if (err) {
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No such Item found in cart', 'Cart Controller: increaseQuantity')
                let apiResponse = response.generate(true, 'Item Not Found in cart', 404, null)
                res.send(apiResponse)
            } else {
                result.cartItemQuantity += 1;
                result.cartItemFinalAmount = Number(result.cartItemPrice) * Number(result.cartItemQuantity) - Number(result.cartItemDiscount) + Number(result.cartItemTax) + Number(result.shippingCharge);
                result.save(function(err,result){
                    if(err){
                        console.log('Error Occured.')
                        logger.error(`Error Occured : ${err}`, 'Database', 10)
                        let apiResponse = response.generate(true, 'Error Occured While saving item', 500, null)
                        res.send(apiResponse)
                    }
                    else{
                        logger.info("Quantity of item added in cart increased successfully","Cart Controller : increaseQuantity",5)
                        let apiResponse = response.generate(false, 'Quantity of item added in cart increased successfully.', 200, result)
                        res.send(apiResponse)
                    }
                });// end result
                
            }
        })
    }
}

module.exports = {
    removeItemFromCart: removeItemFromCart,
    addItemToCart: addItemToCart,
    decreaseQuantity: decreaseQuantity,
    increaseQuantity: increaseQuantity    
}