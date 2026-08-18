export default function Field({
  label,
  name,
  placeholder,
  hint,
}: {
  label: string;
  name: string;
  placeholder: string;
  hint?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium">{label}</label>

      <input
        name={name}
        type="number"
        step="0.01"
        min="0"
        placeholder={placeholder}
        className="
          w-full
          rounded-xl
          border
          border-gray-200
          px-4
          py-3
          outline-none
          focus:border-black
        "
      />

      {hint && <p className="mt-1 text-xs text-gray-500">{hint}</p>}
    </div>
  );
}