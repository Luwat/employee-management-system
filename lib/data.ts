export async function getEmployees() {
    const response = await fetch("http://localhost:3004/employees");
    const data = await response.json();
    return data;
}

export async function getEmployee(id: number) {
    const response = await fetch(`http://localhost:3004/employees/${id}`, {
      method: "GET"
    });
    const data = await response.json();
    return data;
}