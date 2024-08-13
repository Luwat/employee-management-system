import EditEmployeeForm from "@/components/EditForm";
import { getEmployee } from "@/lib/data";

export default async function EditEmployeePage({ params}: { params: {id: number}}) {
    const employee  = await getEmployee(params.id)
    return <EditEmployeeForm employee={employee}/>
}