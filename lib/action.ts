"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

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