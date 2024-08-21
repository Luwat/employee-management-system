"use client";

import Employees from "@/components/employees";
import Pagination from "@/components/pagination";
import { useEffect, useState } from "react";

let pageSize = 5;

const EmployeesPage = () => {
  const [employees, setEmployees] = useState<[] | EmployeesData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const lastEmployeeIndex = currentPage * pageSize;
  const firstEmployeeIndex = lastEmployeeIndex - pageSize;
  const currentEmployees = employees.slice(
    firstEmployeeIndex,
    lastEmployeeIndex
  );

  useEffect(() => {
    async function fetchEmployees() {
      setLoading(true);
      const response = await fetch("http://localhost:3004/employees");
      const data = await response.json();
      console.log(data);
      setEmployees(data);
      setLoading(false);
    }

    fetchEmployees();
  }, []);

  return (
    <section>
      <Employees employees={currentEmployees} loading={loading} />
      <Pagination
        pageSize={pageSize}
        length={employees.length}
        currentPage={currentPage}
        onPageChange={(page: number) => setCurrentPage(page)}
      />
    </section>
  );
};

export default EmployeesPage;
