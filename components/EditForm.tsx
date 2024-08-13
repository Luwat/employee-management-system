import { updateEmployee } from "@/lib/action";
import { Input, TextArea } from "./inputs";


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
      <p>
        {/* <button>Cancel</button> */}
        <button type="submit">Submit</button>
      </p>
    </form>
  );
};

export default EditEmployeeForm;
