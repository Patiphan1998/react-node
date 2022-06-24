import React from "react";
//renderLogin จะรับ props ต่างๆ ของ Login ที่ได้จาก redux-form
const renderLogins = ({
  input,
  label,
  type,
  textarea,
  autoFocus,
  title,
  meta: { touched, error },
}) => {
  //สำหรับรูปแบบ Login ที่เป็น TextArea
  const textareaType = (
    <textarea {...input} placeholder={title} className="form-control" row="3" />
  );

  //สำหรับรูปแบบ Login ที่เป็น TextBox
  const inputType = (
    <input
      {...input}
      placeholder={label}
      type={type}
      className="form-control"
      autoFocus={autoFocus}
    />
  );
  return (
    <div className="form-group row">
      <label className="col-sm-4 col-form-label"><span style={{color:'red'}}>* </span>{title}</label>
      <div className="col-sm-8">
        {/* ตรวจสอบก่อนว่า มีการส่ง textarea หรือเปล่า*/}
        {textarea ? textareaType : inputType}

        {/* ส่วนนี้จะแสดงข้อความ error ที่ได้จากการ validate */}
        {touched && error && <small className="text-danger">{error}</small>}
      </div>
    </div>
  );
};
export default renderLogins;
