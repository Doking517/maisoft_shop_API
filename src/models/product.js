const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');

const insertProduct = (data, callback) => {
  db.query(
    'INSERT INTO `product`(`id`, `name`, `shortDesc`, `longDesc`, `image`, `price`, `quantity`, `createdAt`, `UpdatedAt`, `productCategoryId`, `discountId`) VALUES (?,?,?,?,?,?,?,?,?,?,?)',
    [
      uuidv4(),
      data.name,
      data.shortDesc,
      data.longDesc,
      data.image,
      data.price,
      data.quantity,
      new Date(),
      new Date(),
      data.productCategoryId,
      data.discountId,
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

const selectAllProduct = (callback) => {
  db.query('SELECT * FROM `product`', (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const selectOneProduct = (id, callback) => {
  db.query('SELECT * FROM `product` WHERE `id`=?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const updateProduct = (data, callback) => {
  db.query(
    'UPDATE `product` SET `name`=?,`shortDesc`=?,`longDesc`=?,`image`=?,`price`=?,`quantity`=?,`UpdatedAt`=? WHERE `id`=?',
    [
      data.name,
      data.shortDesc,
      data.longDesc,
      data.image,
      data.price,
      data.quantity,
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

const deleteProduct = (id, callback) => {
  db.query('DELETE FROM `product` WHERE `id`=?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

module.exports = {
  insertProduct,
  selectAllProduct,
  selectOneProduct,
  updateProduct,
  deleteProduct,
};
