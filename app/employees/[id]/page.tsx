import EmployeeDetails from "@/components/EmployeeDetails";
import { getEmployee } from "@/lib/data";

export default async function EmployeeDetailsPage({ params }: { params: {id: number}}) {
  const { id } = params;
  const employee = await getEmployee(id);

  return <EmployeeDetails employee={employee}/>;
}
