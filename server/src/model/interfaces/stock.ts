import type { Product } from './product.js';

export interface Stock {
    id: number;
    products: Product[];
    city: string;
    lastUpdated: Date;
}
