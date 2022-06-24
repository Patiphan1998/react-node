
//กำหนดค่าเริ่มต้นให้ state เช่น เช็คว่าข้อมูลที่ดึงมา error หรือไม่เราก็จะเช็คจาก isRejected
//ซึ่งถ้าเราไม่กำหนด state  เริ่มต้นก็จะไม่มี object ชื่อ isRejected ให้เรียกใช้งาน
const initialState = {
    cars: { data: null, isLoading: true, isRejected: false },
    car: { data: null, isLoading: true, isRejected: false },
    carDelete: { success: false, isLoading: true, isRejected: false },
    carSave: { data: null, isLoading: true, isRejected: false },
}

export default (state = initialState, action) => {
    switch (action.type) {
        //เก็บ state การดึงข้อมูลรถทั้งหมด
        case 'LOAD_CARS_PENDING':
            return { ...state, cars: { data: null, isLoading: true, isRejected: false } }
        case 'LOAD_CARS_SUCCESS':
            return { ...state, cars: { data: action.payload, isLoading: false, isRejected: false } }
        case 'LOAD_CARS_REJECTED':
            return { ...state, cars: { data: action.payload, isLoading: false, isRejected: true } }

        //เก็บ state การดึงข้อมูลรถตาม id ที่ส่งไป
        case 'LOAD_CAR_PENDING':
            return { ...state, car: { data: null, isLoading: true, isRejected: false } }
        case 'LOAD_CAR_SUCCESS':
            return { ...state, car: { data: action.payload, isLoading: false, isRejected: false } }
        case 'LOAD_CAR_REJECTED':
            return { ...state, car: { data: action.payload, isLoading: false, isRejected: true } }

        //เก็บ state การลบข้อมูลรถ
        case 'DELETE_CAR_SUCCESS':
            return { ...state, carDelete: { data: true, isLoading: false, isRejected: false } }
        case 'DELETE_CAR_REJECTED':
            return { ...state, carDelete: { data: action.payload, isLoading: false, isRejected: true } }

        //เก็บ state สถานะการบันทึกข้อมูลรถ
        case 'SAVE_CAR_SUCCESS':
            return { ...state, carSave: { data: null, isLoading: false, isRejected: false } }
        case 'SAVE_CAR_REJECTED':
            return { ...state, carSave: { data: action.payload, isLoading: false, isRejected: true } }

        default:
            return state
    }
}