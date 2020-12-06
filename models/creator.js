module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Creator', {
        profileUrl : {
            type: DataTypes.STRING,
            allowNull : false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        company: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ifNew: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        ifSubscription: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        tag: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        freezeTableName : true,
        timestamps : false,
    })
}