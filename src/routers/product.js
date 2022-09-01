const { Router } = require('express');

const {
  createProduct,
  getAllProduct,
  getProductById,
  productUpdate,
  productDelete,
} = require('../controllers/product');

const router = Router();

router.post('/', createProduct);
router.get('/', getAllProduct);
router.get('/:id', getProductById);
router.patch('/', productUpdate);
router.delete('/:id', productDelete);

module.exports = router;
