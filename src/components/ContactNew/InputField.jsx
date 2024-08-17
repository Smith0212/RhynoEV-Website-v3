import React from 'react';

function InputField({ label, type }) {
  const id = label.toLowerCase().replace(/\s+/g, '-');
  return (
    <>
      <label htmlFor={id} className="self-start ml-5 text-2xl leading-none text-center text-white tracking-[2.25px] max-md:ml-2.5">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          className="shrink-0 mt-5 max-w-full h-28 w-[590px] bg-transparent border-b border-white max-md:mr-1.5"
          aria-label={label}
        />
      ) : (
        <input
          type={type}
          id={id}
          className="shrink-0 mt-5 max-w-full h-px w-[590px] bg-transparent border-b border-white max-md:mr-1.5"
          aria-label={label}
        />
      )}
    </>
  );
}

export default InputField;