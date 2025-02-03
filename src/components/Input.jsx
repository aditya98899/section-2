import React from 'react';

// Reusable Input component
const InputField = ({ value, onChange, placeholder, type , name, id }) => {
  return (
    <div className="input-container">
        <label htmlFor="mb-2 font-bold"></label>
      <input className="w-full p-2 border border-gray-800"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        id={id}
        
      />
      <input type="text" />
    </div>
  );
};

export default InputField;
