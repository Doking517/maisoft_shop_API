const { Router } = require('express');
const { InsertWishlist ,dropWishlist,getWishlistById ,getWishlists} = require('../controllers/wishlist');
const router = Router();

router.post('/', InsertWishlist);
router.delete('/:id',dropWishlist);
router.get('/:id',getWishlistById);
router.get('/',getWishlists);

module.exports = router;
