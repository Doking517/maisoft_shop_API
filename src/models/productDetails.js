const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');

const insertProductDetail = (data, callback) => {
  db.query(
    'INSERT INTO `productdetail`(`id`, `size`, `age`, `color`, `brand`, `gender`, `createdAt`, `updatedAt`, `productId`) VALUES(?,?,?,?,?,?,?,?,?)',
    [
      uuidv4(),
      data.size,
      data.age,
      data.color,
      data.brand,
      data.gender,
      new Date(),
      new Date(),
      data.productId,
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

const selectAllProductDetails = (callback) => {
  db.query('SELECT * FROM `productdetail`', (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const selectOneProductDetail = (id, callback) => {
  db.query(
    'SELECT `size`, `age`, `color`, `brand`, `gender`, `createdAt`, `updatedAt`, `productId` FROM `productdetail` WHERE `id`=?',
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

const updateProductDetail = (data, callback) => {
  db.query(
    'UPDATE `productdetail` SET `size`=?,`age`=?,`color`=?,`brand`=?,`gender`=?,`updatedAt`=? WHERE `id`=?',
    [
      data.size,
      data.age,
      data.color,
      data.brand,
      data.gender,
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

const deleteProductDetail = (id, callback) => {
  db.query('DELETE FROM `productdetail` WHERE `id`=?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

module.exports = {
  insertProductDetail,
  selectAllProductDetails,
  selectOneProductDetail,
  updateProductDetail,
  deleteProductDetail,
};
