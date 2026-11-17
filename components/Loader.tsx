import React from 'react';

export interface LoaderProps {
  /** Size variant: 'default' uses the exact h-12 w-32 spinner; 'sm' is compact for buttons/inline */
  size?: 'default' | 'sm' | 'md';
  /** Additional container classes */
  className?: string;
  /** Additional classes applied directly to the spinner */
  spinnerClassName?: string;
  /** Optional text displayed alongside the spinner */
  text?: React.ReactNode;
  /** Accessible label for assistive technologies */
  label?: string;
}

export default function Loader({
  size = 'default',
  className = '',
  spinnerClassName = '',
  text,
  label = 'Loading',
}: LoaderProps) {
  // Size classes for the spinner ring
  const sizeClasses =
    size === 'sm'
      ? 'h-4 w-4 border-2 border-t-emerald-600 border-b-emerald-600 border-l-transparent border-r-transparent'
      : size === 'md'
      ? 'h-8 w-20 border-t-2 border-b-2 border-emerald-600'
      : 'h-12 w-32 border-t-2 border-b-2 border-emerald-600';

  return (
    <div
      className={`flex justify-center items-center ${
        text ? (size === 'sm' ? 'gap-2' : 'flex-col gap-3') : ''
      } ${className}`}
    >
      <div
        role="status"
        aria-label={label}
        className={`animate-spin motion-reduce:animate-none rounded-full shrink-0 ${sizeClasses} ${spinnerClassName}`}
      >
        <span className="sr-only">{label}</span>
      </div>
      {text && (
        <span
          className={`font-medium ${
            size === 'sm' ? 'text-xs text-inherit' : 'text-sm text-neutral-500'
          }`}
        >
          {text}
        </span>
      )}
    </div>
  );
}

/** Re-export named Spinner for convenience */
export { Loader as Spinner };

