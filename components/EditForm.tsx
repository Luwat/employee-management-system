import { updateEmployee } from "@/lib/action";
import { Input, TextArea } from "./inputs";
import Button from "./Button";
import Link from "next/link";


const EditEmployeeForm = ({employee}: {employee: EmployeesData}) => {
  return (
    <form action={updateEmployee.bind(null, employee.id)}>
      <Input
        type="text"
        label="First Name"
        name="firstName"
        defaultValue={employee.firstName}
      />
      <Input
        type="text"
        label="Last Name"
        name="lastName"
        defaultValue={employee.lastName}
      />
      <Input
        type="email"
        label="Email"
        name="email"
        defaultValue={employee.email}
      />
      <TextArea
        label="Address"
        name="address"
        defaultValue={employee.address}
      />
      <Input
        type="tel"
        label="Phone Number"
        name="phoneNumber"
        defaultValue={employee.phoneNumber}
      />
      <Input
        type="tel"
        label="Emergency Number"
        name="emergencyPhoneNumber"
        defaultValue={employee.emergencyPhoneNumber}
      />
      <Input
        type="text"
        label="Bank Name"
        name="bankName"
        defaultValue={employee.bankName}
      />
      <Input
        type="tel"
        label="Bank Account Number"
        name="bankAccountNumber"
        defaultValue={employee.bankAccountNumber}
      />
      <Input
        type="text"
        label="Bank Account Name"
        name="bankAccountName"
        defaultValue={employee.bankAccountName}
      />
      <Input
        type="text"
        label="Next of Kin"
        name="nextOfKin"
        defaultValue={employee.nextOfKin}
      />
      <Input
        type="tel"
        label="Next of Kin Number"
        name="nextOfKinNumber"
        defaultValue={employee.nextOfKinNumber}
      />
      <Input
        type="text"
        label="Next of Kin relationship"
        name="nextOfKinRelationship"
        defaultValue={employee.nextOfKinRelationship}
      />
      <Input
        type="text"
        label="Job Title"
        name="position"
        defaultValue={employee.position}
      />
      <Input
        type="date"
        label="Employment Start Date"
        name="startDate"
        defaultValue={employee.startDate}
      />
      <Input
        type="date"
        label="Birth Date"
        name="dateOfBirth"
        defaultValue={employee.dateOfBirth}
      />
      <Input
        type="text"
        label="Education Level"
        name="educationLevel"
        defaultValue={employee.educationLevel}
      />
      <div className="flex gap-5">
        < Button type="submit" className="bg-neutral-700 text-neutral-100 hover:text-neutral-300 my-5">Edit Employee</Button>
        <Link href={"/employees"}>
          <Button className=" my-5">Cancel</Button>
        </Link>
      </div>
    </form>
  );
};

export default EditEmployeeForm;
