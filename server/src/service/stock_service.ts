import type { StockCreateDTO } from '../model/dto/stock_create_dto.js';
import type { Product } from '../model/interfaces/product.js';
import type { Stock } from '../model/interfaces/stock.js';
import { products } from '../repository/product_repository.js';
import { stocks } from '../repository/stock_repository.js';

export const getStocks = () => {
    return stocks;
};

export const createStock = (stock: StockCreateDTO) => {
    const nextIndex = getStocks();

    const newStock: Stock = {
        id: nextIndex.length + 1,
        city: stock.city,
        products: [],
        lastUpdated: new Date(),
    };

    stocks.push(newStock);
    return `Stock with ID ${newStock.id} created`;
};

export const updateStock = (id: number, updatedStock: Stock) => {
    const index = stocks.findIndex((stock) => stock.id === id);
    if (index === -1) {
        return `Stock with ID ${id} not found`;
    }

    stocks[index] = { ...stocks[index], ...updatedStock };
    return `Stock with ID ${id} updated`;
};

export const getStockByCity = (city: string): Stock | string => {
    const stock = stocks.find((stock) => stock.city === city);
    if (!stock) {
        return `No stocks found in ${city}`;
    }

    return stock;
};

export const getStockById = (id: number): Stock | string => {
    const stock = stocks.find((stock) => stock.id === id);
    if (!stock) {
        return `Stock with ID ${id} not found`;
    }

    return stock;
};
