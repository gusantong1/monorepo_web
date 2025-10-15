import tailwindConfig from '@web/tailwind-config';

const childrenColor = {
  /* 薄荷绿 */
  'green1-8': `var(--green1-8)`,
  'green1-7': `var(--green1-7)`,
  'green1-6': `var(--green1-6)`,
  'green1-5': `var(--green1-5)`,
  'green1-4': `var(--green1-4)`,
  'green1-3': `var(--green1-3)`,
  'green1-2': `var(--green1-2)`,
  'green1-1': `var(--green1-1)`,

  /* 草绿色 */
  'lime2-8': `var(--lime2-8)`,
  'lime2-7': `var(--lime2-7)`,
  'lime2-6': `var(--lime2-6)`,
  'lime2-5': `var(--lime2-5)`,
  'lime2-4': `var(--lime2-4)`,
  'lime2-3': `var(--lime2-3)`,
  'lime2-2': `var(--lime2-2)`,
  'lime2-1': `var(--lime2-1)`,

  /* 赤红色 */
  'red-8': `var(--red-8)`,
  'red-7': `var(--red-7)`,
  'red-6': `var(--red-6)`,
  'red-5': `var(--red-5)`,
  'red-4': `var(--red-4)`,
  'red-3': `var(--red-3)`,
  'red-2': `var(--red-2)`,
  'red-1': `var(--red-1)`,

  /* 灰色1 */
  'grey1-8': `var(--grey1-8)`,
  'grey1-7': `var(--grey1-7)`,
  'grey1-6': `var(--grey1-6)`,
  'grey1-5': `var(--grey1-5)`,
  'grey1-4': `var(--grey1-4)`,
  'grey1-3': `var(--grey1-3)`,
  'grey1-2': `var(--grey1-2)`,
  'grey1-1': `var(--grey1-1)`,

  /* 灰色2 */
  'grey2-8': `var(--grey2-8)`,
  'grey2-7': `var(--grey2-7)`,
  'grey2-6': `var(--grey2-6)`,
  'grey2-5': `var(--grey2-5)`,
  'grey2-4': `var(--grey2-4)`,
  'grey2-3': `var(--grey2-3)`,
  'grey2-2': `var(--grey2-2)`,
  'grey2-1': `var(--grey2-1)`,

  /* 绿松石绿 */
  'turquoise-8': `var(--turquoise-8)`,
  'turquoise-7': `var(--turquoise-7)`,
  'turquoise-6': `var(--turquoise-6)`,
  'turquoise-5': `var(--turquoise-5)`,
  'turquoise-4': `var(--turquoise-4)`,
  'turquoise-3': `var(--turquoise-3)`,
  'turquoise-2': `var(--turquoise-2)`,
  'turquoise-1': `var(--turquoise-1)`,

  /* 青瓷绿 */
  'celadon-green-8': `var(--celadon-green-8)`,
  'celadon-green-7': `var(--celadon-green-7)`,
  'celadon-green-6': `var(--celadon-green-6)`,
  'celadon-green-5': `var(--celadon-green-5)`,
  'celadon-green-4': `var(--celadon-green-4)`,
  'celadon-green-3': `var(--celadon-green-3)`,
  'celadon-green-2': `var(--celadon-green-2)`,
  'celadon-green-1': `var(--celadon-green-1)`,

  /* 主色-primary */
  'hex-primary1-4': `var(--hex-primary1-4)`,
  'hex-primary2-4': `var(--hex-primary2-4)`,

  /* 次要色-secondary */
  'hex-secondary-4': `var(--hex-secondary-4)`,

  /* 背景色-bg */
  'hex-bg1-7': `var(--hex-bg1-7)`,
  'hex-bg1-6': `var(--hex-bg1-6)`,
  'hex-bg1-5': `var(--hex-bg1-5)`,
  'hex-bg1-4': `var(--hex-bg1-4)`,
  'hex-bg-4': `var(--hex-bg-4)`,
  'hex-bg1-1': `var(--hex-bg1-1)`,

  /* 文字与图标颜色-text */
  'hex-text1-1': `var(--hex-text1-1)`,
  'hex-text2-5': `var(--hex-text2-5)`,
  'hex-text2-1': `var(--hex-text2-1)`,
  'hex-text-1': `var(--hex-text-1)`,

  /* 描边色-border */
  'hex-border1-1': `var(--hex-border1-1)`,

  /* 渐变色-gradient */
  'hex-gradient1-4': `var(--hex-gradient1-4)`,
  'hex-gradient2-4': `var(--hex-gradient2-4)`,
};

export default {
  ...tailwindConfig,
  theme: {
    ...tailwindConfig.theme,
    extend: {
      ...tailwindConfig.theme.extend,
      colors: {
        ...tailwindConfig.theme.extend.colors,
        ...childrenColor,
      },
    },
  },
};
