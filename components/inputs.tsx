interface InputGroupProps extends React.ComponentPropsWithoutRef<"input"> {
    label: string;
    name: string;
}

interface TextareaProps extends React.ComponentPropsWithoutRef<"textarea"> {
    label: string;
    name: string;
}
export function Input({
  label,
  name,
  ...props
}: InputGroupProps) {
  return (
    <p className="flex flex-col">
      <label htmlFor={name} className="py-4 ">{label}</label>
      <input id={name} placeholder={label} {...props} className="rounded-md" />
    </p>
  );
}
export function TextArea({
  label,
  name,
  ...props
}: TextareaProps) {
  return (
    <p className="flex flex-col">
      <label htmlFor={name} className="py-4 ">{label}</label>
      <textarea id={name} placeholder={label} {...props} className="rounded-md pb-4" />
    </p>
  );
}
