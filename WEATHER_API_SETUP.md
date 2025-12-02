# 氣象局 API 設定指南

## 問題說明

Weather 組件需要使用中央氣象署開放資料平臺的 API Key 才能正常運作。如果沒有設定 API Key，會出現以下錯誤：

```
GET https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=undefined
401 (Unauthorized)
CORS policy error
```

## 快速設定步驟

### 1. 申請氣象局 API Key

1. **前往中央氣象署開放資料平臺**
   ```
   https://opendata.cwa.gov.tw/
   ```

2. **註冊/登入帳號**
   - 點擊右上角「會員專區」
   - 如果沒有帳號，先「註冊新帳號」
   - 已有帳號直接「登入」

3. **申請 API 授權碼**
   - 登入後，點擊「取得授權碼」
   - 填寫申請表單（用途可填：個人網站展示天氣資訊）
   - 送出後會立即收到 **API 授權碼**

4. **記下你的 API Key**
   - API 授權碼格式類似：`CWA-XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX`
   - ⚠️ 請妥善保管，不要洩漏給他人

### 2. 設定環境變數

#### 方法 A：修改 .env 檔案（推薦）

1. 打開專案根目錄的 `.env` 檔案

2. 將 `your_api_key_here` 替換成你的實際 API Key：

   ```env
   REACT_APP_WEATHER_API_KEY=CWA-XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
   ```

3. 儲存檔案

#### 方法 B：從範例檔案複製

如果 `.env` 檔案不存在：

```bash
# 複製範例檔案
cp .env.example .env

# 然後編輯 .env 檔案，填入你的 API Key
```

### 3. 重啟開發伺服器

環境變數只在啟動時讀取，所以需要重啟：

```bash
# 按 Ctrl+C 停止目前的開發伺服器

# 重新啟動
npm start
```

### 4. 驗證設定

開啟瀏覽器到 `http://localhost:3000`，檢查：

✅ 不再出現 `Authorization=undefined` 錯誤
✅ Weather 組件正確顯示天氣資訊
✅ 溫度圖表正常顯示

## 常見問題排解

### Q1: 我找不到 .env 檔案

A: `.env` 檔案可能被隱藏了。

**在 VS Code 中：**
- 確保「顯示隱藏檔案」已開啟
- 或直接在終端機建立：
  ```bash
  cp .env.example .env
  ```

**在 Mac/Linux 終端機：**
```bash
ls -la | grep .env
```

**在 Windows 命令提示字元：**
```bash
dir /a | findstr .env
```

### Q2: 設定後還是出現錯誤

**解決方法：**

1. **確認 API Key 正確無誤**
   - 沒有多餘的空格
   - 完整複製整個授權碼

2. **確認環境變數名稱正確**
   - 必須是 `REACT_APP_WEATHER_API_KEY`
   - React 的環境變數必須以 `REACT_APP_` 開頭

3. **清除快取並重新建立**
   ```bash
   # 刪除快取和建置檔案
   rm -rf node_modules/.cache
   rm -rf build

   # 重新啟動
   npm start
   ```

4. **檢查 .env 檔案編碼**
   - 確保是 UTF-8 編碼
   - 沒有 BOM (Byte Order Mark)

### Q3: 部署到 GitHub Pages 後天氣功能無法使用

A: GitHub Pages 部署需要特別設定環境變數。

**方法 1: 使用 GitHub Secrets（推薦）**

1. 前往 GitHub 專案 > Settings > Secrets and variables > Actions
2. 新增 Repository secret:
   - Name: `REACT_APP_WEATHER_API_KEY`
   - Value: 你的 API Key

