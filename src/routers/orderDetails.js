const { Router } = require('express');
const {
  orderDetailCreation,
  getAllOrderDetails,
  getOrderDetailById,
  orderDetailUpdate,
  orderDetailDelete,
} = require('../controllers/orderDetails');

const router = Router();

router.post('/', orderDetailCreation);
router.get('/', getAllOrderDetails);
router.get('/:id', getOrderDetailById);
router.patch('/', orderDetailUpdate);
router.delete('/:id', orderDetailDelete);

module.exports = router;
