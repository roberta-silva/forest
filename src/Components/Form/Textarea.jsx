const Textarea = ({ id, name, label, rows = 5 }) => {
  return (
    <div className="grid gap-1">
      <label className="text-white" htmlFor={name}>
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        rows={rows}
        className="rounded-md border-2 border-verde-800 bg-verde-800 p-2 text-white focus:outline-none focus:ring-2 focus:ring-verde-400 focus:border-verde-900 placeholder:text-verde-900 resize-none"
      />
    </div>
  );
};

export default Textarea;
