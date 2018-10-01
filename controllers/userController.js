const express = require('express')
const mongoose = require('mongoose');
const shortid = require('shortid');
const response = require('./../libs/responseLib')
const logger = require('./../libs/loggerLib');
const check = require('./../libs/checkLib')
const time = require('./../libs/timeLib')

//Importing the model here 
const userModel = mongoose.model('user')

/**
 * function for user login
 */
let login = (req, res) => {
    if (check.isEmpty(req.body.email) || check.isEmpty(req.body.password)) {
        console.log('emailId and password should be passed')
        let apiResponse = response.generate(true, 'Email Id or Password is missing', 403, null)
        res.send(apiResponse)
    } else {
        userModel.findOne({ 'email': req.body.email, 'password': req.body.password }, (err, result) => {
            if (err) {
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('Wrong email id or password entered', 'User Controller: login')
                let apiResponse = response.generate(true, 'Wrong email id or password entered', 404, null)
                res.send(apiResponse)
            } else {
                logger.info("User Logged In Successfully","User Controller : login",5)
                let apiResponse = response.generate(false, 'Login Successful', 200, result)
                res.send(apiResponse)
            }
        })
    }
}

/**
 * function to logout user.
 */
let logout = (req, res) => {
    console.log(req.header('userId'))
    if (check.isEmpty(req.header('userId'))) {
        console.log('userId is empty')
        let apiResponse = response.generate(true, 'userId is missing', 403, null)
        res.send(apiResponse)
    } else {
        userModel.findOne({ 'userId': req.header('userId') }, (err, result) => {
            if (err) {
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No such user Found', 'User Controller: logout')
                let apiResponse = response.generate(true, 'User Not Found.', 404, null)
                res.send(apiResponse)
            } else {
                logger.info("User Logged Out Successfully","User Controller : logout",5)
                let apiResponse = response.generate(false, 'Logged Out Successfully', 200, null)
                res.send(apiResponse)
            }
        })
    }
}

/**
 * function for user signup.
 */
let signup = (req, res) => {
    let signupFunction = () => {
        return new Promise((resolve, reject) => {
            console.log(req.body)
            if (check.isEmpty(req.body.firstName) || check.isEmpty(req.body.lastName) || check.isEmpty(req.body.email) || check.isEmpty(req.body.mobileNumber) || check.isEmpty(req.body.password)) {
                console.log("403, forbidden request");
                let apiResponse = response.generate(true, 'required parameters are missing', 403, null)
                reject(apiResponse)
            } else {
                let userId = shortid.generate()
                let newUser = new userModel({
                    userId: userId,
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    mobileNumber: req.body.mobileNumber,
                    password: req.body.password,
                    createdOn: time.getLocalTime()
                }) // end new cart model                

                newUser.save((err, result) => {
                    if (err) {
                        logger.error(`Error Occured : ${err}`, 'Database', 10)
                        let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                        reject(apiResponse)
                    } else {
                        console.log('User created')
                        resolve(result)
                    }
                }) // end new user save
            }
        }) // end new user promise
    } // end create user function

    // making promise call.
    signupFunction()
        .then((result) => {
            logger.info("User created successfully","User Controller : signup",5)
            let apiResponse = response.generate(false, 'User created', 200, result)
            res.send(apiResponse)
        })
        .catch((error) => {
            console.log(error)
            logger.error(error, 'User Controller: signup', 10)
            let apiResponse = response.generate(true, 'some error occurred', 500, null)
            res.send(apiResponse)            
        })
}

/**
 * function to get single user info
 */
let getUserDetails = (req, res) => {
    // console.log(req.user)
    if (check.isEmpty(req.params.userId)) {
        console.log('userId should be passed')
        let apiResponse = response.generate(true, 'userId is missing', 403, null)
        res.send(apiResponse)
    } else {    
        userModel.findOne({ 'userId': req.params.userId }, (err, result) => {
            if (err) {
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No User Found', 'User Controller: getUserDetails')
                let apiResponse = response.generate(true, 'User Not Found', 404, null)
                res.send(apiResponse)
            } else {
                logger.info("User Details Found","User Controller : getUserDetails",5)
                let apiResponse = response.generate(false, 'User Details Found', 200, result)
                res.send(apiResponse)
            }
        })
    }
}


module.exports = {
    login: login,
    logout: logout,
    signup: signup,
    getUserDetails: getUserDetails    
}