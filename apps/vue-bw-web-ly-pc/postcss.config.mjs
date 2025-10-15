import plugins from '@web/tailwind-config/postcss';

import tailwindConfig from './tailwind.config.mjs';

plugins.plugins.tailwindcss = {
  ...tailwindConfig,
};
export default plugins;
// export { default } from '@web/tailwind-config/postcss';
