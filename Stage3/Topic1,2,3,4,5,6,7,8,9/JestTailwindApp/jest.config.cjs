/**
 * jest.config.cjs
 *
 * testEnvironment  → "jsdom" simulates a browser (window, document).
 *                    Required for React component tests.
 *                    Switch to "node" for pure logic/utility tests (faster).
 *
 * transform        → run every .js/.jsx through babel-jest so Jest can read
 *                    ESM imports and JSX syntax.
 *
 * setupFilesAfterEnv → runs after Jest's test environment is ready.
 *                      @testing-library/jest-dom adds DOM matchers like
 *                      toBeInTheDocument(), toHaveTextContent(), etc.
 *
 * moduleNameMapper → add this back if your tests ever import CSS or images:
 *   '\\.(css|scss)$': '<rootDir>/__mocks__/fileMock.cjs'
 */
module.exports = {
  testEnvironment: 'jsdom',

  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest', // handles .js, .jsx, .ts, .tsx
  },

  setupFilesAfterEnv: ['@testing-library/jest-dom'],

  moduleNameMapper: {
    // CSS imports → return empty object (prevents "SyntaxError: Unexpected token")
    '\\.(css|less|scss|sass)$': '<rootDir>/__mocks__/fileMock.cjs',
    // Image/SVG imports → return a string stub
    '\\.(jpg|jpeg|png|gif|svg|ico)$': '<rootDir>/__mocks__/fileMock.cjs',
  },
};
