# PWA Icon 生成指南

## 問題說明

PWA (Progressive Web App) 需要多個不同尺寸的高解析度 icon 才能在各種設備上清晰顯示。目前專案只有小尺寸的 ico 檔案，導致在手機上顯示模糊。

## 需要的 Icon 尺寸

- ✅ **192x192 px** - Android 最小要求（必需）
- ✅ **512x512 px** - Android 高解析度（必需）
- 📱 144x144 px - Windows/iOS（推薦）
- 📱 256x256 px - Windows（推薦）
- 📱 384x384 px - 高解析度設備（推薦）

## 方法一：使用線上工具（推薦）

### 1. PWA Builder Image Generator

**網址**: https://www.pwabuilder.com/imageGenerator

**步驟**:
1. 準備一張至少 512x512 的正方形圖片
2. 上傳到 PWA Builder
3. 選擇 "Generate Icons"
4. 下載生成的 ZIP 檔案
5. 解壓縮後將以下檔案複製到 `public/` 資料夾：
   - `windows11/Square192x192Logo.scale-100.png` → 重命名為 `icon-192x192.png`
   - `windows11/Square512x512Logo.scale-100.png` → 重命名為 `icon-512x512.png`
   - 其他尺寸依此類推

### 2. RealFaviconGenerator

**網址**: https://realfavicongenerator.net/

**步驟**:
1. 上傳你的原始圖片（建議至少 512x512）
2. 調整各平台的設定
3. 點擊 "Generate your Favicons and HTML code"
4. 下載 favicon package
5. 從下載的檔案中找到對應尺寸的 PNG 檔案
6. 重命名並複製到 `public/` 資料夾

### 3. Favicon.io

**網址**: https://favicon.io/

**功能**:
- PNG 轉 ICO
- 文字轉 Icon
- Emoji 轉 Icon（如果想用可愛的表情符號）

## 方法二：使用圖片編輯軟體

### 使用現有的 cubone.webp

如果你想使用專案中已有的 `cubone.webp`：

1. **轉換 WebP 到 PNG**
   - 線上工具: https://cloudconvert.com/webp-to-png
   - 上傳 `src/assets/images/cubone.webp`
   - 下載 PNG 檔案

2. **調整大小**
   - 使用 Photoshop / GIMP / Canva
   - 或線上工具: https://www.iloveimg.com/resize-image
   - 創建以下尺寸：
     - 512x512 px
     - 384x384 px
     - 256x256 px
     - 192x192 px
     - 144x144 px

3. **儲存檔案**
   - 格式: PNG
   - 命名: `icon-{尺寸}.png`
   - 例如: `icon-192x192.png`, `icon-512x512.png`

## 方法三：使用 Sharp (Node.js)

如果你熟悉 Node.js，可以使用這個腳本自動生成：

```bash
# 安裝 sharp
npm install --save-dev sharp

# 創建 generate-icons.js
```

```javascript
// generate-icons.js
const sharp = require('sharp');
const fs = require('fs');

const sizes = [144, 192, 256, 384, 512];
const inputImage = './src/assets/images/cubone.webp'; // 或你的原始圖片

sizes.forEach(size => {
  sharp(inputImage)
    .resize(size, size)
    .png()
    .toFile(`./public/icon-${size}x${size}.png`)
    .then(() => console.log(`Generated icon-${size}x${size}.png`))
    .catch(err => console.error(err));
});
```

```bash
# 執行腳本
node generate-icons.js
```

## 完成後的檔案結構

```
public/
├── icon-144x144.png  (可選)
├── icon-192x192.png  ✅ 必需
├── icon-256x256.png  (可選)
├── icon-384x384.png  (可選)
├── icon-512x512.png  ✅ 必需
├── kalakala.ico      (保留作為 favicon)
├── manifest.json     ✅ 已更新
└── index.html        ✅ 已更新
```

## 驗證 Icon

### 1. 本地測試

```bash
npm start
```

在 Chrome DevTools 中：
1. 按 F12 打開開發者工具
2. 點擊 "Application" 標籤
3. 左側選擇 "Manifest"
4. 檢查 icons 是否正確顯示

### 2. 線上測試

部署後使用以下工具測試：
- **PWA Builder**: https://www.pwabuilder.com/
- **Lighthouse**: Chrome DevTools > Lighthouse > 執行 PWA 審查

## 設計建議

### Icon 設計要點

1. **正方形**: 確保圖片是正方形（1:1 比例）
2. **安全區域**: 重要內容保持在中心 80% 區域內
3. **簡潔明瞭**: Icon 要在小尺寸下也能辨識
4. **背景**:
   - 透明背景（PNG）會自動套用 manifest.json 中的 background_color
   - 或使用純色背景
5. **高對比度**: 確保在深色和淺色背景下都清晰可見

### Maskable Icons

`manifest.json` 中的 `"purpose": "any maskable"` 表示 icon 可以被遮罩（如圓形、方形等）。

如果你的 icon 有重要元素在邊緣，建議：
- 創建專門的 maskable 版本
- 將重要內容放在中心 80% 的安全區域內

測試工具: https://maskable.app/

## 快速開始（推薦流程）

1. 前往 https://www.pwabuilder.com/imageGenerator
2. 上傳你想用的圖片（建議使用 cubone.webp 或任何你喜歡的圖片）
3. 下載生成的 icons
4. 將對應尺寸的檔案重命名並複製到 `public/` 資料夾
5. 執行 `npm start` 測試
6. 如果滿意，執行 `npm run deploy` 部署

## 注意事項

- ✅ manifest.json 和 index.html 已經更新好了
- ✅ 你只需要生成並放置 PNG 圖片檔案
- ⚠️ 如果某個尺寸的檔案不存在，可以先刪除 manifest.json 中對應的條目
- ⚠️ 最少需要 192x192 和 512x512 兩個尺寸

## 疑難排解

### Q: Icon 還是模糊？
A: 清除瀏覽器快取和 Service Worker：
- Chrome: F12 > Application > Clear storage > Clear site data
- 或使用無痕模式測試

### Q: Icon 沒有更新？
A: Service Worker 可能使用了舊的快取
```bash
# 重新建立和部署
npm run build
npm run deploy
```

### Q: 想用 emoji 當 icon？
A: 使用 https://favicon.io/emoji-favicons/ 可以快速生成

## 需要幫助？

如果在生成 icon 時遇到問題，可以：
1. 提供你想用的圖片
2. 說明想要的風格
3. 我可以幫你找更合適的工具或方法
