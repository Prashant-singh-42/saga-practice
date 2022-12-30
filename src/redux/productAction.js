import { GET_PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";

export const getProducts = () => {
    console.warn('product action is called')
    return {
        type: GET_PRODUCT_LIST,
    }
}

// export const setProducts = (data) => {
//     console.warn('setproduct action is called', data)
//     return {
//         type: SET_PRODUCT_LIST,
//         data
//     }
// }