const {DataTypes} = require("sequelize");
module.exports = (sequelize) => {
    return sequelize.define('stock', {
        retailer_id: {
            type: DataTypes.INTEGER,
            foreignKey: true,
        },
        wholesaler_id: {
            type: DataTypes.INTEGER,
            foreignKey: true,
        },
        stock_amount: {
            type: DataTypes.INTEGER
        },
        date: {
            type: DataTypes.DATE
        }
    });
}