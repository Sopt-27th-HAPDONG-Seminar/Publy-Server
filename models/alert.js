module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Alert', {
        alert : {
            type: DataTypes.INTEGER,
            allowNull : false,
        }
    }, {
        freezeTableName : true,
        timestamps : false,
    })
}