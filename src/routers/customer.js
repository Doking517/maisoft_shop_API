const { Router } = require('express');
const {
  getAllCustomers,
  postCustomer,
  getCustumerById,
  custumerUpdate,
  customerDelete,
} = require('../controllers/customer');

const router = Router();

router.get('/', getAllCustomers);

router.post('/', postCustomer);

router.get('/:id', getCustumerById);

router.patch('/', custumerUpdate);
router.delete('/:id', customerDelete);

module.exports = router;
