/**
 * Button.jsx
 *
 * Props:
 *   children   — button label
 *   variant    — 'primary' | 'secondary' | 'danger' | 'success' | 'warning'  (default: 'primary')
 *   size       — 'sm' | 'md' | 'lg'                   (default: 'md')
 *   disabled   — boolean                               (default: false)
 *   onClick    — click handler
 */

const VARIANTS = {
  primary:
    'bg-brand-500   text-white          hover:bg-brand-600   active:bg-brand-700',
  secondary:
    'bg-neutral-100 text-neutral-800    hover:bg-neutral-200 active:bg-neutral-300',
  danger:
    'bg-accent-500  text-white          hover:bg-accent-600  active:bg-accent-700',
  success:
    'bg-success-500 text-white          hover:bg-success-600 active:bg-success-700',
  warning:
    'bg-warning-500 text-neutral-900    hover:bg-warning-600 active:bg-warning-700',
};

const SIZES = {
  sm: 'px-2 md:px-3 lg:px-4 py-1.5 text-sm',
  md: 'px-4 py-2   text-base',
  lg: 'px-6 py-3   text-lg',
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={[
        // base styles
        'inline-flex items-center justify-center',
        'rounded-md font-medium cursor-pointer',
        'transition-colors duration-150',
        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        VARIANTS[variant],
        SIZES[size],
      ].join(' ')}>
      {children}
    </button>
  );
}
