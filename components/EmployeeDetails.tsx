import React from 'react'

const EmployeeDetails = ({employee}: {employee: EmployeesData}) => {
  return (
    <section className=''>
        <h1>Employee profile</h1>
        <div>
            <h1>Bio data</h1>
            <div>
                <p>{employee.lastName} {employee.firstName}</p>
                <p>Started work on {employee.startDate}</p>
            </div>
        </div>
    </section>
  )
}

export default EmployeeDetails
