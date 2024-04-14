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

    });

    fact_board.associate = (models) => {
        fact_board.hasMany(models.comments, {
            onDelete: "cascade", 
        })
    }

    fact_board.associate = (models) => {
        fact_board.hasMany(models.likes, {
            onDelete: "cascade", 
        })
    }

    return fact_board
}