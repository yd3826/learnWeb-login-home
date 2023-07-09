import {configureStore} from "@reduxjs/toolkit";
import UserReducer from "../Reducer/user";

// 全局就管理一个store
const store = configureStore({
    reducer:UserReducer
})

export default store;