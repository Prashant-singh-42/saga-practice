import { ADD_TO_CART } from "./constant"
import { REMOVE_FROM_CART } from "./constant"
import { EMPTY_CART } from "./constant"


export const cartData = (data = [], action) => {

    // if (action.type === ADD_TO_CART){
    //     console.warn('reducer is called', action, data)
    //     return action.data
    // }else {
    //     return 'no matching reducer found'
    // }
    
    switch (action.type) {
        case ADD_TO_CART:
            console.log('reducer is called', action.data)
            return [action.data, ...data]
        case REMOVE_FROM_CART:
            const removedData = data.filter(item=>{
                return item.id != action.data
            })
            return removedData
        case EMPTY_CART:
            return []
        default:
            return data
    }
}