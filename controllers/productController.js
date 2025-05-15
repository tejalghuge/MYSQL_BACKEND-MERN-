const Product = require('../models/productModel');

// Create
const createProduct = async (req, res) => {
    try {
        await Product.create(req.body);
        res.status(200).send({ message: 'Product created successfully', success: true });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

// Get All
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.status(200).send({ products, success: true });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

// Get by ID
const getProductByID = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) return res.status(404).send({ message: 'Product not found' });
        res.status(200).send({ product, success: true });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

// Update
const updateProduct = async (req, res) => {
    try {
        await Product.update(req.body, { where: { id: req.params.id } });
        res.status(200).send({ message: 'Product updated successfully', success: true });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

// Delete
const deleteProduct = async (req, res) => {
    try {
        await Product.destroy({ where: { id: req.params.id } });
        res.status(200).send({ message: 'Product deleted successfully', success: true });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

module.exports = {
    createProduct,
    getAllProducts,
    getProductByID,
    updateProduct,
    deleteProduct
};
