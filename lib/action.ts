"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";


const SignupFormSchema = z.object({
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
  redirect('/employees')
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
  redirect('/employees')
}

export async function deleteEmployee(id: number) {
  try {
    const response = await fetch(`http://localhost:3004/employees/${id}`, {
      method: "DELETE"
    });
  } catch (error: any) {
    throw new Error(error.message);
  }
  revalidatePath("/employees");
}

