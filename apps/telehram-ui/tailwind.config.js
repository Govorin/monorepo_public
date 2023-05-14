const { join } = require('path');

const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
    'apps/telehram-ui/{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
