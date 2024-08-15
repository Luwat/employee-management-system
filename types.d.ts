import { z } from "zod";

export const SignupFormSchema = z.object({
  name: z
    .string()
    .min(4, { message: "Name must be at least 4 characters" })
    .trim(),
  email: z.string().email({ message: "Please enter a valid email." }).trim(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
    .regex(/[0-9]/, { message: "Contain at least one number." })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Password must contain at least one special character.",
    })
    .trim(),
});

type FormState =
  | {
      errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
      };
      message: string;
    }
  | undefined;

type EmployeesData = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  phoneNumber: string;
  emergencyPhoneNumber: string;
  bankName: string;
  bankAccountNumber: string;
  bankAccountName: string;
  nextOfKin: string;
  nextOfKinNumber: string;
  nextOfKinRelationship: string;
  position: string;
  startDate: string;
  dateOfBirth: string;
  educationLevel: string;
};

type ErrorState = {
  message: string;
};
