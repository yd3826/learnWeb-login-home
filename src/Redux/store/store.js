import {configureStore} from "@reduxjs/toolkit";
import UserReducer from "../Reducer/user";
import LogReducer from "../Reducer/IsLogin";
import {combineReducers} from "@reduxjs/toolkit";

// 全局就管理一个store
const store = configureStore({
    reducer:combineReducers({
        UserReducer,
        LogReducer,
        })
})

export default store;