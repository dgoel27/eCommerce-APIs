const express = require('express')
const cartController = require('./../controllers/cartController')
const appConfig = require("./../config/appConfig")
const auth = require("./../middlewares/auth")

module.exports.setRouter = function(app){
    
    let baseUrl = appConfig.apiVersion+'/cart';

    app.post(baseUrl+'/:cartItemId/removeItem',auth.isAuthenticated,cartController.removeItemFromCart);

    /**
	 * @api {post} /api/v1/cart/:cartItemId/removeItem Remove item from cart by itemId
	 * @apiVersion 0.0.1
	 * @apiGroup cart
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} cartItemId itemId of the item added in cart passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
		"error": false,
		"message": "Cart item removed successfully",
		"status": 200,
		"data": {
			"n": 1,
			"ok": 1
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */

     app.post(baseUrl+'/addItem',auth.isAuthenticated,cartController.addItemToCart);

    /**
	 * @api {post} /api/v1/cart/addItem Add item to cart
	 * @apiVersion 0.0.1
	 * @apiGroup cart
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {Number} quantity quantity of the item added in cart passed as a body parameter
	 * @apiParam {String} currency currency of the item added in cart passed as a body parameter
	 * @apiParam {Number} price price of the item added in cart passed as a body parameter
	 * @apiParam {Number} discount discount applied on the item added in cartpassed as a body parameter	
	 * @apiParam {Number} tax tax & shipping charges applied on the item added in cart passed as a body parameter	 	
	 * @apiParam {Number} shipping shipping charges applied on the item added in cart passed as a body parameter 	 	 	 	 
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
		"error": false,
		"message": "Item Added to cart successfully",
		"status": 200,
		"data": {
			"cartItemQuantity": 1,
			"cartItemCurrency": "INR",
			"cartItemPrice": 3495,
			"cartItemDiscount": 524.25,
			"cartItemTax": 500,
			"shippingCharge": 24.25,
			"cartItemFinalAmount": 3495,
			"_id": "5ba9d9cc5d20541aa8431872",
			"cartItemId": "8Tujg7NX7",
			"__v": 0
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */

    app.get(baseUrl+'/:cartItemId/count/decrease',auth.isAuthenticated,cartController.decreaseQuantity);


    /**
	 * @api {get} /api/v1/cart/:cartItemId/count/decrease Decrease item quantity added in the cart
	 * @apiVersion 0.0.1
	 * @apiGroup cart
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} cartItemId itemId of the item added in cart passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
		"error": false,
		"message": "Quantity of item added in cart decreased successfully.",
		"status": 200,
		"data": {
			"cartItemQuantity": 2,
			"cartItemCurrency": "INR",
			"cartItemPrice": 3495,
			"cartItemDiscount": 524.25,
			"cartItemTax": 500,
			"shippingCharge": 24.25,
			"cartItemFinalAmount": 6990,
			"_id": "5ba9d9cc5d20541aa8431872",
			"cartItemId": "8Tujg7NX7",
			"__v": 0
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */


    app.get(baseUrl+'/:cartItemId/count/increase',auth.isAuthenticated,cartController.increaseQuantity);


    /**
	 * @api {get} /api/v1/cart/:cartItemId/count/increase Increase item quantity added in the cart
	 * @apiVersion 0.0.1
	 * @apiGroup cart
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} cartItemId itemId of the item added in cart passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
		"error": false,
		"message": "Quantity of item added in cart increased successfully.",
		"status": 200,
		"data": {
			"cartItemQuantity": 3,
			"cartItemCurrency": "INR",
			"cartItemPrice": 3495,
			"cartItemDiscount": 524.25,
			"cartItemTax": 500,
			"shippingCharge": 24.25,
			"cartItemFinalAmount": 10485,
			"_id": "5ba9d9cc5d20541aa8431872",
			"cartItemId": "8Tujg7NX7",
			"__v": 0
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */	 

}// end setRouter function