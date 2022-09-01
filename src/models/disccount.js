const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');

const readDiscounts = (callback) => {
  db.query('SELECT * FROM discount', (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const readOnediscount = (id, callback) => {
  db.query('SELECT * FROM discount WHERE id=?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const createOneDiscount = (data, callback) => {
  db.query(
    // 'INSERT INTO discount(id,name,desc,image,amount,createdAt,updatedAt) VALUES(?,?,?,?,?,?,?)',
    'INSERT INTO `discount` (`id`, `name`, `desc`, `image`, `amount`, `createdAt`, `updatedAt`) VALUES(?,?,?,?,?,?,?)',
    [
      uuidv4(),
      data.name,
      data.desc,
      data.image,
      data.amount,
      new Date(),
      new Date(),
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

const deleteDiscount = (id, callback) => {
  db.query('DELETE FROM discount WHERE id=?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const updateDiscount = (data, callback) => {
  db.query(
    'UPDATE `discount` SET `name` =?, `desc` = ?, `image` = ?, `amount` = ? ,`updatedAt` =? WHERE `id` =?',
    // 'UPDATE discount SET name=?,desc=?,image=?,amount=?,updatedAt=? WHERE id=?',
    [data.name, data.desc, data.image, data.amount, new Date(), data.id],
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
  readDiscounts,
  readOnediscount,
  createOneDiscount,
  deleteDiscount,
  updateDiscount,
};
