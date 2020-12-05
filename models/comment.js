module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Comment', {
        title : {
            type: DataTypes.String,
            allowNull : false,
        },
        description: {
            type: DataTypes.String,
            allowNull: false
        },
        articleImageUrl: {
            type: DataTypes.String,
            allowNull: false
        },
        articleTitle: {
            type: DataTypes.String,
            allowNull: false
        },
        articleSource: {
            type: DataTypes.String,
            allowNull: false
        },
        saveCount: {
            type: DataTypes.Int,
            allowNull: false
        },
        createdTime: {
            type: DataTypes.String,
            allowNull: false
        }
    }, {
        freezeTableName : true,
        timestamps : false,
    })
}