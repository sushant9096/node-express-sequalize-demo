const {Sequelize} = require("sequelize");
const {db} = require("../configs");

const sequelize = new Sequelize(db.NAME, db.USER, db.PASS, {
    host: db.HOST,
    port: db.PORT,
    dialect: db.DIALECT,
});

const modelDefiners = [
    require('./wholesaler.model'),
    require('./retailer.model'),
    require('./stock.model')
];

for (let modelDefiner of modelDefiners) {
    modelDefiner(sequelize)
}

const {wholesaler, retailer} = sequelize.models;

wholesaler.belongsToMany(retailer, {
    through: 'wholesaler_retailer'
})

retailer.belongsToMany(wholesaler, {
    through: 'wholesaler_retailer'
})

module.exports = sequelize;