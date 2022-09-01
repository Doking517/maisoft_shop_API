const {
  createCoupon,
  getOneCoupon,
  getAllCoupon,
  updateCoupon,
  deleteCoupon,
} = require('../models/coupon');

const couponCreate = (req, res) => {
  const data = req.body;
  createCoupon(data, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ succes: 1, coupon: result });
    }
  });
};

const getCouponById = (req, res) => {
  const id = req.params.id;
  getOneCoupon(id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ succes: 1, coupon: result });
    }
  });
};

const getCoupons = (req, res) => {
  getAllCoupon((err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, coupons: result });
    }
  });
};

const couponUpdate = (req, res) => {
  const data = req.body;
  updateCoupon(data, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ succes: 1, coupon: result });
    }
  });
};

const couponDelete = (req, res) => {
  const id = req.params.id;
  deleteCoupon(id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, coupon: result });
    }
  });
};
module.exports = {
  couponCreate,
  getCouponById,
  getCoupons,
  couponUpdate,
  couponDelete,
};
