const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');


router.get('/', productController.GetAllProducts);
router.get('/:id', productController.GetProduct);
router.delete('/:id', productController.DeleteProduct);
router.post('/', productController.CreateProducts);
router.put('/:id', productController.EditProducts);
module.exports = router;