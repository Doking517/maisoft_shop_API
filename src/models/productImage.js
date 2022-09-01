const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');

const createProductImage = (data, callback) => {
  db.query(
    'INSERT INTO `productimage`(`id`, `url`, `createdAt`, `updatedAt`, `productId`) VALUES (?,?,?,?,?)',
    [uuidv4(), data.url, new Date(), new Date(), data.productId],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    }
  );
};
const selectAllProductImage = (callback) => {
  db.query('SELECT * FROM `productimage`', (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const selectAProductDetail = (id, callback) => {
  db.query(
    'SELECT  `url`, `createdAt`, `updatedAt`, `productId` FROM `productimage` WHERE `id`=?',
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

const updateProductImage = (data, callback) => {
  db.query(
    'UPDATE `productimage` SET `url`=?,`updatedAt`=? WHERE `id`=?',
    [data.url, new Date(), data.id],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    }
  );
};

const deleteProductImage = (id, callback) => {
  db.query('DELETE FROM `productimage` WHERE `id`=?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

module.exports = {
  createProductImage,
  selectAllProductImage,
  selectAProductDetail,
  updateProductImage,
  deleteProductImage,
};
