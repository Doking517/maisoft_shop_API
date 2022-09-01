const {
  insertProduct,
  selectAllProduct,
  selectOneProduct,
  updateProduct,
  deleteProduct,
} = require('../models/product');

const createProduct = (req, res) => {
  const data = req.body;
  insertProduct(data, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, product: result });
    }
  });
};

const getAllProduct = (req, res) => {
  selectAllProduct((err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, selectedProducts: result });
    }
  });
};

const getProductById = (req, res) => {
  const id = req.params.id;
  selectOneProduct(id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, selectedProduct: result });
    }
  });
};

const productUpdate = (req, res) => {
  const data = req.body;
  updateProduct(data, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, updatedProduct: result });
    }
  });
};

const productDelete = (req, res) => {
  const id = req.params.id;
  deleteProduct(id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, deletedProduct: result });
    }
  });
};
module.exports = {
  createProduct,
  getAllProduct,
  getProductById,
  productUpdate,
  productDelete,
};
