module.exports = (sequelize, DataTypes) => {
    const comments = sequelize.define("comments", {
        commentText: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        factBoardId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    })
    return comments
}