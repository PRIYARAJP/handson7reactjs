// import { Link } from 'react-router-dom';
import { useLocation,useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { studentUpdated } from './StudentSlice';
import Nav from './nav';
function Editstudent() {
    const dispatch=useDispatch();
    const data=useLocation(); 
    const dataid=data.state.id;
    const StdDetail=useSelector((state)=>state.student.filter((item)=>item.id===dataid));
    const Navi=useNavigate();
    const Navii=useNavigate();
   
    const stdName=StdDetail[0].Name
    const stdAge=StdDetail[0].Age
    const stdCourse=StdDetail[0].Course
    const stdBatch=StdDetail[0].Batch

    const[Name,setName]=useState(stdName);
    const[Age,setAge]=useState(stdAge);
    const[Course,setCourse]=useState(stdCourse);
    const[Batch,setBatch]=useState(stdBatch);


    const handleUpdate=()=>{
      if(Name && Age && Course && Batch){
        dispatch(studentUpdated({
          "id":dataid,
          "Name":Name,
          "Age":Age,
          "Course":Course,
          "Batch":Batch
        }))
        Navi("/Students");
      }
    }
    const handleCancel=()=>{
      Navii("/Students");
    }
  return (
    <div className='body'>
      
    <Nav/> 
      <h1>This is Edit Students Components</h1>

      <div className='feild'>
          <fieldset><legend>Name:</legend>
      <input  type='text' name='Name' placeholder='Name' value={Name} onChange={(e)=>setName(e.target.value)}/>
      </fieldset>
      <fieldset><legend>Age:</legend>
      <input  type='text' name='Age' placeholder='Age' value={Age} onChange={(e)=>setAge(e.target.value)}/>
      </fieldset>
      <fieldset><legend>Course:</legend>
     
      <input type='text' name='Course' placeholder='Course' value={Course} onChange={(e)=>setCourse(e.target.value)}/>
      </fieldset>
      <fieldset><legend>Batch:</legend>
      <input  type='text' name='Batch' placeholder='Batch' value={Batch} onChange={(e)=>setBatch(e.target.value)}/>
      </fieldset>
      </div>
      <div className='feilder'>
      <button  onClick={handleCancel}>Cancel</button>
      <button onClick={handleUpdate}>Update</button>
    </div>
    </div>
  )
}

export default Editstudent