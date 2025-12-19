interface FormInputProps {
  type: React.HTMLInputTypeAttribute;
  label: string;
  forId: string;
  placeholder?: string;
}

export default function FormInput({
  type,
  label,
  forId,
  placeholder
}: FormInputProps) {
  return (
    <div className="flex flex-col gap-y-2 w-full">
      <label htmlFor={forId} className="text-base md:text-lg font-bold">{label}</label>
      <input type={type} id={forId} className="outline-none w-full py-2 border-b border-slate-300 focus:border-b-2 focus:border-blue-500 duration-300 text-lg md:text-xl" placeholder={placeholder} />
    </div>
  )
}