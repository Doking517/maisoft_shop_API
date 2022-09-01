const { Router } = require('express');

const router = Router();

const {
  orderCreate,
  readAllOrders,
  readOderById,
  dropOder,
  oderUpdate,
} = require('../controllers/order');

router.post('/', orderCreate);
router.get('/:id', readOderById);
router.get('/', readAllOrders);
router.delete('/:id', dropOder);
router.patch('/', oderUpdate);

module.exports = router;
