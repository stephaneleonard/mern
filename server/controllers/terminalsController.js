const User = require('./../models/banksModel');
const terminal = require('./../models/terminalModel');

exports.getAllTerminals = async (req, res, next) => {
    terminal.find((err, docs) => {
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
