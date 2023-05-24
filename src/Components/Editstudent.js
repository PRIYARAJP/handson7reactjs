import { Link } from 'react-router-dom';
import { useLocation,useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { studentUpdated } from './StudentSlice';
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
      <div className='nav'><Link className='navt1' to="/">Home</Link>
      <Link className='navt2' to="/students">Students</Link>
      <Link className='navt3' to="/contact">Contact</Link>
      </div>
      <h1>This is Edit Students Components</h1>

      <div className='feild'>
          <fieldset><legend>Name:</legend>
      <input  type='text' name='Name' placeholder='Name' value={Name} onChange={(e)=>setName(e.target.value)}/>
      </fieldset>
      <fieldset><legend>Age:</legend>
      <input className='Ageip' type='text' name='Age' placeholder='Age' value={Age} onChange={(e)=>setAge(e.target.value)}/>
      </fieldset>
      <fieldset><legend>Course:</legend>
     
      <input className='Courseip' type='text' name='Course' placeholder='Course' value={Course} onChange={(e)=>setCourse(e.target.value)}/>
      </fieldset>
      <fieldset><legend>Batch:</legend>
      <input className='Batchip' type='text' name='Batch' placeholder='Batch' value={Batch} onChange={(e)=>setBatch(e.target.value)}/>
      </fieldset>
      </div>
      <button className='Cancel' onClick={handleCancel}>Cancel</button>
      <button className='Update' onClick={handleUpdate}>Update</button>
    
    </div>
  )
}

export default Editstudent