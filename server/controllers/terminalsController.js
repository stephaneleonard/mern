const User = require('./../models/banksModel');
const Terminal = require('./../models/terminalModel');

exports.getAllTerminals = async (req, res, next) => {
  Terminal.find((err, docs) => {
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

exports.getTerminalsWithin = (req, res, next) => {
  const radius = 100 / 6378.1;
  Terminal.find(
    {
      startLocation: {
        $geoWithin: {
          $centerSphere: [[4.338226318359376, 50.856307750341365], 0.0003104017013079438],
        },
      },
    },
    (err, docs) => {
      res.status(200).json({
        status: 'success',
        results: docs.length,
        data: {
          data: docs,
        },
      });
    }
  );
};
