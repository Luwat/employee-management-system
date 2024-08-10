import Employee from "@/components/employee";

type EmployeesData = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  phoneNumber: string;
  emergencyPhoneNumber: string;
  bankName: string;
  bankAccountNumber: string
  bankAccountName: string;
  nextOfKin: string;
  nextOfKinNumber: string;
  nextOfKinRelationship: string;
  position: string;
  startDate: string;
  dateOfBirth: string;
  educationLevel: string;
};

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
