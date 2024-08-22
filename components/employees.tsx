import Employee from "./employee";

const Employees = ({employees, loading}:{employees: EmployeesData[]; loading: boolean}) => {
    if (loading) {
        return <p>Loading...</p>
    }
  return (
    <div className="w-full p-4 md:p-8 m-auto">
      <h1 className="text-center text-2xl">List of Employees</h1>
      {employees.map((employee) => (
        <div key={employee.id} className="mt-6">
         <Employee {...employee}/>
        </div>
      ))}
    </div>
  )
}

export default Employees
