import { productReducer } from "../product/state/product.reducer";
import { ProductState } from "../product/state/product.state";

export interface AppState{
    products:ProductState;
}

export const appReducer = {
    products: productReducer
}