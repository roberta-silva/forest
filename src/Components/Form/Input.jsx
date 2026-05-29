const Input = ({ id, name, type = 'text', label, placeholder }) => {
  return (
    <div className="grid gap-1">
      <label htmlFor={name} className="text-white">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        className="rounded-md border-2 border-verde-800 bg-verde-800 p-2 text-white focus:outline-none focus:ring-2 focus:ring-verde-400 focus:border-verde-900 placeholder:text-verde-900"
      />
    </div>
  );
};

export default Input;
