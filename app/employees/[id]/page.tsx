import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export default function EmployeeDetailsPage({ params }: { params: Params }) {
  const { id } = params;
  return <div>{id} Employee Details Page</div>;
}
