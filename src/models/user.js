const {Sequelize, DataTypes } =require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('Users', {
    id: { 
        type: DataTypes.UUID, 
        defaultValue: Sequelize.UUIDV4, 
        allowNull: false, 
        primaryKey :true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = User;