// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import Productsaga from "./productSaga";
import rootReducer from "./rootReducer";
import createSagaMiddleware from "@redux-saga/core";

const sagaMiddleWare = createSagaMiddleware()

const store = configureStore(
    {
        reducer: rootReducer,
        middleware: ()=> [sagaMiddleWare]
    }
)

sagaMiddleWare.run(Productsaga)

export default store