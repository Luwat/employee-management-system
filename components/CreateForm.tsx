import { createEmployee } from "@/lib/action";
import { Input, TextArea } from "./inputs";
import Button from "./Button";
import Link from "next/link";

const CreateEmployeeForm = () => {
  return (
    <form action={createEmployee}>
      <Input
        type="text"
        label="First Name"
        name="firstName"
        defaultValue={""}
      />
      <Input type="text" label="Last Name" name="lastName" defaultValue={""} />
      <Input type="email" label="Email" name="email" defaultValue={""} />
      <TextArea label="Address" name="address" defaultValue={""} />
      <Input
        type="tel"
        label="Phone Number"
        name="phoneNumber"
        defaultValue={""}
      />
      <Input
        type="tel"
        label="Emergency Number"
        name="emergencyPhoneNumber"
        defaultValue={""}
      />
      <Input type="text" label="Bank Name" name="bankName" defaultValue={""} />
      <Input
        type="tel"
        label="Bank Account Number"
        name="bankAccountNumber"
        defaultValue={""}
      />
      <Input
        type="text"
        label="Bank Account Name"
        name="bankAccountName"
        defaultValue={""}
      />
      <Input
        type="text"
        label="Next of Kin"
        name="nextOfKin"
        defaultValue={""}
      />
      <Input
        type="tel"
        label="Next of Kin Number"
        name="nextOfKinNumber"
        defaultValue={""}
      />
      <Input
        type="text"
        label="Next of Kin relationship"
        name="nextOfKinRelationship"
        defaultValue={""}
      />
      <Input type="text" label="Job Title" name="position" defaultValue={""} />
      <Input
        type="date"
        label="Employment Start Date"
        name="startDate"
        defaultValue={""}
      />
      <Input
        type="date"
        label="Birth Date"
        name="dateOfBirth"
        defaultValue={""}
      />
      <Input
        type="text"
        label="Education Level"
        name="educationLevel"
        defaultValue={""}
      />
      <div className="flex gap-5">
        <Button
          className="bg-neutral-700 text-neutral-100 hover:text-neutral-300 my-5"
          type="submit"
        >
          Add Employee
        </Button>
        <Link href={"/employees"}>
          <Button className=" my-5">Cancel</Button>
        </Link>
      </div>
    </form>
  );
};

export default CreateEmployeeForm;
