const { Router } = require('express');

const {
  createProductDetail,
  getAllProductDetails,
  getProductDetailById,
  productDetailUpdate,
  productDetailDelete,
} = require('../controllers/productDetails');

const router = Router();

router.post('/', createProductDetail);
router.get('/', getAllProductDetails);
router.get('/:id', getProductDetailById);
router.patch('/', productDetailUpdate);
router.delete('/:id', productDetailDelete);

module.exports = router;
