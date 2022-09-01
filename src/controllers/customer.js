const {
  readCustomer,
  createCustomer,
  readCustomerById,
  updateCustomer,
  deleteCustomer,
} = require('../models/customer');

const getAllCustomers = (req, res) => {
  readCustomer((err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ succes: 1, customers: result });
    }
  });
};
//create a customer
const postCustomer = (req, res) => {
  const data = req.body;
  createCustomer(data, (err, result) => {
    if (err) {
      res.json({ success: 0, err });
    } else if (result.affectedRows) {
      res.json({ succes: 1, message: 'CUSTOMER CREATED!' });
    }
  });
};
//get a custumer
const getCustumerById = (req, res) => {
  const id = req.params.id;
  readCustomerById(id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ succes: 1, customer: result });
    }
  });
};

//update customer

const custumerUpdate = (req, res) => {
  const data = req.body;
  updateCustomer(data, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ succes: 1, customer: result });
    }
  });
};

const customerDelete = (req, res) => {
  const id = req.params.id;
  deleteCustomer(id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ succes: 1, customer: result });
    }
  });
};

module.exports = {
  getAllCustomers,
  postCustomer,
  getCustumerById,
  custumerUpdate,
  customerDelete,
};
