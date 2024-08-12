"use server";

import { revalidatePath } from "next/cache";

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
    console.log(data);
  } catch (error: any) {
    throw new Error(error.message);
  }

  revalidatePath("/employees");
}
