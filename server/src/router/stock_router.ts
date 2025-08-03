import e, { type Request, type Response } from 'express';
import { createStock, getStocks } from '../service/stock_service.js';
import type { StockCreateDTO } from '../model/dto/stock_create_dto.js';

const router = e.Router();
router.use(e.json());

router.get('/all', (_req, res) => {
    res.status(200).json(getStocks());
});

router.post('/', async (req: Request, res: Response) => {
    try {
        const data: StockCreateDTO = req.body;

        if (!data || typeof data.city !== 'string' || data.city.trim() === '') {
            return res.status(400).json({ error: 'Invalid request body in stock creation' });
        }

        const createdStock = await createStock(data);
        return res.status(201).json(createdStock);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server errror' });
    }
});

router.put('find/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    res.send(`Stock with ID ${id} updated`);
});

export { router as stockRouter };
