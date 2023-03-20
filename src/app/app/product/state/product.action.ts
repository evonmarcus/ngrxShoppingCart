import { createAction, props } from "@ngrx/store";
import { Product } from "../../model/product.model";

export const ADD_PRODUCT_ACTION= 'AddProductToList';
export const REMOVE_PRODUCT_ACTION= 'RemoveProductFromList';

export const addProduct= createAction(ADD_PRODUCT_ACTION, props<{product:Product}>());
export const removeProduct= createAction(REMOVE_PRODUCT_ACTION, props<{product:Product}>());