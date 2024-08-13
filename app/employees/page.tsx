import Employee from "@/components/employee";
import { getEmployees } from "@/lib/data";

const EmployeesPage = async () => {
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
