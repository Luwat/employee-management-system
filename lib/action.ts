"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { z } from "zod";

const SignupFormSchema = z.object({
  firstName: z
    .string()
    .min(4, { message: "First name must be at least 4 characters" })
    .trim(),
  lastName: z
    .string()
    .min(4, { message: "Last name must be at least 4 characters" })
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

export async function createEmployee(formData: FormData) {
  const newEmployee = {
    id: Date.now(),
    ...Object.fromEntries(formData.entries()),
  };

  try {
    const response = await fetch("http://localhost:3004/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEmployee),
    });
    const data = await response.json();
    data;
  } catch (error: any) {
    throw new Error(error.message);
  }

  revalidatePath("/employees");
  redirect("/employees");
}

export async function updateEmployee(id: number, formData: FormData) {
  try {
    const response = await fetch(`http://localhost:3004/employees/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        ...Object.fromEntries(formData.entries()),
      }),
    });
    const data = await response.json();
    data;
  } catch (error: any) {
    throw new Error(error.message);
  }

  revalidatePath("/employees");
  redirect("/employees");
}

export async function deleteEmployee(id: number) {
  try {
    const response = await fetch(`http://localhost:3004/employees/${id}`, {
      method: "DELETE",
    });
  } catch (error: any) {
    throw new Error(error.message);
  }
  revalidatePath("/employees");
}

export async function registerUser(formData: FormData) {
  const { firstName, lastName, email, password } = SignupFormSchema.parse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    password: formData.get("password")
  });
  
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  try {
    const response = await fetch("http://localhost:3004/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password: hashedPassword,
      }),
    });

    const user = await response.json();
    user;
  } catch (error) {
    throw new Error("Could not create user");
  }

  revalidatePath("/");
  redirect("/login");
}
