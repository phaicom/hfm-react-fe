import configs from '@phaicom/eslint-config'

export default configs(
  {
    react: true,
    tailwind: true,
    formatters: {
      html: true,
      css: true,
    },
    ignores: ['apps/web/src/components/ui'],
    settings: {
      'better-tailwindcss': {
        entryPoint: 'apps/web/src/index.css',
      },
    },
  },
)
