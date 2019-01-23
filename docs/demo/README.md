# Demo

<img :src="$withBase('/hero.png')" alt="hero">

Hello VuePress

## 嘿嘿

[Home](/) <!-- 跳转到根部的 README.md -->

### 唉！

<demo-1 />

<OtherComponent />

<Foo-Bar />

## 搞什麼！

::: v-pre
`{{ This will be displayed as-is }}`
:::

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

## 先別說這個

你有聽過 ...

### Badge <Badge text="beta" type="warn"/> <Badge text="0.10.1+"/>

``` js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
