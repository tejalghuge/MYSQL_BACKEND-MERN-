const express = require('express')
const ProductController = require('../controllers/productController')


const router = express.Router();


router.post('/create', ProductController.createProduct)
router.get('/gelAllProducts', ProductController.getAllProducts)
router.get('/getProductByID/:id', ProductController.getProductByID)
router.put('/updateProduct/:id', ProductController.updateProduct)
router.delete('/deleteProduct/:id', ProductController.deleteProduct)


module.exports = router;