3. 修改 package.json 的 build script：
   ```json
   {
     "scripts": {
       "build": "react-scripts build",
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

4. 建立 GitHub Actions workflow（如果需要自動部署）

**方法 2: 本地建置時包含環境變數**

⚠️ 注意：這會將 API Key 包含在公開的建置檔案中，不太安全

```bash
# 確保 .env 檔案有正確的 API Key
# 然後部署
npm run deploy
```

### Q4: API 呼叫次數限制

中央氣象署 API 有呼叫次數限制：
- 免費版：每日限制呼叫次數

**解決方法：**
- 在 Weather.jsx 中已加入錯誤處理
- 如果超過限制，會顯示預設城市（臺南市）
- 可考慮加入快取機制減少 API 呼叫

### Q5: 地理位置權限被拒絕

如果瀏覽器拒絕地理位置權限：
- Weather 組件會自動使用預設城市（臺南市）
- 使用者仍可手動選擇其他城市

## API 資訊

### 使用的 API

- **API 名稱**: 一般天氣預報-今明 36 小時天氣預報
- **API 代碼**: F-C0032-001
- **資料內容**: 最高溫、最低溫預報
- **更新頻率**: 每 6 小時更新一次

### API 回應範例

```json
{
  "success": "true",
  "records": {
    "location": [{
      "locationName": "臺南市",
      "weatherElement": [
        {
          "elementName": "MinT",
          "time": [
            {
              "startTime": "2025-12-02 06:00:00",
              "parameter": {
                "parameterName": "18"
              }
            }
          ]
        },
        {
          "elementName": "MaxT",
          "time": [
            {
              "startTime": "2025-12-02 06:00:00",
              "parameter": {
                "parameterName": "25"
              }
            }
          ]
        }
      ]
    }]
  }
}
```

## 程式碼修復說明

本次修復包含以下改進：

### Weather.jsx 修復項目

1. **地理位置檢查改進** (第 45 行)
   ```javascript
   // 修復前：即使 lat/lon 是 null 也會呼叫 API
   if (coordinates !== null)

   // 修復後：確保兩個值都不是 null
   if (coordinates.latitude !== null && coordinates.longitude !== null)
   ```

2. **防護性檢查** (第 61-65 行)
   ```javascript
   // 檢查 address 是否存在，避免 undefined.split() 錯誤
   if (!address) {
     setSelectedOption("臺南市");
     return;
   }
   ```

3. **API 回應驗證** (第 107-121 行)
   ```javascript
   // 檢查 API 回應結構
   if (result?.success === "true" && result?.records?.location) {
     // 確保資料完整性
     if (data?.weatherElement && data.weatherElement.length >= 2) {
       setApiData(data);
     }
   }
   ```

4. **Optional Chaining** (第 172-210 行)
   ```javascript
   // 使用 ?. 避免讀取 undefined 屬性
   apiData?.weatherElement?.[1]?.time?.[0]?.parameter?.parameterName || "N/A"
   ```

## 安全建議

1. ✅ `.env` 檔案已加入 `.gitignore`，不會被提交到 Git
2. ✅ 提供 `.env.example` 作為範本
3. ⚠️ 永遠不要將 API Key 直接寫在程式碼中
4. ⚠️ 不要將 `.env` 檔案上傳到 GitHub
5. ⚠️ 如果不小心洩漏了 API Key，請立即到氣象署平臺重新產生

## 其他相關 API

中央氣象署還提供許多其他 API，可用於擴充功能：

- 鄉鎮天氣預報
- 一週天氣預報
- 地震資訊
- 颱風資訊
- 雨量資訊

詳情請參考：https://opendata.cwa.gov.tw/dist/opendata-swagger.html

## 需要協助？

如果在設定過程中遇到問題：

1. 檢查瀏覽器 Console 的錯誤訊息
2. 確認 API Key 是否正確
3. 確認 .env 檔案格式是否正確
4. 確認有重新啟動開發伺服器

還是無法解決？提供以下資訊會更容易找到問題：
- 錯誤訊息截圖
- .env 檔案內容（隱藏 API Key）
- 瀏覽器 Console 完整錯誤訊息
