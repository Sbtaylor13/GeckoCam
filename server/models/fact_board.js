module.exports = (sequelize, DataTypes) => {
    
    const fact_board = sequelize.define("fact_board", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fact: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    })

    return fact_board
}