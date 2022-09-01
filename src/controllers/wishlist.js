const { createWishlist ,deleteWishlist,getAwhislist,getAllWishlist} = require('../models/wishlist');

const InsertWishlist = (req, res) => {
  const data = req.body;
  createWishlist(data, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, createdWishlist: result });
    }
  });
};

const dropWishlist =(req,res)=>{
  const id = req.params.id;
  deleteWishlist(id,(err,result)=>{
    if(err){
      console.log(err);
    }else{
      res.json({success:1,deletedWishlist:result});
    }
  });
};

const getWishlistById = (req,res)=>{
  const id = req.params.id;
  getAwhislist(id,(err,result)=>{
    if(err){
      console.log(err);
    }else{
      res.json({success:1,selectedWishlist:result});
    }
  });
};

const getWishlists = (req,res) =>{
  getAllWishlist((err,result)=>{
    if(err){
      console.log(err);
    }else{
      res.json({success:1,AllWishlists:result});
    }
  });
};


module.exports = {
  InsertWishlist,
  dropWishlist,
  getWishlistById,
  getWishlists
};
