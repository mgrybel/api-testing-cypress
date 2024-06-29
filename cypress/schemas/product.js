export const productSchema = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "id": {
      "type": "integer"
    },
    "name": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "price": {
      "type": "number"
    },
    "imageUrl": {
      "type": "string"
    },
    "stock": {
      "type": "integer"
    }
  },
  "required": [
    "id",
    "name",
    "description",
    "price",
    "imageUrl",
    "stock"
  ]
};