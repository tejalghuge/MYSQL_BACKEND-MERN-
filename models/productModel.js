const {DataTypes} =require('sequelize')
const sequelize = require('../config/db')

const Product = sequelize.define('Product', {
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING(100),
        allowNull:false,
    },
    description:{
        type:DataTypes.STRING(),
    },
    price:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    category_id:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    brand_id:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    Quantity:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    InStock:{
        type:DataTypes.BOOLEAN,
        defaultValue:true
    },
    createdAt:{
        type:DataTypes.DATE,
        defaultValue:Date.now()
    },
    upadatedAt:{
        type:DataTypes.DATE,
        defaultValue:Date.now()
    }
},{
    tableName:'Products',
    timestamps:true
})




module.exports = Product 