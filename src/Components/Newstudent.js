import React, { useState } from 'react'
import  "./reduce.css"
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import { studentAdded } from './StudentSlice';
import Nav from './nav';
function Newstudent() {
  const data=useSelector((state)=>state.student);
  const[Name,setName]=useState("");
  const[Age,setAge]=useState("");
  const[Course,setCourse]=useState("");
  const[Batch,setBatch]=useState("");
  const navi=useNavigate();
  const naviii=useNavigate();
  const dispatch=useDispatch();

  const handlecancel=()=>{
    naviii("/Students");
  }

  const handleClick=()=>{
    if(Name && Age && Course && Batch){
      dispatch(studentAdded({
        "id":data.length,
        "Name":Name,
        "Age":Age,
        "Course":Course,
        "Batch":Batch
      }))
      navi("/Students");
    }
  }
  return (
    <div className='body'>

        <Nav/>
  
      <h1>Enter Student Details</h1>
      <div className='feild'>
          <fieldset><legend>Name:</legend>
      <input  name="Name" placeholder='Enter Name' onChange={(e)=>setName(e.target.value)}/>
      </fieldset>
      <fieldset><legend>Age:</legend>
      <input  name="Age" placeholder='Enter Age' onChange={(e)=>setAge(e.target.value)}/>
      </fieldset>
      <fieldset><legend>Course:</legend>
      <input name="Course" placeholder='Enter Course' onChange={(e)=>setCourse(e.target.value)}/>
      </fieldset>
      <fieldset><legend>Batch:</legend>
      <input  name="Batch" placeholder='Enter batch' onChange={(e)=>setBatch(e.target.value)}/>
      </fieldset>
      </div>
      <div className='feilder'>
      <button className='Cancel' onClick={handlecancel}>Cance</button>
      <button className='Update' onClick={handleClick}>Submit</button>
      </div>
    </div>
  )
}

export default Newstudent