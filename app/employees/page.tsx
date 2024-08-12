import Employee from "@/components/employee";

const EmployeesPage = async () => {
  async function getEmployees() {
    const response = await fetch("http://localhost:3004/employees");
    const data = await response.json();
    return data;
  }

  const employees: EmployeesData[] = await getEmployees();

  return (
    <div className="w-4/5 p-8">
      <h1>Employees</h1>
      {employees.map((employee) => (
        <div key={employee.id} className="p-8">
         <Employee {...employee} />
        </div>
      ))}
    </div>
  );
};

export default EmployeesPage;
