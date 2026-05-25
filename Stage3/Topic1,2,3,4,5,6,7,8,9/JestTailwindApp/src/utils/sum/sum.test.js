import { sum } from './sum';

// "describe" groups related tests under one label
describe('sum fn result', () => {
  // ── Basic cases ─────────────────────────────────────────────────────────────

  test('adds two positive numbers', () => {
    expect(sum(2, 3)).toBe(5);
  });

  test('adds three numbers', () => {
    expect(sum(1, 2, 3)).toBe(6);
  });

  // ── Edge cases ───────────────────────────────────────────────────────────────

  test('returns 0 when called with no arguments', () => {
    expect(sum()).toBe(0);
  });

  test('returns the number itself when called with one argument', () => {
    expect(sum(42)).toBe(42);
  });

  // ── Negative / mixed ─────────────────────────────────────────────────────────

  test('handles negative numbers', () => {
    expect(sum(-1, -2)).toBe(-3);
  });

  test('handles a mix of positive and negative', () => {
    expect(sum(10, -3)).toBe(7);
  });

  test('returns 0 when positives and negatives cancel out', () => {
    expect(sum(5, -5)).toBe(0);
  });

  // ── Decimals ─────────────────────────────────────────────────────────────────

  test('adds decimal numbers', () => {
    // toBeCloseTo avoids floating-point precision issues (0.1 + 0.2 !== 0.3)
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
  });
});
