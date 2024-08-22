import React from "react";

const EmployeeDetails = ({ employee }: { employee: EmployeesData }) => {
  return (
    <section className="">
      <h1 className="text-2xl font-bold mb-4">Employee profile</h1>
      <div>
        <div className="mb-4">
          <h3 className="text-xl font-bold">Bio data</h3>
          <p className="my-3">
            <span className="font-semibold">Name: </span>
            {employee.lastName} {employee.firstName}
          </p>
          <p className="my-3">
            <span className="font-semibold">Date of employment: </span>
            {employee.startDate}
          </p>
          <p className="my-3">
            <span className="font-semibold">Job description: </span>
            {employee.position}
          </p>
          <p className="my-3">
            <span className="font-semibold">Date of birth: </span>
            {employee.dateOfBirth}
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-bold">Contacts</h3>
          <p className="my-3">
            <span className="font-semibold">Address: </span>
            {employee.address}
          </p>
          <p className="my-3">
            <span className="font-semibold">Phone number: </span>
            {employee.phoneNumber}
          </p>
          <p className="my-3">
            <span className="font-semibold">Emergency phone number: </span>
            {employee.emergencyPhoneNumber}
          </p>
          <p className="my-3">
            <span className="font-semibold">Email address: </span>
            {employee.email}
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-bold">Bank detail</h3>
          <p className="my-3">
            <span className="font-semibold">Name: </span>
            {employee.bankName}
          </p>
          <p className="my-3">
            <span className="font-semibold">Account name: </span>
            {employee.bankAccountName}
          </p>
          <p className="my-3">
            <span className="font-semibold">Account number: </span>
            {employee.bankAccountNumber}
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-bold">Next of kin</h3>
          <p className="my-3">
            <span className="font-semibold">Name: </span>
            {employee.nextOfKin}
          </p>
          <p className="my-3">
            <span className="font-semibold">Relationship: </span>
            {employee.nextOfKinRelationship}
          </p>
          <p className="my-3">
            <span className="font-semibold">Phone number: </span>
            {employee.nextOfKinNumber}
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold">Education</h3>
          <p className="my-3">
            <span className="font-semibold">Education level: </span>
            {employee.educationLevel}
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmployeeDetails;
