require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./src/config/db');
const env = require('./src/config/env');
const customerRouters = require('./src/routers/customer');
const discountRouters = require('./src/routers/discount');
const orderRouters = require('./src/routers/order');
const couponRouters = require('./src/routers/coupon');
const orderDetailsRouter = require('./src/routers/orderDetails');
const productCategoryRouter = require('./src/routers/productCategory');
const productRouter = require('./src/routers/product');
const productDetailsRouter = require('./src/routers/productDetails');
const productImageRouter = require('./src/routers/productImage');
const wishlistRouter = require('./src/routers/wihslist');
const port = process.env.PORT;

console.log(env);
db.connect((err) => {
  if (err) {
    console.log('ther is an error' + err);
  } else {
    console.log('DB connected!!');
  }
});

app.use(express.json());
app.use('/api/customer', customerRouters);
app.use('/api/discount', discountRouters);
app.use('/api/order', orderRouters);
app.use('/api/coupon', couponRouters);
app.use('/api/orderDetails', orderDetailsRouter);
app.use('/api/productCategory', productCategoryRouter);
app.use('/api/product', productRouter);
app.use('/api/productDetails', productDetailsRouter);
app.use('/api/productImage', productImageRouter);
app.use('/api/wishlist', wishlistRouter);

app.get('/', (req, res) => {
  res.json({
    success: 1,
    message: 'done',
  });
});

app.post('/', (req, res) => {
  res.json({
    succes: 1,
    message: 'customer created',
  });
});

app.listen(port, () => {
  console.log(`Server up and running on port ${port}`);
});
