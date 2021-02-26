module.exports = function(sequelize, DataTypes) {
  const Closet = sequelize.define("Closet", {
    item: {
      type: DataTypes.STRING,
      allowNull: false
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false
    },
    size: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    imgFileName: {
      type: DataTypes.STRING,
      allowNull: false
    
    },
    // userID
  });
  Closet.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Closet.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Closet;
};


