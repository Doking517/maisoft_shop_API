const { Router } = require('express');
const { InsertWishlist ,dropWishlist} = require('../controllers/wishlist');
const router = Router();

router.post('/', InsertWishlist);
router.delete('/:id',dropWishlist);

module.exports = router;
