// "use client";

// import React from "react";
// import initialEmployees from "@/models/db.json";

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
  // const [employees, setEmployees] = React.useState<EmployeesData[]>([
  //   ...initialEmployees,
  // ]);

  // console.log(employees);
  async function getEmployees() {
    const response = await fetch("http://localhost:3004/employees");
    const data = await response.json();
    return data;
    // setEmployees(data);
  }

  const employees: EmployeesData[] = await getEmployees();

  return (
    <div className="w-4/5 p-8">
      <h1>Employees</h1>
      {employees.map((employee) => (
        <div key={employee.id}>
          <p>
            {employee.firstName} {employee.lastName} - {employee.position}
          </p>
        </div>
      ))}
    </div>
  );
};

export default EmployeesPage;
