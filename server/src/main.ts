import express from 'express';
import { stockRouter } from './router/stock_router.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/stock', stockRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
