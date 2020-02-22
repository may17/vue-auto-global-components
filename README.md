# Vue-Auto-Global-Components
This little vue plugin enables you to autoload global components without the hazzle of register every single global component individually.

## Install package
### NPM
```
npm install vue-auto-global-components
```

### YARN 1.x
```
yarn add vue-auto-global-components
```

## Register Plugin
```javascript
import Vue from 'vue'
import { GlobalComponentWebpackLoader } from 'vue-auto-global-components'

Vue.use(WebpackGlobalComponentLoader)
```
### Or directly
```javascript
import Vue from 'vue'
import AutoLoader from 'vue-auto-global-components/webpack'
Vue.use(AutoLoader)
```

## File name convention
An global component file must start with the "G-" prefix inside the copmonents directory.

```
...
components/
    G-Headline.vue
    utils
        G-Image.vue
        lists
            G-UnsoretedList.vue
...
```

## Troublespots

### Nuxt returns error Missing stack frames
This problem could came up if you work in nuxt dev mode with mode universal. You can easily avoid that problem by defining your plugin file as not handled as ssr.

```javascript
// nuxt.config.js
export default {
  plugins: [
    { ssr: false, src: '~plugins/myJsFileWhereTheLoaderIsRegistered.js' }
  ]
```
