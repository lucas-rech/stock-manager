import express from 'express';
import dotenv from 'dotenv';
import { stockRouter } from './router/stock_router.js';
import { productRouter } from './router/product_router.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/stock', stockRouter);
app.use('/product', productRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
