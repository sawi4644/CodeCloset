module.exports = function(sequelize, DataTypes) {
  const Size = sequelize.define("Size", {
    // The email cannot be null, and must be a proper email before creation
    size: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Size;
};
