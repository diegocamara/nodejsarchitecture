module.exports = function(sequelize, DataTypes){
  return sequelize.define('user', {
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    firstName:{
      type: DataTypes.STRING,
      field: 'firstName'
      },
    lastName:{
      type: DataTypes.STRING
      }
    },
    {
      freezeTableName: true
    });
}
