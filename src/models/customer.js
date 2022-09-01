const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');

const readCustomer = (callback) => {
  db.query('SELECT * FROM customer', (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const createCustomer = (data, callback) => {
  db.query(
    'INSERT INTO customer(id,firstName,lastName,email,hash,phone,image,status,createdAt,updatedAt) VALUES(?,?,?,?,?,?,?,?,?,?)',
    [
      uuidv4(),
      data.firstName,
      data.lastName,
      data.email,
      data.hash,
      data.phone,
      data.image,
      data.status || 'ACTIVE',
      new Date(),
      new Date(),
    ],
    (err, res) => {
      if (err && err.errno === 1062) {
        callback(
          {
            errCode: 'CUSTOMER_EXIST',
          },
          null
        );
      } else {
        callback(null, res);
      }
    }
  );
};

const readCustomerById = (id, callback) => {
  db.query('SELECT * FROM customer WHERE id=?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const updateCustomer = (data, callback) => {
  db.query(
    'UPDATE customer SET firstName=?,lastName=?,image=?,hash=? WHERE id=?',
    [data.firstName, data.lastName, data.image, data.hash, data.id],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    }
  );
};

const deleteCustomer = (id, callback) => {
  db.query('DELETE FROM customer WHERE id=?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

module.exports = {
  readCustomer,
  createCustomer,
  readCustomerById,
  updateCustomer,
  deleteCustomer,
};
