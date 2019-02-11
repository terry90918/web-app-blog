# 實作範例

## 紅色方塊 - 實心

Demo: [傳送門](https://codepen.io/LovePanda/full/gqewWw)

```html
<canvas id="#my-canvas"></canvas>
```

```sass
html, body
  height: 100%
  display: flex
  justify-content: center
  align-items: center
#my-canvas
  border: 1px solid #000
```

```javascript
// 取得 Canvas 元素
var canvas = document.getElementById("my-canvas");
// 初始化 Canvas 2d 工具
var ctx = canvas.getContext("2d");

// 設定畫布尺寸
canvas.width = 400;
canvas.height = 400;

// 紅色方塊 - 實心
ctx.fillStyle = "red";
ctx.fillRect(100, 100, 200, 200);
ctx.fillRect(300, 300, 100, 100);
```

## 紅色方塊 - 線條

Demo: [傳送門](https://codepen.io/LovePanda/full/mvxrLO)

```html
<canvas id="#my-canvas"></canvas>
```

```sass
html, body
  height: 100%
  display: flex
  justify-content: center
  align-items: center
#my-canvas
  border: 1px solid #000
```

```javascript
// 取得 Canvas 元素
var canvas = document.getElementById("my-canvas");
// 初始化 Canvas 2d 工具
var ctx = canvas.getContext("2d");

// 設定畫布尺寸
canvas.width = 400;
canvas.height = 400;

// 紅色方塊 - 線條
ctx.strokeStyle = "red";
ctx.strokeRect(100, 100, 200, 200);
ctx.strokeRect(300, 300, 100, 100);
```

## Canvas - 點線面

Demo: [傳送門](https://codepen.io/LovePanda/full/bzvwMY)

```html
<canvas id="#my-canvas"></canvas>
```

```sass
html, body
  height: 100%
  display: flex
  justify-content: center
  align-items: center
#my-canvas
  border: 1px solid #000
```

```javascript
// 取得 Canvas 元素
var canvas = document.getElementById("my-canvas");
// 初始化 Canvas 2d 工具
var ctx = canvas.getContext("2d");

// 設定畫布尺寸
canvas.width = 400;
canvas.height = 400;

// 點線面
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(300, 100);
ctx.lineTo(300, 200);
ctx.lineTo(100, 300);
ctx.closePath();
ctx.stroke();
// or
// ctx.fill();
```

若 `ctx.stroke();` 改為 `ctx.fill();`，就不需要 `ctx.closePath();`，因為它會自動幫你關閉。

## 一次畫多個路徑

Demo: [傳送門](https://codepen.io/LovePanda/full/ZwxpwP)

```html
<canvas id="#my-canvas"></canvas>
```

```sass
html, body
  height: 100%
  display: flex
  justify-content: center
  align-items: center
#my-canvas
  border: 1px solid #000
```

```javascript
// 取得 Canvas 元素
var canvas = document.getElementById("my-canvas");
// 初始化 Canvas 2d 工具
var ctx = canvas.getContext("2d");

// 設定畫布尺寸
canvas.width = 400;
canvas.height = 400;

// 一次畫多個路徑
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(300, 100);
ctx.lineTo(300, 200);
ctx.lineTo(100, 300);
ctx.closePath();
ctx.rect(300, 300, 50, 50);
ctx.fill();
```

## 繪製半圓形

Demo: [傳送門](https://codepen.io/LovePanda/full/yZKMPE)

```html
<canvas id="#my-canvas"></canvas>
```

```sass
html, body
  height: 100%
  display: flex
  justify-content: center
  align-items: center
#my-canvas
  border: 1px solid #000
```

```javascript
// 取得 Canvas 元素
var canvas = document.getElementById("my-canvas");
// 初始化 Canvas 2d 工具
var ctx = canvas.getContext("2d");

// 設定畫布尺寸
canvas.width = 400;
canvas.height = 400;

// 繪製半圓
ctx.beginPath();
ctx.arc(200, 200, 100, 0, Math.PI);
ctx.fill();
// or
// ctx.stroke(); // 半圓弧的線條
```

## 繪製圓形

Demo: [傳送門](https://codepen.io/LovePanda/full/MLVpVP)

```html
<canvas id="#my-canvas"></canvas>
```

```sass
html, body
  height: 100%
  display: flex
  justify-content: center
  align-items: center
#my-canvas
  border: 1px solid #000
```

```javascript
// 取得 Canvas 元素
var canvas = document.getElementById("my-canvas");
// 初始化 Canvas 2d 工具
var ctx = canvas.getContext("2d");

// 設定畫布尺寸
canvas.width = 400;
canvas.height = 400;

// 繪製圓形
ctx.beginPath();
ctx.arc(200, 200, 100, 0, 2 * Math.PI);
ctx.fill();
// or
// ctx.stroke(); // 圓型弧的線條
```

## 積木城堡與車子

Demo: [傳送門](https://codepen.io/LovePanda/full/PVRpem)

```html
<canvas id="#my-canvas"></canvas>
```

```sass
html, body
  height: 100%
  display: flex
  justify-content: center
  align-items: center
  background-color: black
#my-canvas
  border: 1px solid #000
  background-color: white
```

```javascript
// 取得 Canvas 元素
var canvas = document.getElementById('my-canvas');
// 初始化 Canvas 2d 工具
var ctx = canvas.getContext('2d');

// 設定畫布尺寸
canvas.width = 400;
canvas.height = 400;

var time = 0;

// 繪製積木城堡與車子
function draw() {
  time++;
  ctx.clearRect(0, 0, 400, 400);
  // or
  // 車子殘影效果
  // ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
  // ctx.fillRect(0, 0, 400, 400);
  ctx.beginPath();
  // 繪製網格
  for (let i = 0; i < 10; i++) {
    let pos = i * 50;
    // X 軸上的垂直線
    ctx.moveTo(pos, 0);
    ctx.lineTo(pos, 400);
    ctx.fillText(pos, pos, 10);
    // Y 軸上的水平線
    ctx.moveTo(0, pos);
    ctx.lineTo(400, pos);
    ctx.fillText(pos, 10, pos);
  }
  ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
  ctx.stroke();
 
  // 繪製地面
  ctx.beginPath();
  ctx.moveTo(25, 350);
  ctx.lineTo(375, 350);
  ctx.lineWidth = 2;
  ctx.strokeStyle = 'black';
  ctx.stroke();
  
  // 繪製右方第一個方塊
  ctx.fillStyle = '#ed5a2a';
  ctx.fillRect(300, 300, 50, 50);
  ctx.strokeRect(300, 300, 50, 50);
  
  // 繪製黃色一大一小方塊
  ctx.beginPath();
    ctx.rect(50, 300, 50, 50);  
    ctx.rect(250, 250, 50, 100);
  ctx.fillStyle = '#ffc12c';
  ctx.fill();
  ctx.stroke();
  
  // 繪製拱門柱子方塊
  ctx.beginPath();
    ctx.rect(100, 250, 50, 100);  
    ctx.rect(200, 250, 50, 100);
  ctx.fillStyle = '#ff9f51';
  ctx.fill();
  ctx.stroke();
  
  // 繪製拱門
  ctx.beginPath();
    ctx.moveTo(100, 200);
    ctx.lineTo(250, 200);
    ctx.lineTo(250, 250);
    ctx.lineTo(200, 250);
    // 繪製半圓形, 最後參數預設 false 順時針, 改為 true 逆時針
    ctx.arc(175, 250, 25, Math.PI * 2, Math.PI, true);
    ctx.lineTo(100, 250);
    ctx.closePath();
  ctx.fillStyle = 'white';
  ctx.fill();
  ctx.stroke();
  
  // 繪製屋頂
  ctx.beginPath();
    ctx.moveTo(100, 200);
    ctx.lineTo(175, 150);
    ctx.lineTo(250, 200);
    ctx.closePath();
  ctx.fillStyle = '#ed5a2a';
  ctx.fill();
  ctx.stroke();
  
  // 繪製旗幟
  ctx.beginPath();
    ctx.moveTo(175, 150);
    // 旗幟變換高度 - (mouse.y / 5)
    ctx.lineTo(175, 100 - (mouse.y / 5));
    // 旗幟飄逸 - (time % 5)
    ctx.lineTo(200, 110 - (time % 5) - (mouse.y / 5));
    ctx.lineTo(175, 120 - (mouse.y / 5));
    ctx.closePath();
  // 旗幟變換顏色
  ctx.fillStyle = `hsl(${(mouse.x % 360)}, 50%, 50%)`;
  ctx.fill();
  ctx.stroke();
  
  // 繪製車子
  ctx.fillStyle = 'white';
  let carX = (time % 440) - 40;
  // 先填色在畫線, 線才不會被填色覆蓋
  ctx.fillRect(carX, 325, 40, 25);
  ctx.strokeRect(carX, 325, 40, 25);
  ctx.beginPath();
    ctx.arc(carX + 10, 350, 5, 0, Math.PI * 2);
    ctx.arc(carX + 30, 350, 5, 0, Math.PI * 2);
  ctx.fillStyle = 'black';
  ctx.fill();
  ctx.stroke();
  
  // 繪製滑鼠圓點
  ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, 5, 0, Math.PI * 2);
  ctx.fillStyle = 'black';
  ctx.fill();
  
  
}

// draw();
setInterval(draw, 30);
// requestAnimationFrame(draw);

var mouse = { x: 0, y: 0 }
canvas.addEventListener('mousemove', function(e) {
  mouse.x = e.offsetX;
  mouse.y = e.offsetY;
});
```
