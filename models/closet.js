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
    }
  });
  return Closet;
};