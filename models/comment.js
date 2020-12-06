module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Comment', {
        title : {
            type: DataTypes.STRING,
            allowNull : false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        articleImageUrl: {
            type: DataTypes.STRING,
            allowNull: false
        },
        articleTitle: {
            type: DataTypes.STRING,
            allowNull: false
        },
        articleSource: {
            type: DataTypes.STRING,
            allowNull: false
        },
        saveCount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        createdTime: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        freezeTableName : true,
        timestamps : false,
    })
}