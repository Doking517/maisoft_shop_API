const {
  insertProductDetail,
  selectAllProductDetails,
  selectOneProductDetail,
  updateProductDetail,
  deleteProductDetail,
} = require('../models/productDetails');

const createProductDetail = (req, res) => {
  const data = req.body;
  insertProductDetail(data, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, createdProductDetail: result });
    }
  });
};

const getAllProductDetails = (req, res) => {
  selectAllProductDetails((err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, allProductDetail: result });
    }
  });
};

const getProductDetailById = (req, res) => {
  const id = req.params.id;
  selectOneProductDetail(id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, selectedProducDetail: result });
    }
  });
};

const productDetailUpdate = (req, res) => {
  const data = req.body;
  updateProductDetail(data, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, updatedProductDetail: result });
    }
  });
};

const productDetailDelete = (req, res) => {
  const id = req.params.id;
  deleteProductDetail(id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, producDetailDeleted: result });
    }
  });
};
module.exports = {
  createProductDetail,
  getAllProductDetails,
  getProductDetailById,
  productDetailUpdate,
  productDetailDelete,
};
