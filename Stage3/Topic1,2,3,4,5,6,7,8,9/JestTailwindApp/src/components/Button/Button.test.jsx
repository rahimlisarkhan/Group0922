import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

/** Renders a Button and returns the <button> DOM element */
const renderButton = (props = {}) => {
  render(<Button {...props}>{props.children ?? 'Click me'}</Button>);
  return screen.getByRole('button');
};

// ─────────────────────────────────────────────────────────────────────────────
// 1. Rendering
// ─────────────────────────────────────────────────────────────────────────────

describe('Button — rendering', () => {
  test('renders children text', () => {
    renderButton({ children: 'Submit' });
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });

  test('renders a <button> element', () => {
    const btn = renderButton();
    expect(btn.tagName).toBe('BUTTON');
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// 2. Variants — each variant applies its own bg class
// ─────────────────────────────────────────────────────────────────────────────

describe('Button — variants', () => {
  const cases = [
    ['primary', 'bg-brand-500'],
    ['secondary', 'bg-neutral-100'],
    ['danger', 'bg-accent-500'],
    ['success', 'bg-success-500'],
    ['warning', 'bg-warning-500'],
  ];

  test.each(cases)('variant="%s" has class "%s"', (variant, expectedClass) => {
    const btn = renderButton({ variant });
    expect(btn.className).toContain(expectedClass);
  });

  test('defaults to primary when no variant is given', () => {
    const btn = renderButton();
    expect(btn.className).toContain('bg-brand-500');
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// 3. Sizes — each size applies its own padding/text class
// ─────────────────────────────────────────────────────────────────────────────

describe('Button — sizes', () => {
  const cases = [
    ['sm', 'text-sm'],
    ['md', 'text-base'],
    ['lg', 'text-lg'],
  ];

  test.each(cases)('size="%s" has class "%s"', (size, expectedClass) => {
    const btn = renderButton({ size });
    expect(btn.className).toContain(expectedClass);
  });

  test('defaults to md size when no size is given', () => {
    const btn = renderButton();
    expect(btn.className).toContain('text-base');
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// 4. Disabled state
// ─────────────────────────────────────────────────────────────────────────────

describe('Button — disabled', () => {
  test('is not disabled by default', () => {
    const btn = renderButton();
    expect(btn).not.toBeDisabled();
  });

  test('is disabled when disabled=true', () => {
    const btn = renderButton({ disabled: true });
    expect(btn).toBeDisabled();
  });

  test('does not fire onClick when disabled', () => {
    const handleClick = jest.fn();
    const btn = renderButton({ disabled: true, onClick: handleClick });

    fireEvent.click(btn);

    expect(handleClick).not.toHaveBeenCalled();
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// 5. onClick handler
// ─────────────────────────────────────────────────────────────────────────────

describe('Button — onClick', () => {
  test('calls onClick once when clicked', () => {
    const handleClick = jest.fn();
    const btn = renderButton({ onClick: handleClick });

    fireEvent.click(btn);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('calls onClick multiple times for multiple clicks', () => {
    const handleClick = jest.fn();
    const btn = renderButton({ onClick: handleClick });

    fireEvent.click(btn);
    fireEvent.click(btn);
    fireEvent.click(btn);

    expect(handleClick).toHaveBeenCalledTimes(3);
  });

  test('does not throw when no onClick is provided', () => {
    const btn = renderButton();
    expect(() => fireEvent.click(btn)).not.toThrow();
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// 6. Base classes — always present regardless of props
// ─────────────────────────────────────────────────────────────────────────────

describe('Button — base classes', () => {
  test('always has rounded-md class', () => {
    const btn = renderButton();
    expect(btn.className).toContain('rounded-md');
  });

  test('always has font-medium class', () => {
    const btn = renderButton();
    expect(btn.className).toContain('font-medium');
  });

  test('always has transition-colors class', () => {
    const btn = renderButton();
    expect(btn.className).toContain('transition-colors');
  });
});
