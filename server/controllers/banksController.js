const User = require('./../models/banksModel');
const Banks = require('./../models/banksModel');

exports.getAllBanks = async (req, res, next) => {
  User.find((err, docs) => {
    if (!docs) {
      return res.status(404).json({
        status: 'failed',
      });
    }
    res.status(200).json({
      status: 'success',
      data: {
        docs,
      },
    });
  });
};
