const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');

const createWishlist = (data, callback) => {
  db.query(
    'INSERT INTO `wishlist`(`id`, `customerId`, `productId`) VALUES (?,?,?)',
    [uuidv4(), data.customerId, data.productId],
    (err, res) => {
      if (err && err.errno === 1062) {
        callback(
          {
            errCode: 'WISHLIST_EXIST',
          },
          null
        );
      } else {
        callback(null, res);
      }
    }
  );
};

const deleteWishlist =(id,callback) =>{
  db.query('DELETE FROM `wishlist` WHERE `id`=?',[id],(err,res)=>{
    if(err){
      callback({
        errorCode: 'WISHLIST_ALREADY_DELETED'
      },null);
    }else{
      callback(null,res);
    }
  });
};


module.exports = {
  createWishlist,
  deleteWishlist
};
