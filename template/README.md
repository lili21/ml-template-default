{{ name }}
=================
> {{ description }}

Get Start
---------

```bash
# install dependencies
yarn

# serve with hot reload at localhost:8080
ml start

# build for production with minification
ml build

# build for staging
ml build  -e=staging
```

### 样式相关
> 支持 **css**, **scss**, **sass**，推荐使用**scss**

支持三种样式引入方式

- 直接`import/require`

    ```javascript
    import './style.scss'
    ...
    ```

- [**css modules**](https://github.com/css-modules/css-modules)

    ```javascript
    import style from './style.scss?modules'
    style.className
    ```

- [**style useable**](https://github.com/webpack-contrib/style-loader#useable)

    ```javascript
    import style from './style.scss?useable'
    style.use
    style.unuse
    ```

FYI
---

- `@` 为 `src` 目录的别名
- `__APP_ENV__` -- `lls-cli` 提供的全局变量 `'development' | 'staging' |'production'`
