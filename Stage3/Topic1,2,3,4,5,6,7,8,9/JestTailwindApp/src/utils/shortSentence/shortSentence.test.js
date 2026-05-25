import { shortSentence } from './shortSentence';

describe('shortSentence fn result', () => {
  test('returns the original sentence if it is shorter than maxLength', () => {
    const sentence = 'Hello, world! This is a test.  ';
    const maxLength = 15;
    expect(shortSentence(sentence, maxLength)).toBe('Hello, world! T...');
  });

  test('truncates the sentence if it is longer than maxLength', () => {
    const sentence = 'Hello, world!';
    const maxLength = 5;
    expect(shortSentence(sentence, maxLength)).toBe('Hello...');
  });

  test('handles edge case where sentence length equals maxLength', () => {
    const sentence = 'Hello';
    const maxLength = 5;
    expect(shortSentence(sentence, maxLength)).toBe(sentence);
  });

  test('returns empty string when sentence is empty', () => {
    expect(shortSentence('', 5)).toBe('');
  });

  test('returns original sentence when maxLength is greater than sentence length', () => {
    expect(shortSentence('Hi', 10)).toBe('Hi');
  });

  test('trims whitespace from sliced result before appending ellipsis', () => {
    expect(shortSentence('  Hello World', 3)).toBe('H...');
  });

  test.each([
    ['Short', 10, 'Short'],
    ['JavaScript', 4, 'Java...'],
    ['Truncate me!', 8, 'Truncate...'],
    ['Exact', 5, 'Exact'],
    ['Edge case test', 9, 'Edge case...'],
  ])(
    'test.each — sentence: "%s", maxLength: %i → "%s"',
    (sentence, maxLength, expected) => {
      expect(shortSentence(sentence, maxLength)).toBe(expected);
    },
  );
});
