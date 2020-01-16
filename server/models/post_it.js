module.exports = (sequelize, DataTypes) => {
  const Post_it = sequelize.define('Post_it', {
    sex : {
      type : DataTypes.BOOLEAN,
      allowNull : false,
      comment: 'male=>1, female=>0'
    },
    nickname : {
      type : DataTypes.STRING(20),
      allowNull : false
    },
    text : {
      type : DataTypes.STRING(200),
      allowNull : false
    },
    kakao_id : {
      type : DataTypes.STRING,
      allowNull : false
    },
    sold : {
      type : DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue : false
    }
  }, {
    tableName: 'Post_it'
  });
  Post_it.associate = (models) => {
    Post_it.belongsTo(models.User);
    Post_it.belongsTo(models.User, {
      as : 'buyer'
    });
  };
  return Post_it;
}