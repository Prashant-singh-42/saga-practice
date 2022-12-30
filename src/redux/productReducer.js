import { GET_PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";

export const productData = (data = [], action) => {
    switch (action.type) {
        // case GET_PRODUCT_LIST:
        //     console.log("set reducer is called", action.data)
        //     return [action.data, ...data]
        case SET_PRODUCT_LIST:
            console.log("get reducer is called", action.data)
            return [...action.data]
        default:
            return data
    }
}