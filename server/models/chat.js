module.exports = (sequelize, DataTypes) => {
    
    const chat = sequelize.define("chat", {
        chatText:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    })

    return chat
}