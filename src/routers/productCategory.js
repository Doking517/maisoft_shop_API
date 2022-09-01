const { Router } = require('express');

const {
  productCategoryCreation,
  getAllProductCategory,
  getOneProductCategory,
  productCategoryUpdate,
  productCategoryDelete,
} = require('../controllers/productCategory');

const router = Router();

router.post('/', productCategoryCreation);
router.get('/', getAllProductCategory);
router.get('/:id', getOneProductCategory);
router.patch('/', productCategoryUpdate);
router.delete('/:id', productCategoryDelete);

module.exports = router;
