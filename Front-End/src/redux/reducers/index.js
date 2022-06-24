import { combineReducers } from 'redux'
//redux-form จะทำการเก็บ state และมี reducer ในตัวของมันเอง
//ดังนั้นเวลาเราจะใช้งาน redux-form เราต้องทำเหมือนว่ามันคือ reducer ตัวหนึ่งด้วยครับ
import { reducer as formReducer } from 'redux-form'

import authReducers from './authReducers'
import userReducers from './userReducers'
import carReducers from './carReducers'
const rootReducers = combineReducers({
    form: formReducer,  //กำหนดชื่อ reducer ไว้ว่าชื่อ form นะครับตามคำแนะนำของ redux-form
    authReducers,
    userReducers,
    carReducers,
})

export default rootReducers