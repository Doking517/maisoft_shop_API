const {
  createProductCategory,
  getProductCategories,
  getProductCategory,
  updateProductCategory,
  deleteProductCategory,
} = require('../models/productCategory');

const productCategoryCreation = (req, res) => {
  const data = req.body;
  createProductCategory(data, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, productCategory: result });
    }
  });
};

const getAllProductCategory = (req, res) => {
  getProductCategories((err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, productCategory: result });
    }
  });
};

const getOneProductCategory = (req, res) => {
  const id = req.params.id;
  getProductCategory(id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, productCategory: result });
    }
  });
};

const productCategoryUpdate = (req, res) => {
  const data = req.body;
  updateProductCategory(data, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, producCategory: result });
    }
  });
};

const productCategoryDelete = (req, res) => {
  const id = req.params.id;
  deleteProductCategory(id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, productCategoryDeleted: result });
    }
  });
};

module.exports = {
  productCategoryCreation,
  getAllProductCategory,
  getOneProductCategory,
  productCategoryUpdate,
  productCategoryDelete,
};
