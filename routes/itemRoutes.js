const express = require('express')
const itemController = require('./../controllers/itemController')
const appConfig = require("./../config/appConfig")
const auth = require("./../middlewares/auth")

module.exports.setRouter = function(app){
    
    let baseUrl = appConfig.apiVersion+'/items';

    app.get(baseUrl+'/all',auth.isAuthenticated,itemController.getAllItems);

	/**
	 * @api {get} /api/v1/items/all Get all items
	 * @apiVersion 0.0.1
	 * @apiGroup items
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "All Item Details Found",
	    "status": 200,
	    "data": [
					{
						itemID: "string",
						itemName: "string",
						itemDescription: "string",
						itemCurrency: "string",
						itemPrice: number,
						itemColor: object(type = array),
						itemSize: object(type = array),	
						itemDimensions: "string",
						itemWeight: "string",
						itemQuantity: number,						
						itemBarcode: "string",
						itemWarranty: "string",
						itemCategory: "string",					
						stockAvailability: boolean,
						discountOffer: number,
						gender: "string",	
						itemImage: object(type = array),											
						itemExpiryDate: "date",
						itemAddedOn: "date",
						itemVendor: object(type = array),
						itemReviews: object(type = array),
						itemRating: "string",
						itemManufacturer: "string"					
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed To Find Item Details",
	    "status": 500,
	    "data": null
	   }
	 */


    app.get(baseUrl+'/view/:itemID',auth.isAuthenticated,itemController.viewByitemID);

    /**
	 * @api {get} /api/v1/items/view/:itemID Get a single item
	 * @apiVersion 0.0.1
	 * @apiGroup items
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} itemID The itemID should be passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Item Found Successfully.",
	    "status": 200,
	    "data": {
	    			_id: "string",
	    			__v: number
					itemID: "string",
					itemName: "string",
					itemDescription: "string",
					itemCurrency: "string",
					itemPrice: number,
					itemColor: object(type = array),
					itemSize: object(type = array),
					itemDimensions: "string",
					itemWeight: "string",
					itemQuantity: number,
					itemBarcode: "string",
					itemWarranty: "string",
					itemCategory: "string",
					stockAvailability: boolean,
					discountOffer: number,
					gender: "string",
					itemImage: object(type = array),
					itemExpiryDate: "date",
					itemAddedOn: "date",
					itemVendor: object(type = array),
					itemReviews: object(type = array),
					itemRating: "string",
					itemManufacturer: "string"								
				}
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.",
	    "status": 500,
	    "data": null
	   }
	 */

    app.get(baseUrl+'/view/by/gender/:gender',auth.isAuthenticated,itemController.viewByGender);

    /**
	 * @api {get} /api/v1/items/view/by/gender/:gender Get items by gender
	 * @apiVersion 0.0.1
	 * @apiGroup items
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} gender gender of the item passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "items Found Successfully.",
	    "status": 200,
	    "data": [
					{
						itemID: "string",
						itemName: "string",
						itemDescription: "string",
						itemCurrency: "string",
						itemPrice: number,
						itemColor: object(type = array),
						itemSize: object(type = array),
						itemDimensions: "string",
						itemWeight: "string",
						itemQuantity: number,
						itemBarcode: "string",
						itemWarranty: "string",
						itemCategory: "string",
						stockAvailability: boolean,
						discountOffer: number,
						gender: "string",
						itemImage: object(type = array),
						itemExpiryDate: "date",
						itemAddedOn: "date",
						itemVendor: object(type = array),
						itemReviews: object(type = array),
						itemRating: "string",
						itemManufacturer: "string"												
					}
	    		]
	    	}
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

    app.get(baseUrl+'/view/by/category/:category',auth.isAuthenticated,itemController.viewByCategory);

    /**
	 * @api {get} /api/v1/items/view/by/category/:category Get items by category
	 * @apiVersion 0.0.1
	 * @apiGroup items
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} category category of the item passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "items Found Successfully.",
	    "status": 200,
	    "data": [
					{
						itemID: "string",
						itemName: "string",
						itemDescription: "string",
						itemCurrency: "string",
						itemPrice: number,
						itemColor: object(type = array),
						itemSize: object(type = array),
						itemDimensions: "string",
						itemWeight: "string",
						itemQuantity: number,
						itemBarcode: "string",
						itemWarranty: "string",
						itemCategory: "string",
						stockAvailability: boolean,
						discountOffer: number,
						gender: "string",
						itemImage: object(type = array),
						itemExpiryDate: "date",
						itemAddedOn: "date",
						itemVendor: object(type = array),
						itemReviews: object(type = array),
						itemRating: "string",
						itemManufacturer: "string"											
					}
	    		]
	    	}
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

    app.post(baseUrl+'/:itemID/delete',auth.isAuthenticated,itemController.deleteItem);

    /**
	 * @api {post} /api/v1/items/:itemID/delete Delete item by itemID
	 * @apiVersion 0.0.1
	 * @apiGroup items
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} itemID itemID of the item passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Item Deleted Successfully",
	    "status": 200,
	    "data": []
	    	}
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

    app.put(baseUrl+'/:itemID/edit',auth.isAuthenticated,itemController.editItem);

    /**
	 * @api {put} /api/v1/items/:itemID/edit Edit item by itemID
	 * @apiVersion 0.0.1
	 * @apiGroup items
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} itemID itemID of the item passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Item Edited Successfully.",
	    "status": 200,
	    "data": [
					{
						itemID: "string",
						itemName: "string",
						itemDescription: "string",
						itemCurrency: "string",
						itemPrice: number,
						itemColor: object(type = array),
						itemSize: object(type = array),
						itemDimensions: "string",
						itemWeight: "string",
						itemQuantity: number,
						itemBarcode: "string",
						itemWarranty: "string",
						itemCategory: "string",
						stockAvailability: boolean,
						discountOffer: number,
						gender: "string",
						itemImage: object(type = array),
						itemExpiryDate: "date",
						itemAddedOn: "date",
						itemVendor: object(type = array),
						itemReviews: object(type = array),
						itemRating: "string",
						itemManufacturer: "string"												
					}
	    		]
	    	}
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

    app.post(baseUrl+'/create',auth.isAuthenticated,itemController.createItem);

    /**
	 * @api {post} /api/v1/items/create Create item
	 * @apiVersion 0.0.1
	 * @apiGroup items
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} name name of the item passed as a body parameter
	 * @apiParam {String} description description of the item passed as a body parameter
	 * @apiParam {String} currency currency of the item passed as a body parameter
	 * @apiParam {Number} price price of the item passed as a body parameter
	 * @apiParam {String} color color of the item passed as a body parameter
	 * @apiParam {String} size size of the item passed as a body parameter
	 * @apiParam {String} weight weight of the item passed as a body parameter
	 * @apiParam {Number} quantity quantity of the item passed as a body parameter
	 * @apiParam {String} category category of the item passed as a body parameter
	 * @apiParam {String} gender gender of the item passed as a body parameter
	 * @apiParam {String} image image URL of the item passed as a body parameter
	 * @apiParam {String} vendor vendor details of the item passed as a body parameter		 
	 * @apiParam {String} manufacturer manufacturer of the item passed as a body parameter	 	 	 	 
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Item Created successfully",
	    "status": 200,
	    "data": [
					{
						itemID: "string",
						itemName: "string",
						itemDescription: "string",
						itemCurrency: "string",
						itemPrice: number,
						itemColor: object(type = array),
						itemSize: object(type = array),
						itemDimensions: "string",
						itemWeight: "string",
						itemQuantity: number,
						itemBarcode: "string",
						itemWarranty: "string",
						itemCategory: "string",
						stockAvailability: boolean,
						discountOffer: number,
						gender: "string",
						itemImage: object(type = array),
						itemExpiryDate: "date",
						itemAddedOn: "date",
						itemVendor: object(type = array),
						itemReviews: object(type = array),
						itemRating: "string",
						itemManufacturer: "string"										
					}
	    		]
	    	}
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

    app.get(baseUrl+'/:itemID/count/stock',auth.isAuthenticated,itemController.decreaseStockCount);


    /**
	 * @api {get} /api/v1/items/:itemID/count/stock Decrease item stock Count
	 * @apiVersion 0.0.1
	 * @apiGroup items
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} itemID itemID of the item passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Item Updated Successfully.",
	    "status": 200,
	    "data": [
					{
						itemID: "string",
						itemName: "string",
						itemDescription: "string",
						itemCurrency: "string",
						itemPrice: number,
						itemColor: object(type = array),
						itemSize: object(type = array),
						itemDimensions: "string",
						itemWeight: "string",
						itemQuantity: number,
						itemBarcode: "string",
						itemWarranty: "string",
						itemCategory: "string",
						stockAvailability: boolean,
						discountOffer: number,
						gender: "string",
						itemImage: object(type = array),
						itemExpiryDate: "date",
						itemAddedOn: "date",
						itemVendor: object(type = array),
						itemReviews: object(type = array),
						itemRating: "string",
						itemManufacturer: "string"												
					}
	    		]
	    	}
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