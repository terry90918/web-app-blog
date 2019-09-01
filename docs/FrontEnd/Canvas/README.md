# Canvas 基礎

- 可以自由繪製的文件區域
- 可以控制每像素的顏色與繪製
- 有高的操控度，相對高的技術門檻
- 可以想像成一張動態可改寫的圖片

## 我們再 Canvas 要掌握的

- 繪製圖型
- 向量概念
- 三角函數數學 - sin, cos, tan...
- 物件導向開發

## 圖片像素的概念

如果有一張圖片，圖片上有一條線，圖片有寬度與高度，像素就如在特定的寬度與高度圖片上塗上顏色，當像素夠多的時候就會變成一條線，而不會是一格一格的格子狀填色。

Canvas 也是相同想法，指定寬度與高度在填入的顏色。

## 確定位址/指定顏色

確定位置數學直角坐標 - (x, y)

## 點線面構成圖形

1. 用點跟線連成面
2. 根據路徑填色或畫線

## Canvas 座標方向

1. 原點在左上方
2. 角度為逆時鐘

## 新增 Canvas 語法

```html
<!-- Canvas 元素 -->
<canvas id="#my-canvas"></canvas>
```

```javascript
// 取得 Canvas 元素
var canvas = document.getElementById('my-canvas');
// 初始化 Canvas 2d 工具
var ctx = canvas.getContext('2d');
// 設定畫布尺寸
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// 開始繪製
ctx.beginPath();
// 移動繪製點
ctx.moveTo(50, 50);
// 繪製線條至座標
ctx.lineTo(100, 100);
ctx.lineTo(250, 20);
// 關閉繪製路徑
ctx.closePath();
// 填入顏色設定 - 黑色
ctx.fillStyle = "black";
// 填入顏色
ctx.fill();
```

## 基礎圖形

- 填滿矩形 - **fillRect(x, y, w, h)**
- 繪製線框矩形 - **strokeRect(x, y, w, h)**
- 清除矩形範圍 - **clearRect(x, y, w, h)**

## 路徑繪製

- 路徑開始與封閉 - **beginPath / closePath**
- 移動與畫線 - **moveTo / LineTo / arc ...**
- 指定填色或線條顏色 - **fillStyle / lineStyle**
- _最後_ 把路徑填色或描出來 - **stroke / fill**

## 圓形的路徑

- arc(x, y, r, start Angle, end Angle)
  - x, y: 圓心座標
  - r: 半徑
  - start Angle: **開始**角度
  - end Angle: **結束**角度
- 0 - 360 必須要寫 0 - 2\*Math.PI

## 色彩系統

- rgb(255, 255, 255)
- rgba(255, 255, 255, 0.5)
- hsl(彩度, 飽和度, 亮度)
  - `hsl(180, 50%, 50%)`
  - 0 - 360 紅橙黃綠藍靛紫
  - 後面兩個 50% 都是正常的
- hsla(彩度, 飽和度, 亮度, 透明度)

## 時間函數與動畫

- setInterval(**update, time**)
  - update: 函數
  - time: 更新時間
- [requestAnimationFrame(**update**)]
  - 會自動判斷何時更新畫面為最佳化，並自動幫你更新畫面
  - 針對視覺更新避免 setTimeout 或 setInterval，一律改為使用 requestAnimationFrame
    > 延伸閱讀 - [最佳化 JavaScript 執行](https://developers.google.com/web/fundamentals/performance/rendering/optimize-javascript-execution?hl=zh-tw)
- 更新影格
  - 使用 clearRect 或 fillRect
  - 覆蓋上次繪製的圖形

利用不完全清除保留之前的狀態，可以看到視覺藝術的殘影效果。

## 簡易互動輸入 取得滑鼠位置

- `addEventListener('mousemove', function() {...})`  
  - 滑鼠移動時呼叫
- `addEventListener('mousedown', function() {...})`  
  - 滑鼠按下點擊時呼叫
- `addEventListener('mouseup', function() {...})`  
  - 滑鼠放開點擊時呼叫
- `addEventListener('click', function() {...})`  
  - 滑鼠點擊時呼叫
