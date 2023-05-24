import React, { useState } from 'react'
import  "./reduce.css"
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { studentAdded } from './StudentSlice';
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
      <div className='nav'><Link className='navt1' to="/">Home</Link>
      <Link className='navt2' to="/students">Students</Link>
      <Link className='navt3' to="/contact">Contact</Link>
      </div>
      <h1>Enter Student Details</h1>
  


      <div className='feild'>
          <fieldset><legend>Name:</legend>
      <input className='Nameip' name="Name" placeholder='Enter Name' onChange={(e)=>setName(e.target.value)}/>
      </fieldset>
      <fieldset><legend>Age:</legend>
      <input className='Aageip' name="Age" placeholder='Enter Age' onChange={(e)=>setAge(e.target.value)}/>
      </fieldset>
      <fieldset><legend>Course:</legend>
      <input className='Courseip' name="Course" placeholder='Enter Course' onChange={(e)=>setCourse(e.target.value)}/>
      </fieldset>
      <fieldset><legend>Batch:</legend>
      <input className='Batchip' name="Batch" placeholder='Enter batch' onChange={(e)=>setBatch(e.target.value)}/>
      </fieldset>
      </div>
      <button className='Cancel' onClick={handlecancel}>Cancel</button>
      <button className='Update' onClick={handleClick}>Submit</button>
    </div>
  )
}

export default Newstudent