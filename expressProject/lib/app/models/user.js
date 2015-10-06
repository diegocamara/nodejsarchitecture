"use strict"

module.exports = function(sequelize, DataTypes){
  var User = sequelize.define('User', {
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    firstName:{
      type: DataTypes.STRING,
      field: 'FIRSTNAME'
      },
    lastName:{
      type: DataTypes.STRING,
      field: 'LASTNAME'
      }
    },
    {
      freezeTableName: true
    });
    return User;
};
