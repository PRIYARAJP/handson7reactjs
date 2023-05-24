import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import TableRow from './TableRow';
import Student from './Data';
import Nav from './nav';
function Students() {
    const data=useSelector((state)=>state.student);
    console.log(Student);
    const Navi=useNavigate();
  return (
    <div className='body'>
    <div className='nav'>
        <Nav/>
      </div>
      <div className="sttop">
<nav className="addbt1">Students Details</nav> 
<nav className="addbt" onClick={() =>
         {Navi('/newstudent')}} >Add New Student</nav>
   </div>

     
        <div className='table'>
            <table className='tbw'>
                <thead>
                <tr className='tr'>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Course</td>
                    <td>Batch</td>
                    <td>Change</td>
                </tr>
                </thead>
                <tbody>
                    {
                        data.map((student)=>{
                            return(
                                <tr key={student.id} className='tr'>
                                    <TableRow student={student}/>
                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>
        </div>


    </div>
  )
}

export default Students