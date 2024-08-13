import Link from "next/link";
import DeleteEmployeeButton from "./DeleteButton";

export default function Employee({
  id,
  firstName,
  lastName,
  position,
}: {
  id: number;
  firstName: string;
  lastName: string;
  position: string;
}) {
  return (
    <section>
      <h2>
        {firstName} {lastName}
      </h2>
      <p>{position}</p>
      <Link href={`/employees/${id}`}>
        <button>View Details</button>
      </Link>
      <Link href={`/employees/${id}/edit`}>
        <button>Edit</button>
      </Link>
      <DeleteEmployeeButton id={id}/>
    </section>
  );
}
