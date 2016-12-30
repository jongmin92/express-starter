const {User} = require('../models');

const userController = {
  create: (req, res) => {
    User.create({
      userId: 'test_Id',
      name: 'test_name',
      firstName: 'test_first_name',
      lastName: 'test_last_name',
      ageRange: 'test_age_range',
      profileImgSrc: 'test_profile_img_src',
      gender: 'test_gender',
      phone: 'test_phone',
      token: 'test_token',
      device: 'test_device',
    })
      .then(() => {
        res.status(200).json();
      });
  },

  show: (req, res) => {
    User.findAll({})
      .then((rows) => {
        res.status(200).json(rows);
      });
  }
};

module.exports = userController;