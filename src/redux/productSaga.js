import {put, takeEvery} from 'redux-saga/effects'
import { GET_PRODUCT_LIST, SET_PRODUCT_LIST } from './constant'

function* getProducts() {
    let data = yield fetch('http://localhost:3500/product')
    data = yield data.json() 
    console.warn("api called ", data)

    yield put({type: SET_PRODUCT_LIST, data})

    // console.warn("call api here")
}

function* Productsaga() {
    yield takeEvery(GET_PRODUCT_LIST, getProducts)

}

export default Productsaga