const express = require('express')
const userController = require('./../controllers/userController')
const appConfig = require("./../config/appConfig")
const auth = require("./../middlewares/auth")

module.exports.setRouter = function(app){
    
    let baseUrl = appConfig.apiVersion+'/user';

    app.post(baseUrl+'/login',auth.isAuthenticated,userController.login);

    /**
	 * @api {post} /api/v1/user/login api for user login
	 * @apiVersion 0.0.1
	 * @apiGroup users
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} email email of the user. (body params) (required)
	 * @apiParam {String} password password of the user. (body params) (required)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
		"error": false,
		"message": "Login Successful",
		"status": 200,
		"data": {
			"firstName": "some",
			"lastName": "one",
			"email": "someone@mail.com",
			"mobileNumber": "2233112233",
			"password": "123456789",
			"_id": "5bb0eff65012451e9439058b",
			"userId": "rHnm1sgWS",
			"createdOn": "2018-09-30T15:47:02.000Z",
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

     app.post(baseUrl+'/signup',auth.isAuthenticated,userController.signup);

    /**
	 * @api {post} /api/v1/user/signup api for user signup
	 * @apiVersion 0.0.1
	 * @apiGroup users
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} firstName first name of the user. (body params) (required)
	 * @apiParam {String} lastName last name of the user. (body params) (required)
	 * @apiParam {String} email email of the user. (body params) (required)
	 * @apiParam {String} mobileNumber mobile number of the user. (body params) (required)	
	 * @apiParam {String} password password of the user. (body params) (required)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
		"error": false,
		"message": "User created",
		"status": 200,
		"data": {
			"firstName": "some",
			"lastName": "one",
			"email": "someone@mail.com",
			"mobileNumber": "2233112233",
			"password": "123456789",
			"_id": "5bb0eff65012451e9439058b",
			"userId": "rHnm1sgWS",
			"createdOn": "2018-09-30T15:47:02.000Z",
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

	app.post(baseUrl+'/logout',auth.isAuthenticated,userController.logout);

    /**
	 * @api {post} /api/v1/user/logout api to logout user
	 * @apiVersion 0.0.1
	 * @apiGroup users
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} userId userId of the user. (auth headers) (required)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
		"error": false,
		"message": "Logged Out Successfully",
		"status": 200,
		"data": null
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

	app.get(baseUrl+'/:userId/details',auth.isAuthenticated,userController.getUserDetails);

    /**
	 * @api {get} /api/v1/user/:userId/details api to get single user info
	 * @apiVersion 0.0.1
	 * @apiGroup users
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} userId userId of the user. (url params) (required)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
		"error": false,
		"message": "User Details Found",
		"status": 200,
		"data": {
			"firstName": "some",
			"lastName": "oneelse",
			"email": "someoneelse@mail.com",
			"mobileNumber": "2132112133",
			"password": "987654321",
			"_id": "5bb0f0f35012451e9439058c",
			"userId": "mtiHD5CUq",
			"createdOn": "2018-09-30T15:51:15.000Z",
			"__v": 0
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


}// end setRouter function