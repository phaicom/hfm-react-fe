import configs from '@phaicom/eslint-config'

export default configs(
  {
    react: true,
    tailwind: true,
    formatters: {
      html: true,
      css: true,
    },
  },
)
