const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');

const createProductCategory = (data, callback) => {
  db.query(
    'INSERT INTO `productcategory`(`id`, `name`, `desc`, `image`, `createdAt`, `updatedAt`) VALUES (?,?,?,?,?,?)',
    [uuidv4(), data.name, data.desc, data.image, new Date(), new Date()],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    }
  );
};

const getProductCategories = (callback) => {
  db.query('SELECT * FROM `productcategory`', (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const getProductCategory = (id, callback) => {
  db.query(
    'SELECT  `name`, `desc`, `image`, `createdAt`, `updatedAt` FROM `productcategory` WHERE `id`=?',
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

const updateProductCategory = (data, callback) => {
  db.query(
    'UPDATE `productcategory` SET `name`=?,`desc`=?,`image`=?,`updatedAt`=? WHERE `id`=?',
    [data.name, data.desc, data.image, new Date(), data.id],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    }
  );
};

const deleteProductCategory = (id, callback) => {
  db.query('DELETE  FROM `productcategory` WHERE `id`=?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

module.exports = {
  createProductCategory,
  getProductCategories,
  getProductCategory,
  updateProductCategory,
  deleteProductCategory,
};
