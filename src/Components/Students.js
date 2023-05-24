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
      <h1 className='headstudent'>Students Details</h1>
      <div className='add'>
        <button onClick={()=>{Navi('/newstudent')}}>Add new student</button></div>

        <div className='table'>
            <table className='insidetable'>
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