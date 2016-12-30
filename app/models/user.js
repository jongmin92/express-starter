module.exports = function (sequelize, DataTypes) {
  const user = sequelize.define('User', {
    userId: {field: 'user_id', type: DataTypes.STRING(30), unique: true, allowNull: false,},
    name: {field: 'name', type: DataTypes.STRING(30), allowNull: false},
    firstName: {field: 'first_name', type: DataTypes.STRING(30), allowNull: false},
    lastName: {field: 'last_name', type: DataTypes.STRING(30), allowNull: false},
    ageRange: {field: 'age_range', type: DataTypes.STRING(30), allowNull: false},
    profileImgSrc: {field: 'profile_img_src', type: DataTypes.STRING(255)},
    gender: {field: 'gender', type: DataTypes.STRING(10), allowNull: false},
    phone: {field: 'phone', type: DataTypes.STRING(20)},
    token: {field: 'token', type: DataTypes.STRING(255), allowNull: false},
    device: {field: 'first_name', type: DataTypes.STRING(100)}
  }, {
    // don't use camelcase for automatically added attributes but underscore style
    // so updatedAt will be updated_at
    underscored: true,

    // disable the modification of tablenames; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    // if you don't want that, set the following
    freezeTableName: true,

    // define the table's name
    tableName: 'user'
  });

  return user;
};