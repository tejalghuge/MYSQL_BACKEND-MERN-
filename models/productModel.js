const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Product = sequelize.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    name: {
        type: DataTypes.STRING(200),
        allowNull: false
    },

    description: {
        type: DataTypes.STRING
    },

    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },

    category: {
        type: DataTypes.STRING,
        allowNull: false
    },

    brand: {
        type: DataTypes.STRING,
        allowNull: false
    },

    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    inStock: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }

}, {
    tableName: 'products',
    timestamps: true
});

module.exports = Product;
