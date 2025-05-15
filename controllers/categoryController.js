const Category = require('../models/categoryModel');

const createCategory = async (req, res) => {
    try {
        const newCategory = await Category.create(req.body);
        res.status(200).send({ message: 'Category created successfully', success: true });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.findAll();
        res.status(200).send({ categories, success: true });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

const getCategoryByID = async (req, res) => {
    try {
        const category = await Category.findByPk(req.params.id);
        if (!category) return res.status(404).send({ message: 'Category not found' });
        res.status(200).send({ category, success: true });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

const updateCategory = async (req, res) => {
    try {
        const category = await Category.update(req.body, {
            where: { id: req.params.id }
        });
        res.status(200).send({ message: 'Category updated successfully', success: true });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

const deleteCategory = async (req, res) => {
    try {
        await Category.destroy({ where: { id: req.params.id } });
        res.status(200).send({ message: 'Category deleted successfully', success: true });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

module.exports = {
    createCategory,
    getAllCategories,
    getCategoryByID,
    updateCategory,
    deleteCategory
};
