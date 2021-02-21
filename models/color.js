module.exports = function(sequelize, DataTypes) {
  const Color = sequelize.define("Color", {
    // The email cannot be null, and must be a proper email before creation
    color: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Color;
};
