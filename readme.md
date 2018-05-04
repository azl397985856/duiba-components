# Intro

兑吧 web component

## how to dev

`dev`

```bash
npm i
npm start
```

`build`

```bash
npm i
npm run build
```

for more infomation, please visite package.json

## how to use

### import

```html
  <script src="/build/duiba.js"></script>

  <!-- 运营位组件 -->
  <operation-list></operation-list>
```

### setProps

```js
function setProps(props, cmp) {
  if (!props) return;
  Object.keys(props).map(key => (cmp[key] = props[key]));
}
const operationList = document.querySelector("operation-list");
setProps(
  {
    list: [
      {
        imgUrl: "http://yun.dui88.com/duibaManagerWeb/znve5xfid2.jpg",
        title: "孙燕姿最新MV《天天年年》首播 共度充满回忆的岁末年终",
        by: "橘子娱乐"
      },
      {
        imgUrl: "http://yun.dui88.com/duibaManagerWeb/znve5xfid2.jpg",
        title: "苏运莹现身乡村教师颁奖礼 为公益献唱《野子》",
        by: "橘子娱乐"
      },
      {
        imgUrl: "http://yun.dui88.com/duibaManagerWeb/znve5xfid2.jpg",
        title: "一年到头，大家都忙着做“先锋”，张碧晨却主动“复古”",
        by: "橘子娱乐"
      }
    ]
  },
  operationList
);
```

### what you get

![duiba-component]()

## directory

```
|____components     (组件)
| |____my-button
| | |____my-button.css
| | |____my-button.spec.ts
| | |____my-button.tsx
| |____operation-list
| | |____operation-list.css
| | |____operation-list.spec.ts
| | |____operation-list.tsx
| | |____operation.d.ts
|____components.d.ts
|____index.html （html文件）
|____index.ts
|____stories    （storybook）
| |____operationList.stories.js
```

## Licence

MIT
