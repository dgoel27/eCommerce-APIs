define({ "api": [
  {
    "type": "get",
    "url": "/api/v1/cart/:cartItemId/count/decrease",
    "title": "Decrease item quantity added in the cart",
    "version": "0.0.1",
    "group": "cart",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cartItemId",
            "description": "<p>itemId of the item added in cart passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\t\"error\": false,\n\t\t\"message\": \"Quantity of item added in cart decreased successfully.\",\n\t\t\"status\": 200,\n\t\t\"data\": {\n\t\t\t\"cartItemQuantity\": 2,\n\t\t\t\"cartItemCurrency\": \"INR\",\n\t\t\t\"cartItemPrice\": 3495,\n\t\t\t\"cartItemDiscount\": 524.25,\n\t\t\t\"cartItemTax\": 500,\n\t\t\t\"shippingCharge\": 24.25,\n\t\t\t\"cartItemFinalAmount\": 6990,\n\t\t\t\"_id\": \"5ba9d9cc5d20541aa8431872\",\n\t\t\t\"cartItemId\": \"8Tujg7NX7\",\n\t\t\t\"__v\": 0\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/cartRoutes.js",
    "groupTitle": "cart",
    "name": "GetApiV1CartCartitemidCountDecrease"
  },
  {
    "type": "get",
    "url": "/api/v1/cart/:cartItemId/count/increase",
    "title": "Increase item quantity added in the cart",
    "version": "0.0.1",
    "group": "cart",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cartItemId",
            "description": "<p>itemId of the item added in cart passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\t\"error\": false,\n\t\t\"message\": \"Quantity of item added in cart increased successfully.\",\n\t\t\"status\": 200,\n\t\t\"data\": {\n\t\t\t\"cartItemQuantity\": 3,\n\t\t\t\"cartItemCurrency\": \"INR\",\n\t\t\t\"cartItemPrice\": 3495,\n\t\t\t\"cartItemDiscount\": 524.25,\n\t\t\t\"cartItemTax\": 500,\n\t\t\t\"shippingCharge\": 24.25,\n\t\t\t\"cartItemFinalAmount\": 10485,\n\t\t\t\"_id\": \"5ba9d9cc5d20541aa8431872\",\n\t\t\t\"cartItemId\": \"8Tujg7NX7\",\n\t\t\t\"__v\": 0\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/cartRoutes.js",
    "groupTitle": "cart",
    "name": "GetApiV1CartCartitemidCountIncrease"
  },
  {
    "type": "post",
    "url": "/api/v1/cart/addItem",
    "title": "Add item to cart",
    "version": "0.0.1",
    "group": "cart",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "quantity",
            "description": "<p>quantity of the item added in cart passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "currency",
            "description": "<p>currency of the item added in cart passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>price of the item added in cart passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "discount",
            "description": "<p>discount applied on the item added in cartpassed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tax",
            "description": "<p>tax &amp; shipping charges applied on the item added in cart passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "shipping",
            "description": "<p>shipping charges applied on the item added in cart passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\t\"error\": false,\n\t\t\"message\": \"Item Added to cart successfully\",\n\t\t\"status\": 200,\n\t\t\"data\": {\n\t\t\t\"cartItemQuantity\": 1,\n\t\t\t\"cartItemCurrency\": \"INR\",\n\t\t\t\"cartItemPrice\": 3495,\n\t\t\t\"cartItemDiscount\": 524.25,\n\t\t\t\"cartItemTax\": 500,\n\t\t\t\"shippingCharge\": 24.25,\n\t\t\t\"cartItemFinalAmount\": 3495,\n\t\t\t\"_id\": \"5ba9d9cc5d20541aa8431872\",\n\t\t\t\"cartItemId\": \"8Tujg7NX7\",\n\t\t\t\"__v\": 0\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/cartRoutes.js",
    "groupTitle": "cart",
    "name": "PostApiV1CartAdditem"
  },
  {
    "type": "post",
    "url": "/api/v1/cart/:cartItemId/removeItem",
    "title": "Remove item from cart by itemId",
    "version": "0.0.1",
    "group": "cart",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cartItemId",
            "description": "<p>itemId of the item added in cart passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\t\"error\": false,\n\t\t\"message\": \"Cart item removed successfully\",\n\t\t\"status\": 200,\n\t\t\"data\": {\n\t\t\t\"n\": 1,\n\t\t\t\"ok\": 1\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/cartRoutes.js",
    "groupTitle": "cart",
    "name": "PostApiV1CartCartitemidRemoveitem"
  },
  {
    "type": "get",
    "url": "/api/v1/items/all",
    "title": "Get all items",
    "version": "0.0.1",
    "group": "items",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"All Item Details Found\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\titemID: \"string\",\n\t\t\t\t\t\titemName: \"string\",\n\t\t\t\t\t\titemDescription: \"string\",\n\t\t\t\t\t\titemCurrency: \"string\",\n\t\t\t\t\t\titemPrice: number,\n\t\t\t\t\t\titemColor: object(type = array),\n\t\t\t\t\t\titemSize: object(type = array),\t\n\t\t\t\t\t\titemDimensions: \"string\",\n\t\t\t\t\t\titemWeight: \"string\",\n\t\t\t\t\t\titemQuantity: number,\t\t\t\t\t\t\n\t\t\t\t\t\titemBarcode: \"string\",\n\t\t\t\t\t\titemWarranty: \"string\",\n\t\t\t\t\t\titemCategory: \"string\",\t\t\t\t\t\n\t\t\t\t\t\tstockAvailability: boolean,\n\t\t\t\t\t\tdiscountOffer: number,\n\t\t\t\t\t\tgender: \"string\",\t\n\t\t\t\t\t\titemImage: object(type = array),\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\titemExpiryDate: \"date\",\n\t\t\t\t\t\titemAddedOn: \"date\",\n\t\t\t\t\t\titemVendor: object(type = array),\n\t\t\t\t\t\titemReviews: object(type = array),\n\t\t\t\t\t\titemRating: \"string\",\n\t\t\t\t\t\titemManufacturer: \"string\"\t\t\t\t\t\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To Find Item Details\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/itemRoutes.js",
    "groupTitle": "items",
    "name": "GetApiV1ItemsAll"
  },
  {
    "type": "get",
    "url": "/api/v1/items/:itemID/count/stock",
    "title": "Decrease item stock Count",
    "version": "0.0.1",
    "group": "items",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "itemID",
            "description": "<p>itemID of the item passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Item Updated Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\titemID: \"string\",\n\t\t\t\t\t\titemName: \"string\",\n\t\t\t\t\t\titemDescription: \"string\",\n\t\t\t\t\t\titemCurrency: \"string\",\n\t\t\t\t\t\titemPrice: number,\n\t\t\t\t\t\titemColor: object(type = array),\n\t\t\t\t\t\titemSize: object(type = array),\n\t\t\t\t\t\titemDimensions: \"string\",\n\t\t\t\t\t\titemWeight: \"string\",\n\t\t\t\t\t\titemQuantity: number,\n\t\t\t\t\t\titemBarcode: \"string\",\n\t\t\t\t\t\titemWarranty: \"string\",\n\t\t\t\t\t\titemCategory: \"string\",\n\t\t\t\t\t\tstockAvailability: boolean,\n\t\t\t\t\t\tdiscountOffer: number,\n\t\t\t\t\t\tgender: \"string\",\n\t\t\t\t\t\titemImage: object(type = array),\n\t\t\t\t\t\titemExpiryDate: \"date\",\n\t\t\t\t\t\titemAddedOn: \"date\",\n\t\t\t\t\t\titemVendor: object(type = array),\n\t\t\t\t\t\titemReviews: object(type = array),\n\t\t\t\t\t\titemRating: \"string\",\n\t\t\t\t\t\titemManufacturer: \"string\"\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/itemRoutes.js",
    "groupTitle": "items",
    "name": "GetApiV1ItemsItemidCountStock"
  },
  {
    "type": "get",
    "url": "/api/v1/items/view/by/category/:category",
    "title": "Get items by category",
    "version": "0.0.1",
    "group": "items",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>category of the item passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"items Found Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\titemID: \"string\",\n\t\t\t\t\t\titemName: \"string\",\n\t\t\t\t\t\titemDescription: \"string\",\n\t\t\t\t\t\titemCurrency: \"string\",\n\t\t\t\t\t\titemPrice: number,\n\t\t\t\t\t\titemColor: object(type = array),\n\t\t\t\t\t\titemSize: object(type = array),\n\t\t\t\t\t\titemDimensions: \"string\",\n\t\t\t\t\t\titemWeight: \"string\",\n\t\t\t\t\t\titemQuantity: number,\n\t\t\t\t\t\titemBarcode: \"string\",\n\t\t\t\t\t\titemWarranty: \"string\",\n\t\t\t\t\t\titemCategory: \"string\",\n\t\t\t\t\t\tstockAvailability: boolean,\n\t\t\t\t\t\tdiscountOffer: number,\n\t\t\t\t\t\tgender: \"string\",\n\t\t\t\t\t\titemImage: object(type = array),\n\t\t\t\t\t\titemExpiryDate: \"date\",\n\t\t\t\t\t\titemAddedOn: \"date\",\n\t\t\t\t\t\titemVendor: object(type = array),\n\t\t\t\t\t\titemReviews: object(type = array),\n\t\t\t\t\t\titemRating: \"string\",\n\t\t\t\t\t\titemManufacturer: \"string\"\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/itemRoutes.js",
    "groupTitle": "items",
    "name": "GetApiV1ItemsViewByCategoryCategory"
  },
  {
    "type": "get",
    "url": "/api/v1/items/view/by/gender/:gender",
    "title": "Get items by gender",
    "version": "0.0.1",
    "group": "items",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>gender of the item passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"items Found Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\titemID: \"string\",\n\t\t\t\t\t\titemName: \"string\",\n\t\t\t\t\t\titemDescription: \"string\",\n\t\t\t\t\t\titemCurrency: \"string\",\n\t\t\t\t\t\titemPrice: number,\n\t\t\t\t\t\titemColor: object(type = array),\n\t\t\t\t\t\titemSize: object(type = array),\n\t\t\t\t\t\titemDimensions: \"string\",\n\t\t\t\t\t\titemWeight: \"string\",\n\t\t\t\t\t\titemQuantity: number,\n\t\t\t\t\t\titemBarcode: \"string\",\n\t\t\t\t\t\titemWarranty: \"string\",\n\t\t\t\t\t\titemCategory: \"string\",\n\t\t\t\t\t\tstockAvailability: boolean,\n\t\t\t\t\t\tdiscountOffer: number,\n\t\t\t\t\t\tgender: \"string\",\n\t\t\t\t\t\titemImage: object(type = array),\n\t\t\t\t\t\titemExpiryDate: \"date\",\n\t\t\t\t\t\titemAddedOn: \"date\",\n\t\t\t\t\t\titemVendor: object(type = array),\n\t\t\t\t\t\titemReviews: object(type = array),\n\t\t\t\t\t\titemRating: \"string\",\n\t\t\t\t\t\titemManufacturer: \"string\"\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/itemRoutes.js",
    "groupTitle": "items",
    "name": "GetApiV1ItemsViewByGenderGender"
  },
  {
    "type": "get",
    "url": "/api/v1/items/view/:itemID",
    "title": "Get a single item",
    "version": "0.0.1",
    "group": "items",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "itemID",
            "description": "<p>The itemID should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Item Found Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": {\n\t    \t\t\t_id: \"string\",\n\t    \t\t\t__v: number\n\t\t\t\t\titemID: \"string\",\n\t\t\t\t\titemName: \"string\",\n\t\t\t\t\titemDescription: \"string\",\n\t\t\t\t\titemCurrency: \"string\",\n\t\t\t\t\titemPrice: number,\n\t\t\t\t\titemColor: object(type = array),\n\t\t\t\t\titemSize: object(type = array),\n\t\t\t\t\titemDimensions: \"string\",\n\t\t\t\t\titemWeight: \"string\",\n\t\t\t\t\titemQuantity: number,\n\t\t\t\t\titemBarcode: \"string\",\n\t\t\t\t\titemWarranty: \"string\",\n\t\t\t\t\titemCategory: \"string\",\n\t\t\t\t\tstockAvailability: boolean,\n\t\t\t\t\tdiscountOffer: number,\n\t\t\t\t\tgender: \"string\",\n\t\t\t\t\titemImage: object(type = array),\n\t\t\t\t\titemExpiryDate: \"date\",\n\t\t\t\t\titemAddedOn: \"date\",\n\t\t\t\t\titemVendor: object(type = array),\n\t\t\t\t\titemReviews: object(type = array),\n\t\t\t\t\titemRating: \"string\",\n\t\t\t\t\titemManufacturer: \"string\"\t\t\t\t\t\t\t\t\n\t\t\t\t}\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/itemRoutes.js",
    "groupTitle": "items",
    "name": "GetApiV1ItemsViewItemid"
  },
  {
    "type": "post",
    "url": "/api/v1/items/create",
    "title": "Create item",
    "version": "0.0.1",
    "group": "items",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the item passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the item passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "currency",
            "description": "<p>currency of the item passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>price of the item passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>color of the item passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "size",
            "description": "<p>size of the item passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "weight",
            "description": "<p>weight of the item passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "quantity",
            "description": "<p>quantity of the item passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>category of the item passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>gender of the item passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>image URL of the item passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vendor",
            "description": "<p>vendor details of the item passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "manufacturer",
            "description": "<p>manufacturer of the item passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Item Created successfully\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\titemID: \"string\",\n\t\t\t\t\t\titemName: \"string\",\n\t\t\t\t\t\titemDescription: \"string\",\n\t\t\t\t\t\titemCurrency: \"string\",\n\t\t\t\t\t\titemPrice: number,\n\t\t\t\t\t\titemColor: object(type = array),\n\t\t\t\t\t\titemSize: object(type = array),\n\t\t\t\t\t\titemDimensions: \"string\",\n\t\t\t\t\t\titemWeight: \"string\",\n\t\t\t\t\t\titemQuantity: number,\n\t\t\t\t\t\titemBarcode: \"string\",\n\t\t\t\t\t\titemWarranty: \"string\",\n\t\t\t\t\t\titemCategory: \"string\",\n\t\t\t\t\t\tstockAvailability: boolean,\n\t\t\t\t\t\tdiscountOffer: number,\n\t\t\t\t\t\tgender: \"string\",\n\t\t\t\t\t\titemImage: object(type = array),\n\t\t\t\t\t\titemExpiryDate: \"date\",\n\t\t\t\t\t\titemAddedOn: \"date\",\n\t\t\t\t\t\titemVendor: object(type = array),\n\t\t\t\t\t\titemReviews: object(type = array),\n\t\t\t\t\t\titemRating: \"string\",\n\t\t\t\t\t\titemManufacturer: \"string\"\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/itemRoutes.js",
    "groupTitle": "items",
    "name": "PostApiV1ItemsCreate"
  },
  {
    "type": "post",
    "url": "/api/v1/items/:itemID/delete",
    "title": "Delete item by itemID",
    "version": "0.0.1",
    "group": "items",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "itemID",
            "description": "<p>itemID of the item passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Item Deleted Successfully\",\n\t    \"status\": 200,\n\t    \"data\": []\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/itemRoutes.js",
    "groupTitle": "items",
    "name": "PostApiV1ItemsItemidDelete"
  },
  {
    "type": "put",
    "url": "/api/v1/items/:itemID/edit",
    "title": "Edit item by itemID",
    "version": "0.0.1",
    "group": "items",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "itemID",
            "description": "<p>itemID of the item passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Item Edited Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\titemID: \"string\",\n\t\t\t\t\t\titemName: \"string\",\n\t\t\t\t\t\titemDescription: \"string\",\n\t\t\t\t\t\titemCurrency: \"string\",\n\t\t\t\t\t\titemPrice: number,\n\t\t\t\t\t\titemColor: object(type = array),\n\t\t\t\t\t\titemSize: object(type = array),\n\t\t\t\t\t\titemDimensions: \"string\",\n\t\t\t\t\t\titemWeight: \"string\",\n\t\t\t\t\t\titemQuantity: number,\n\t\t\t\t\t\titemBarcode: \"string\",\n\t\t\t\t\t\titemWarranty: \"string\",\n\t\t\t\t\t\titemCategory: \"string\",\n\t\t\t\t\t\tstockAvailability: boolean,\n\t\t\t\t\t\tdiscountOffer: number,\n\t\t\t\t\t\tgender: \"string\",\n\t\t\t\t\t\titemImage: object(type = array),\n\t\t\t\t\t\titemExpiryDate: \"date\",\n\t\t\t\t\t\titemAddedOn: \"date\",\n\t\t\t\t\t\titemVendor: object(type = array),\n\t\t\t\t\t\titemReviews: object(type = array),\n\t\t\t\t\t\titemRating: \"string\",\n\t\t\t\t\t\titemManufacturer: \"string\"\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/itemRoutes.js",
    "groupTitle": "items",
    "name": "PutApiV1ItemsItemidEdit"
  },
  {
    "type": "get",
    "url": "/api/v1/user/:userId/details",
    "title": "api to get single user info",
    "version": "0.0.1",
    "group": "users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (url params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\t\"error\": false,\n\t\t\"message\": \"User Details Found\",\n\t\t\"status\": 200,\n\t\t\"data\": {\n\t\t\t\"firstName\": \"some\",\n\t\t\t\"lastName\": \"oneelse\",\n\t\t\t\"email\": \"someoneelse@mail.com\",\n\t\t\t\"mobileNumber\": \"2132112133\",\n\t\t\t\"password\": \"987654321\",\n\t\t\t\"_id\": \"5bb0f0f35012451e9439058c\",\n\t\t\t\"userId\": \"mtiHD5CUq\",\n\t\t\t\"createdOn\": \"2018-09-30T15:51:15.000Z\",\n\t\t\t\"__v\": 0\n    \t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/userRoutes.js",
    "groupTitle": "users",
    "name": "GetApiV1UserUseridDetails"
  },
  {
    "type": "post",
    "url": "/api/v1/user/login",
    "title": "api for user login",
    "version": "0.0.1",
    "group": "users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\t\"error\": false,\n\t\t\"message\": \"Login Successful\",\n\t\t\"status\": 200,\n\t\t\"data\": {\n\t\t\t\"firstName\": \"some\",\n\t\t\t\"lastName\": \"one\",\n\t\t\t\"email\": \"someone@mail.com\",\n\t\t\t\"mobileNumber\": \"2233112233\",\n\t\t\t\"password\": \"123456789\",\n\t\t\t\"_id\": \"5bb0eff65012451e9439058b\",\n\t\t\t\"userId\": \"rHnm1sgWS\",\n\t\t\t\"createdOn\": \"2018-09-30T15:47:02.000Z\",\n\t\t\t\"__v\": 0\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/userRoutes.js",
    "groupTitle": "users",
    "name": "PostApiV1UserLogin"
  },
  {
    "type": "post",
    "url": "/api/v1/user/logout",
    "title": "api to logout user",
    "version": "0.0.1",
    "group": "users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (auth headers) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\t\"error\": false,\n\t\t\"message\": \"Logged Out Successfully\",\n\t\t\"status\": 200,\n\t\t\"data\": null\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/userRoutes.js",
    "groupTitle": "users",
    "name": "PostApiV1UserLogout"
  },
  {
    "type": "post",
    "url": "/api/v1/user/signup",
    "title": "api for user signup",
    "version": "0.0.1",
    "group": "users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>first name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>last name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>mobile number of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\t\"error\": false,\n\t\t\"message\": \"User created\",\n\t\t\"status\": 200,\n\t\t\"data\": {\n\t\t\t\"firstName\": \"some\",\n\t\t\t\"lastName\": \"one\",\n\t\t\t\"email\": \"someone@mail.com\",\n\t\t\t\"mobileNumber\": \"2233112233\",\n\t\t\t\"password\": \"123456789\",\n\t\t\t\"_id\": \"5bb0eff65012451e9439058b\",\n\t\t\t\"userId\": \"rHnm1sgWS\",\n\t\t\t\"createdOn\": \"2018-09-30T15:47:02.000Z\",\n\t\t\t\"__v\": 0\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/userRoutes.js",
    "groupTitle": "users",
    "name": "PostApiV1UserSignup"
  }
] });
