import e, { type Request, type Response } from 'express';
import { createProduct, getProductsByStockId } from '../service/product_service.js';
import type { ProductCreateDTO } from '../model/dto/product_create_dto.js';

const router = e.Router();
router.use(e.json());

router.post('/', async (req: Request<{}, {}, ProductCreateDTO>, res: Response) => {
    try {
        const data = req.body;

        if (!data) {
            return res.status(400).json({ error: 'Invalid request body in product creation' });
        }

        await createProduct(data);
        return res.status(201).json();
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server errror' });
    }
});

router.get('/stock/:stockId', (req: Request<{ stockId: string }>, res: Response) => {
    const stockId = parseInt(req.params.stockId, 10);

    if (isNaN(stockId)) {
        return res.status(400).json({ error: 'Invalid stock id' });
    }

    const products = getProductsByStockId(stockId);
    return res.status(200).json(products);
});

export { router as productRouter };
