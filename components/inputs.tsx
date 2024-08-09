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
    <p>
      <label htmlFor={name}>{label}</label>
      <input id={name} placeholder={label} {...props} />
    </p>
  );
}
export function TextArea({
  label,
  name,
  ...props
}: TextareaProps) {
  return (
    <p >
      <label htmlFor={name}>{label}</label>
      <textarea id={name} placeholder={label} {...props} />
    </p>
  );
}
