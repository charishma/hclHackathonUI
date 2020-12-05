import {getStudentCollegeData} from '../duck/selectors';
import React, { useState } from 'react';
import {useDispatch,useSelector } from 'react-redux';

const InputComponent = (props) => {

    return (
            <div className='form-group row'>
               <label htmlFor={props.label}>{props.label}</label>
              <input className='input' value={props.value} disabled={props.disabled} 
              type='text' placeholder={props.label} onChange={(e)=>props.handleInputChange(e,props.label)}/>
            </div>
    );
}
export const ApplicationPane = () => {
   const student_data = useSelector(getStudentCollegeData);
    const handleApplicationSubmit = (e) => {
        e.preventDefault();
    };
   const handleInputChange = (e,key) => {

   };
   const autoPopulateData = ['college','city','user'];
  const formInputElements = Object.keys(student_data).map((value,index) => {
      let temp_obj = {'label':value,
                        'value':student_data[value],
                        'disabled':false,
                    };
        if(value.indexOf(autoPopulateData) != -1)
        {
            temp_obj.disabled = true;
        }
       return (
           <InputComponent {...temp_obj} handleInputChange={handleInputChange}/>
       )
   });
    return (
        <div className='col-md-6 mx-auto' >
          <form  onSubmit={handleApplicationSubmit} style={{float: 'left',margin: '2% 10%'}}>
            <h4 style={{textAlign:'center'}}>Application Form </h4>
            {formInputElements}
            <div className='form-group row'>
              <button className='btn' type='submit'>Apply</button>
            </div>
            
            {/* {errorMsg && <div className='form-group row errorMsg'>
              <span>{errorMsg}</span>
            </div>} */}
          </form>
        </div>
      )
};