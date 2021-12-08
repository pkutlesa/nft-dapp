import "./textInput.css";

export const TextInput = ({ label, name, value, onChangeInput }) => {
  return (
    <div className="form__group field">
      <input
        key={name}
        type="input"
        className="form__field"
        placeholder={label}
        name={name}
        id={name}
        value={value}
        onChange={(e) => onChangeInput(e.target.value)}
        required
      />
      <label htmlFor={name} className="form__label">
        {label}
      </label>
    </div>
  );
};
