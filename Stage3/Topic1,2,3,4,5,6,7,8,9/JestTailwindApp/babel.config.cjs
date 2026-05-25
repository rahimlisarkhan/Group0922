/**
 * babel.config.cjs
 *
 * WHY .cjs?
 *   This project has "type": "module" in package.json, which makes Node treat
 *   every .js file as ESM. Jest runs in CommonJS mode by default, so Babel
 *   config must be a CommonJS file (.cjs) to be loaded by Jest correctly.
 *
 * WHAT EACH PRESET DOES:
 *   @babel/preset-env  → converts modern JS (ES2020+, import/export) to
 *                        CommonJS so Jest (which uses require()) can run it.
 *   @babel/preset-react → converts JSX (<App />) to React.createElement() calls
 *                         so Jest doesn't choke on JSX syntax.
 */
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: { node: 'current' }, // only transpile what the current Node can't handle
      },
    ],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic', // no need to import React in every file (React 17+)
      },
    ],
  ],
};
