const { Router } = require('express');

const {
  couponCreate,
  getCouponById,
  getCoupons,
  couponUpdate,
  couponDelete,
} = require('../controllers/coupon');

const router = Router();

router.post('/', couponCreate);
router.get('/:id', getCouponById);
router.get('/', getCoupons);
router.patch('/', couponUpdate);
router.delete('/:id', couponDelete);

module.exports = router;
