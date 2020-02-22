import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

export default {
  install (Vue) {
    const requireComponent = require.context(
      '@/components',
      true,
      /G-[A-Z]\w+\.(vue|js)$/
    )

    requireComponent.keys().forEach((path) => {
      const componentConfig = requireComponent(path)
      const fileName = path
        .split('/')
        .pop()
        .replace(/.\w+$/, '')

      const componentName = upperFirst(
        camelCase(fileName)
      )

      Vue.component(componentName, componentConfig.default || componentConfig)
    })
  }
}
