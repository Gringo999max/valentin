import { forwardRef } from 'react';

const Input = forwardRef(function Input(
  { label, error, type = 'text', className = '', ...props },
  ref
) {
  const baseStyles = `
    w-full px-4 py-3
    bg-white border border-gray-200
    text-gray-800 placeholder-gray-400
    focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold
    transition-colors duration-200
  `;

  const errorStyles = error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : '';

  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        ref={ref}
        type={type}
        className={`${baseStyles} ${errorStyles} ${className}`}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
    </div>
  );
});

export default Input;

export const Textarea = forwardRef(function Textarea(
  { label, error, rows = 5, className = '', ...props },
  ref
) {
  const baseStyles = `
    w-full px-4 py-3
    bg-white border border-gray-200
    text-gray-800 placeholder-gray-400
    focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold
    transition-colors duration-200
    resize-none
  `;

  const errorStyles = error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : '';

  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        rows={rows}
        className={`${baseStyles} ${errorStyles} ${className}`}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
    </div>
  );
});

export const Select = forwardRef(function Select(
  { label, error, options = [], className = '', ...props },
  ref
) {
  const baseStyles = `
    w-full px-4 py-3
    bg-white border border-gray-200
    text-gray-800
    focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold
    transition-colors duration-200
    appearance-none
    bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%23737373" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3e%3cpolyline points="6 9 12 15 18 9"%3e%3c/polyline%3e%3c/svg%3e')]
    bg-[length:1.5em_1.5em]
    bg-[right_0.5rem_center]
    bg-no-repeat
    pr-10
  `;

  const errorStyles = error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : '';

  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <select
        ref={ref}
        className={`${baseStyles} ${errorStyles} ${className}`}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
    </div>
  );
});

export const Checkbox = forwardRef(function Checkbox(
  { label, error, className = '', ...props },
  ref
) {
  return (
    <div className="space-y-1">
      <label className="flex items-start space-x-3 cursor-pointer">
        <input
          ref={ref}
          type="checkbox"
          className={`
            w-5 h-5 mt-0.5
            border-gray-300
            text-gold focus:ring-gold
            rounded-none
            ${className}
          `}
          {...props}
        />
        {label && (
          <span className="text-sm text-gray-600">{label}</span>
        )}
      </label>
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
    </div>
  );
});
