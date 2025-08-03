import { products } from '../repository/product_repository.js';
import type { Product } from '../model/interfaces/product.js';
import { getStockById } from './stock_service.js';

export const createProduct = (product: Product) => {
    if (getStockById(product.stockId) === `Stock with ID ${product.stockId} not found`) {
        return `Cannot create product: Stock with ID ${product.stockId} does not exist`;
    }

    products.push(product);
};

export const getProductsByStockId = (stockId: number): Product[] | string => {
    const stockProducts = products.filter((product) => product.stockId === stockId);
    if (stockProducts.length === 0) {
        return `No products found for stock with ID ${stockId}`;
    }

    return stockProducts;
};

export const updateProduct = (id: number, updatedProduct: Product) => {
    if (getStockById(updatedProduct.stockId) === `Stock with ID ${updatedProduct.stockId} not found`) {
        return `Cannot update product: Stock with ID ${updatedProduct.stockId} does not exist`;
    }
    const index = products.findIndex((product) => product.id === id);
    if (index === -1) {
        return `Product with ID ${id} not found`;
    }

    products[index] = { ...products[index], ...updatedProduct };
};
