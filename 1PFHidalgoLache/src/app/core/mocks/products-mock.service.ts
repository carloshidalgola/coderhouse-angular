export class ProductsMockService {
  constructor() {}

  getProducts(): Product[] {
    return MY_PRODUCTS_DB;
  }
}

export interface Product {
  id: number;
  name: string;
}

const MY_PRODUCTS_DB: Product[] = [
  {
    id: 1,
    name: 'PS5 false',
  },
  {
    id: 2,
    name: 'PS GAMER false',
  },
  {
    id: 3,
    name: 'PS DEVELOPER false',
  },
];
