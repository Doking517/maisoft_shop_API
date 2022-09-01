const { Router } = require('express');
const {
  insertProductImage,
  getAllProductImage,
  getProductImageById,
  producImageUpdate,
  productImageDelete,
} = require('../controllers/productImage');

const router = Router();

router.post('/', insertProductImage);
router.get('/', getAllProductImage);
router.get('/:id', getProductImageById);
router.patch('/', producImageUpdate);
router.delete('/:id', productImageDelete);

module.exports = router;
