import Employee from "./employee";

const Employees = ({employees, loading}:{employees: EmployeesData[]; loading: boolean}) => {
    if (loading) {
        return <p>Loading...</p>
    }
  return (
    <div className="w-4/5 p-8">
      <h1>Employees</h1>
      {employees.map((employee) => (
        <div key={employee.id} className="p-8">
         <Employee {...employee}/>
        </div>
      ))}
    </div>
  )
}

export default Employees
