const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Users = sequelize.define(
    'users', {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,},
        email: {type: DataTypes.STRING, unique: true,},
        password: {type: DataTypes.STRING,},
        role: {type: DataTypes.STRING, defaultValue: "USER"},
    }
)

const Lists = sequelize.define(
    'lists', {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,},
        text: {type: DataTypes.STRING,},
        favourites: {type: DataTypes.BOOLEAN, defaultValue: "false"},
        done: {type: DataTypes.BOOLEAN, defaultValue: "false"},
    }
)

Users.hasMany(Lists)
Lists.belongsTo(Users)

module.exports = {
    Users, Lists
}