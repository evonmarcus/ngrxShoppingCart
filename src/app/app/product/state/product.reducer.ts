import { createReducer, on } from "@ngrx/store";
import { addProduct, removeProduct } from "./product.action";
import { initialState } from "./product.state";

const _productReducer = createReducer(initialState, on(addProduct,(state,action)=> {
    let product= {...action.product};
    product.id= state.products.length+1;
    return{
        ...state,
        products:[...state.products,product]
    }
}),on(removeProduct,(state,action)=>{
    return{
        ...state,
        products:state.products.filter(element => element != action.product)
    }
}));

export function productReducer(state:any,action:any){
    return _productReducer(state,action);
}