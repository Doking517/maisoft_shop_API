const {
  createOrder,
  readOrders,
  readOneOrder,
  deleteOrder,
  updateOder,
} = require('../models/order');

const orderCreate = (req, res) => {
  const data = req.body;
  createOrder(data, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, order: result });
    }
  });
};

const readAllOrders = (req, res) => {
  readOrders((err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, orders: result });
    }
  });
};

const readOderById = (req, res) => {
  const id = req.params.id;
  readOneOrder(id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, order: result });
    }
  });
};

const dropOder = (req, res) => {
  const id = req.params.id;
  deleteOrder(id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ succes: 1, order: result });
    }
  });
};

const oderUpdate = (req, res) => {
  const data = req.body;
  updateOder(data, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ succes: 1, order: result });
    }
  });
};

module.exports = {
  orderCreate,
  readAllOrders,
  readOderById,
  dropOder,
  oderUpdate,
};
