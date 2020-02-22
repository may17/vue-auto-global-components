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
