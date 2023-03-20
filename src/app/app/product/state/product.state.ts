import { Product } from "../../model/product.model";

export interface ProductState{
    products:Product[];
}

export const initialState : ProductState = {
    products : []
}