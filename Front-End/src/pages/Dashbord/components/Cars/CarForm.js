import React, { Component } from 'react'
import { Button, ModalBody, ModalFooter } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import renderField from '../../../../Utils/renderFields'
import renderBrand from "../../../../Utils/renderBrands";
import renderGeneration from "../../../../Utils/renderGeneration";
import renderGear from "../../../../Utils/renderGear";
import renderEngine from "../../../../Utils/renderEngine";
import renderColor from "../../../../Utils/renderColor";
import renderCarType from "../../../../Utils/renderCarType";
import renderID_type from "../../../../Utils/renderID_type";


class CarForm extends Component {
    componentDidMount() {
        //เรียกใช้ฟังก์ชันในการกำหนด value ให้กับ textbox และ control ต่างๆ
        this.handleInitialize()
    }

    //กำหนดค่า value ให้กับ textbox หรือ control ต่างๆ ในฟอร์ม
    //ถ้าเป็น HTML ธรรมดาก็จะกำหนดเป็น value="xxx" แต่สำหรับ redux-form
    //ต้องใช้ initialize ถ้าเป็น redux-form v.6 ต้องประกาศใช้ initialize แต่ v.7 เรียกใช้ได้เลย
    handleInitialize() {
        let initData = {
            "id_car": '',
            "brand": '',
        };

        //ตรวจสอบก่อนว่ามี data.id หรือไม่
        //ถ้าไม่มีแสดงว่าเป็นการสร้างรายการใหม่
        //ถ้ามีแสดงว่ามีการ get ข้อมูลสถานที่จึงเป็นการปรับปรุง
        if (this.props.data.id) {
            initData = this.props.data
        }

        this.props.initialize(initData);
    }

    render() {
        //redux-form จะมี props ที่ชื่อ handleSubmit เพื่อใช้ submit ค่า
        const { handleSubmit, carSave } = this.props
        
        return (
            <div>
                <ModalBody>
                    {/* ตรวจสอบว่ามี err หรือไม่ */}
                    {carSave.isRejected && <div className="alert alert-danger">{carSave.data}</div>}
                    <Field name="brand" component={renderBrand} type="text" label="ยี่ห้อ" title="ยี่ห้อ"/>
                    <Field name="generation" component={renderGeneration} type="text" label="รุ่น" title="รุ่น"/>
                    <Field name="year" component={renderField} type="text" label="ปี" title="ปีรถ"/>
                    <Field name="engine_size" component={renderEngine} type="text" label="ขนาดเครื่องยนต์" title="ขนาดเครื่องยนต์"/>
                    <Field name="car_type" component={renderCarType} type="text" label="ประเภทรถ" title="ประเภทรถ"/>
                    <Field name="gear_system" component={renderGear} type="text" label="ระบบเกียร์" title="ระบบเกียร์"/>
                    <Field name="number_of_seats" component={renderField} type="text" label="จำนวนที่นั่ง" title="จำนวนที่นั่ง" />
                    <Field name="Mileage" component={renderField} type="text" label="เลขไมล์ (กม.)" title="เลขไมล์ (กม.)"/>
                    <Field name="color" component={renderColor} type="text" label="สี" title="สี"/>
                    <Field name="address" component={renderField} type="text" label="ที่อยู่" title="ที่อยู่"/>
                    <Field name="price" component={renderField} type="text" label="ราคา" title="ราคา"/>
                    <Field name="id_type" component={renderID_type} type="text" label="1.รถแนะนำ 2.รถใหม่ 3.รถราคาพิเศษ" title="รหัสประเภท" />
                    <Field name="fuel" component={renderField} type="text" label="เชื้อเพลิง" title="เชื้อเพลิง" />
                    <Field name="registration_year" component={renderField} type="text" label="ปีจดทะเบียนรถ" title="ปีจดทะเบียน" />
                    <Field name="seller_name" component={renderField} type="text" label="ชื่อผู้ขาย" title="ชื่อผู้ขาย" />
                    <Field name="seller_phone" component={renderField} type="text" label="เบอร์ผู้ขาย" title="เบอร์ผู้ขาย" />
                    <Field name="seller_facebook" component={renderField} type="text" label="เฟชบุ็คผู้ขาย" title="เฟชบุ็คผู้ขาย" />
                    <Field name="seller_line" component={renderField} type="text" label="ไอดีไลน์ผู้ขาย" title="ไอดีไลน์ผู้ขาย" />
                </ModalBody>

                <ModalFooter>
                    <Button color="success" onClick={handleSubmit(this.onSubmit)}>บันทึก</Button>{' '}
                    <Button color="danger" onClick={this.toggle}>ยกเลิก</Button>
                </ModalFooter>
            </div>
        )
    }

    //ฟังก์ชันนี้เรียกใช้ props ชื่อ onToggle จาก src/pages/Location.js เพื่อปิด Modal
    toggle = () => {
        this.props.onToggle()
    }

    //ฟังก์ชันส่งการค่าการ submit โดยส่งให้ฟังก์ชันชื่อ onSubmit ที่ได้จาก props
    onSubmit = (values) => {
        this.props.onSubmit(values);
    }
}

//validate ข้อมูลก่อน submit
function validate(values) {
    const errors = {};

    if (!values.brand) {
        errors.brand = 'จำเป็นต้องกรอกชื่อสถานที่ !';
    }
    
    if (!values.generation) {
        errors.generation = 'จำเป็นต้องกรอกรหัส !';
    }

    if (!values.car_makeover) {
        errors.car_makeover = 'จำเป็นต้องกรอกโฉมรถ !';
    }
    return errors;
}

const form = reduxForm({
    form: 'CarForm',
    validate
})

//สังเกตุว่าไม่มีการใช้ connect เลยเพราะเราไม่ได้เป็นตัวจัดการ data โดยตรง
//แต่ส่งสิ่งต่างผ่าน props ที่ได้จาก src/pages/Car.js
export default form(CarForm)