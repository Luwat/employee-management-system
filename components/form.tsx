import { Input, TextArea } from "./inputs";

const EmployeeForm = () => {
  return (
    <form action="">
      <Input type="text" label="First Name" name="first-name" defaultValue={''} />
      <Input type="text" label="Last Name" name="last-name" defaultValue={''}/>
      <Input type="email" label="Email" name="email" defaultValue={''}/>
      <TextArea label="Address" name="address" defaultValue={''}/>
      <Input type="tel" label="Phone Number" name="phone-number" defaultValue={''}/>
      <Input type="tel" label="Emergency Number" name="emergency-number" defaultValue={''}/>
      <Input type="text" label="Bank Name" name="bank-name" defaultValue={''}/>
      <Input type="tel" label="Bank Account Number" name="bank-account-number" defaultValue={''}/>
      <Input type="text" label="Next of Kin" name="next-of-kin" defaultValue={''}/>
      <Input type="tel" label="Next of Kin Number" name="next-of-kin-number" defaultValue={''}/>
      <Input type="text" label="Next of Kin relationship" name="next-of-kin-relationship" defaultValue={''}/>
      <Input type="text" label="Job Title" name="job-title" defaultValue={''}/>
      <Input type="date" label="Employment Start Date" name="start-date" defaultValue={''}/>
      <Input type="date" label="Birth Date" name="birth-date" defaultValue={''}/>
      <Input type="text" label="Education Level" name="educational-level" defaultValue={''}/>
      <p>
        <button>Cancel</button>
        <button type="submit">Submit</button>
      </p>
    </form>
  );
};

export default EmployeeForm;
