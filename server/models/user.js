module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    uid : {
      type : DataTypes.STRING,
      allowNull : false
    },
    count : {
      type : DataTypes.INTEGER,
      allowNull : false,
      defaultValue : 0,
      comment: 'count=>3 글 제한'
    },
    auth : {
      type : DataTypes.BOOLEAN,
      allowNull : false,
      defaultValue : false,
      comment: 'true=>관리자, false=>유저'
    }
  }, {
    tableName : 'User'
  });
  User.associate = (models) => {
    User.hasMany(models.Post_it)
  };
  return User;
}