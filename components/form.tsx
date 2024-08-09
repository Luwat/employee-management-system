import { Input, TextArea } from "./inputs";

const EmployeeForm = () => {
  return (
    <form action="">
      <Input type="text" label="First Name" name="first-name" />
      <Input type="text" label="Last Name" name="last-name" />
      <Input type="email" label="Email" name="email" />
      <TextArea label="Address" name="address" />
      <Input type="tel" label="Phone Number" name="phone-number" />
      <Input type="tel" label="Emergency Number" name="emergency-number" />
      <Input type="text" label="Bank Name" name="bank-name" />
      <Input type="tel" label="Bank Account Number" name="bank-account-number" />
      <Input type="text" label="Next of Kin" name="next-of-kin" />
      <Input type="tel" label="Next of Kin Number" name="next-of-kin-number" />
      <Input type="text" label="Next of Kin relationship" name="next-of-kin-relationship" />
      <Input type="text" label="Job Title" name="job-title" />
      <Input type="date" label="Employment Start Date" name="start-date" />
      <Input type="date" label="Birth Date" name="birth-date" />
      <Input type="text" label="Education Level" name="educational-level" />
      <p>
        <button>Cancel</button>
        <button type="submit">Submit</button>
      </p>
    </form>
  );
};

export default EmployeeForm;
