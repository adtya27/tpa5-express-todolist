const jwt = require('jsonwebtoken');
const User = require('../models/user');

module.exports = {
  login: async (req, res) => {
    const userLogin = req.body;

    try {
      const user = await User.findOne({ email: userLogin.email });
      if (!user) throw new Error('invalid user');

      if (user.password !== userLogin.password) throw new Error('invalid user');

      const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_KEY);

      res.json({
        message: 'login successful',
        userId: user._id,
        token,
      });
    } catch (error) {
      res.json(error.message);
    }
  },

  regis: async (req, res) => {
    let data = req.body;
    await User.create(data);
    res.json({
      message: 'registarasi berhasil ',
    });
  },
};
