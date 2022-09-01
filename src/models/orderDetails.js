const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');

const createOrderDetail = (data, callback) => {
  db.query(
    'INSERT INTO `orderdetail`(`id`, `name`, `price`, `quantity`, `orderId`) VALUES (?,?,?,?,?)',
    [uuidv4(), data.name, data.price, data.quantity, data.orderId],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    }
  );
};

const getOrderDetails = (callback) => {
  db.query('SELECT * FROM `orderdetail`', (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const getOrderDetail = (id, callback) => {
  db.query(
    'SELECT  `name`, `price`, `quantity`, `orderId` FROM `orderdetail` WHERE `id`=?',
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

const updateOrderDetail = (data, callback) => {
  db.query(
    'UPDATE `orderdetail` SET `name`=?,`price`=?,`quantity`=?,`orderId`=? WHERE `id`=?',
    [data.name, data.price, data.quantity, data.orderId, data.id],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    }
  );
};

const deleteOrderDetail = (id, callback) => {
  db.query('DELETE FROM `orderdetail` WHERE `id`=?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

module.exports = {
  createOrderDetail,
  getOrderDetails,
  getOrderDetail,
  updateOrderDetail,
  deleteOrderDetail,
};
