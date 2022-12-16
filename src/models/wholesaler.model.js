const {DataTypes} = require("sequelize");
module.exports = (sequelize) => {
    return sequelize.define('wholesaler', {
        id: {
            type: DataTypes.INTEGER,
            unique: true,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
        },
        phone: {
            type: DataTypes.STRING,
        }
    });
}