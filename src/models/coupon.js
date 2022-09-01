const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');

const createCoupon = (data, callback) => {
  db.query(
    'INSERT INTO `coupon`(`id`, `code`, `amount`, `status`, `expireAt`, `count`, `createdAt`, `updatedAt`, `customerId`) VALUES (?,?,?,?,?,?,?,?,?)',
    [
      uuidv4(),
      data.code,
      data.amount,
      data.status,
      data.expireAt,
      data.count,
      new Date(),
      new Date(),
      data.customerId,
    ],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    }
  );
};

const getOneCoupon = (id, callback) => {
  db.query(
    'SELECT  `code`, `amount`, `status`, `expireAt`, `count`, `createdAt`, `updatedAt`, `customerId` FROM `coupon` WHERE `id`=?',
    [id],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    }
  );
};

const getAllCoupon = (callback) => {
  db.query('SELECT * FROM `coupon`', (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const updateCoupon = (data, callback) => {
  db.query(
    'UPDATE `coupon` SET `code`=?,`amount`=?,`status`=?,`expireAt`=?,`count`=?,`updatedAt`=? WHERE `id`=?',
    [
      data.code,
      data.amount,
      data.status,
      data.expireAt,
      data.count,
      new Date(),
      data.id,
    ],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    }
  );
};

const deleteCoupon = (id, callback) => {
  db.query('DELETE FROM `coupon` WHERE `id`=?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

module.exports = {
  createCoupon,
  getOneCoupon,
  getAllCoupon,
  updateCoupon,
  deleteCoupon,
};
