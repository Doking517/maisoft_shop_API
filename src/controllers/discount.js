const {
  readDiscounts,
  readOnediscount,
  createOneDiscount,
  deleteDiscount,
  updateDiscount,
} = require('../models/disccount');

const getAllDiscounts = (req, res) => {
  readDiscounts((err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, discount: result });
    }
  });
};

const getAdiscountById = (req, res) => {
  const id = req.params.id;
  readOnediscount(id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, discount: result });
    }
  });
};

const createDiscount = (req, res) => {
  const data = req.body;
  createOneDiscount(data, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, discount: result });
    }
  });
};

const dropDiscount = (req, res) => {
  const id = req.params.id;
  deleteDiscount(id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, discount: result });
    }
  });
};

const discountUpdate = (req, res) => {
  const data = req.body;
  updateDiscount(data, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, discount: result });
    }
  });
};

module.exports = {
  getAllDiscounts,
  getAdiscountById,
  createDiscount,
  dropDiscount,
  discountUpdate,
};
