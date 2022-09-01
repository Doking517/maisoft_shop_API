const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');

const readOrders = (callback) => {
  db.query('SELECT * FROM `order`', (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const readOneOrder = (id, callback) => {
  db.query(
    'SELECT `amount`, `address`, `tax`, `email`, `status`, `createdAt`, `updatedAt`, `customerId` FROM `order` WHERE `id`=?',
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

const createOrder = (data, callback) => {
  db.query(
    'INSERT INTO `order`(`id`, `amount`, `address`, `tax`, `email`, `status`, `createdAt`, `updatedAt`, `customerId`) VALUES(?,?,?,?,?,?,?,?,?)',
    [
      uuidv4(),
      data.amount,
      data.address,
      data.tax,
      data.email,
      data.status,
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

const deleteOrder = (id, callback) => {
  db.query('DELETE FROM `order` WHERE id=?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const updateOder = (data, callback) => {
  db.query(
    'UPDATE `order` SET `amount`=?,`address`=?,`tax`=?,`email`=?,`status`=?,`updatedAt`=? WHERE `id`=?',
    [
      data.amount,
      data.address,
      data.tax,
      data.email,
      data.status,
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

module.exports = {
  readOrders,
  readOneOrder,
  createOrder,
  deleteOrder,
  updateOder,
};
