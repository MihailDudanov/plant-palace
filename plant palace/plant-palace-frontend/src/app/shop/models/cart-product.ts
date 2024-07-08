export interface ICartProduct {
    id: number;
    name: string;
    description: string;
    itemPrice: number;
    total: number;
    selectedQuantity: number;
    inStock: number;
    imageUrl: string;
}