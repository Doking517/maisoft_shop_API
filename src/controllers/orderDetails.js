const {
  createOrderDetail,
  getOrderDetails,
  getOrderDetail,
  updateOrderDetail,
  deleteOrderDetail,
} = require('../models/orderDetails');

const orderDetailCreation = (req, res) => {
  const data = req.body;
  createOrderDetail(data, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, orderDetail: result });
    }
  });
};

const getAllOrderDetails = (req, res) => {
  getOrderDetails((err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, orderDetails: result });
    }
  });
};

const getOrderDetailById = (req, res) => {
  const id = req.params.id;
  getOrderDetail(id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ succes: 1, orderDetail: result });
    }
  });
};

const orderDetailUpdate = (req, res) => {
  const data = req.body;
  updateOrderDetail(data, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ sucess: 1, orderDetail: result });
    }
  });
};

const orderDetailDelete = (req, res) => {
  const id = req.params.id;
  deleteOrderDetail(id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, orderDetailDeleted: result });
    }
  });
};

module.exports = {
  orderDetailCreation,
  getAllOrderDetails,
  getOrderDetailById,
  orderDetailUpdate,
  orderDetailDelete,
};
