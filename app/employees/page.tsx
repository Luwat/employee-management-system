"use client";

import Employees from "@/components/employees";
import Pagination from "@/components/pagination";
import { useEffect, useState } from "react";

const EmployeesPage = () => {
  const [employees, setEmployees] = useState<[] | EmployeesData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [pageSize, setPageSize] = useState<number>(5);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    async function fetchEmployees() {
      setLoading(true);
      const response = await fetch("http://localhost:3004/employees");
      const data = await response.json();
      console.log(data);
      setEmployees(data);
      setLoading(false);
    }

    fetchEmployees()
  }, []);

  return (
    <section>
      <Employees employees={employees} loading={loading} />
      <Pagination pageSize={pageSize} length={employees.length} currentPage={currentPage}/>
    </section>
  );
};

export default EmployeesPage;
