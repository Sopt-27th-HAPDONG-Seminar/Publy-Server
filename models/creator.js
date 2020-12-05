module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Creator', {
        profileUrl : {
            type: DataTypes.String,
            allowNull : false,
        },
        name: {
            type: DataTypes.String,
            allowNull: false
        },
        company: {
            type: DataTypes.String,
            allowNull: false
        },
        role: {
            type: DataTypes.String,
            allowNull: false
        },
        ifNew: {
            type: DataTypes.Int,
            allowNull: false
        },
        ifSubscription: {
            type: DataTypes.Int,
            allowNull: false
        },
        tag: {
            type: DataTypes.String,
            allowNull: false
        }
    }, {
        freezeTableName : true,
        timestamps : false,
    })
}