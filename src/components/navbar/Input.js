import React from 'react'

export default function Input({ label, id, placeholder, type = "text", value, onChange }) {
  return (
    <div className="w-full">
      <label htmlFor={id} className="text-[12px]">
        {label}
      </label>
      <input
        type={ type }
        id={id}
        name={id}
        className="block mt-[5px] mb-[20px] rounded border border-[#ccc] w-full"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
