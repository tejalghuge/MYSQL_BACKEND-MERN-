const Product = require('../models/productModel');

const createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(200).send({ message: 'Product created successfully', success: true });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).send({ products });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const getProductByID = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    res.status(200).send({ product });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    await Product.update(req.body, { where: { id: req.params.id } });
    res.status(200).send({ message: 'Product updated successfully' });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    await Product.destroy({ where: { id: req.params.id } });
    res.status(200).send({ message: 'Product deleted successfully' });
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
