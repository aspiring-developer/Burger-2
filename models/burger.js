module.exports = function(sequelize, DataTypes) {
  let Burger = sequelize.define("Burger", {
  burger_name: DataTypes.STRING,
  devoured: DataTypes.BOOLEAN
  /* $$$$$$$$$$ Original below
    text: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
    $$$$$$$$$$ */
  });
  return Burger;
};