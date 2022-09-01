const { Router } = require('express');

const {
  getAllDiscounts,
  getAdiscountById,
  createDiscount,
  dropDiscount,
  discountUpdate,
} = require('../controllers/discount');

const router = Router();

router.get('/', getAllDiscounts);
router.get('/:id', getAdiscountById);
router.post('/', createDiscount);
router.delete('/:id', dropDiscount);
router.patch('/', discountUpdate);

module.exports = router;
