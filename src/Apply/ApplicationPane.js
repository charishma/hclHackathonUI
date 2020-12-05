import {getStudentCollegeData} from '../duck/selectors';
import React, { useState } from 'react';
import {useDispatch,useSelector } from 'react-redux';
import {submitApplication} from '../duck/actions';
const InputComponent = (props) => {

    return (
            <div className='form-group row'>
               <label htmlFor={props.label}>{props.label}</label>
              <input className='input' defaultValue={props.value} disabled={props.disabled} 
              type='text' placeholder={props.label} onChange={(e)=>props.handleInputChange(e,props.label)}/>
            </div>
    );
}
export const ApplicationPane = () => {
   const student_data = useSelector(getStudentCollegeData);
   const [studentForm,setStudentForm]=useState(student_data);
   const [error,setErrorMsg]=useState(null);
   const dispatch = useDispatch();
    const handleApplicationSubmit = (e) => {
        e.preventDefault();
        console.log("studentForm ",studentForm);
        Object.keys(studentForm).every((value,index) => {
              if(studentForm[value] == '')
              {
                setErrorMsg('Please fill all details');
                return false;
              }else{
                  return true;
              }
        });
        if(!error)
        {
            dispatch(submitApplication({...studentForm}));
        }
    };
   const handleInputChange = (e,key) => {
       let temp_data = {...studentForm};
       temp_data[key]=e.target.value;
       setStudentForm({...temp_data});
       setErrorMsg(null);
   };
   const autoPopulateData = ['College','City','StudentName'];
  const formInputElements = Object.keys(student_data).map((value,index) => {
      let temp_obj = {'label':value,
                        'value':student_data[value],
                        'disabled':false,
                    };
        if(autoPopulateData.indexOf(value) !== -1)
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
            
            {error && <div className='form-group row errorMsg'>
              <span>{error}</span>
            </div>}
          </form>
        </div>
      )
};