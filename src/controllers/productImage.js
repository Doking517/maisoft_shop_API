const {
  createProductImage,
  selectAllProductImage,
  selectAProductDetail,
  updateProductImage,
  deleteProductImage,
} = require('../models/productImage');

const insertProductImage = (req, res) => {
  const data = req.body;
  createProductImage(data, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, insertedProductImage: result });
    }
  });
};

const getAllProductImage = (req, res) => {
  selectAllProductImage((err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, allProductImages: result });
    }
  });
};

const getProductImageById = (req, res) => {
  const id = req.params.id;
  selectAProductDetail(id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, productImage: result });
    }
  });
};

const producImageUpdate = (req, res) => {
  const data = req.body;
  updateProductImage(data, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, productImageUpdated: result });
    }
  });
};

const productImageDelete = (req, res) => {
  const id = req.params.id;
  deleteProductImage(id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, productImageDeleted: result });
    }
  });
};

module.exports = {
  insertProductImage,
  getAllProductImage,
  getProductImageById,
  producImageUpdate,
  productImageDelete,
};
