# Next.js 專案部署到 GitHub Pages 完整指南

## 📋 目錄
1. [部署原理說明](#部署原理說明)
2. [前置準備](#前置準備)
3. [專案配置步驟](#專案配置步驟)
4. [GitHub 設定](#github-設定)
5. [部署流程](#部署流程)
6. [常見問題排除](#常見問題排除)

---

## 🔍 部署原理說明

這個專案能夠自動部署到 GitHub Pages 的關鍵在於以下三個核心配置：

### 1. **Next.js 靜態導出配置** (`next.config.mjs`)
- 將 Next.js 應用轉換為純靜態 HTML/CSS/JS 文件
- 配置子路徑支援（如 `username.github.io/repo-name`）
- 關閉不支援的功能（如圖片優化）

### 2. **GitHub Actions 自動化工作流** (`.github/workflows/deploy.yml`)
- 監聽 `main` 分支的 push 事件
- 自動執行建置和部署流程
- 無需手動操作

### 3. **GitHub Pages 服務**
- 託管靜態網站
- 提供免費的 HTTPS 域名

---

## ✅ 前置準備

### 1. 確認環境
- Node.js 版本：**18.x 或更高**（建議 20.x）
- npm 或 yarn 已安裝
- Git 已安裝並配置

### 2. GitHub 帳號
- 確保你有 GitHub 帳號
- 已建立或準備建立新的 repository

---

## ⚙️ 專案配置步驟

### 步驟 1: 修改 `next.config.mjs`

在你的 Next.js 專案根目錄創建或修改 `next.config.mjs`：

```javascript
// GitHub Pages 部署設定
const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const repoName = '/your-repo-name'; // ⚠️ 修改為你的 repo 名稱

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 靜態導出 (GitHub Pages 需要)
  output: 'export',

  // 子路徑設定 (部署到 username.github.io/repo-name)
  basePath: isGitHubPages ? repoName : '',
  assetPrefix: isGitHubPages ? repoName : '',

  // 確保每個路由都有 index.html (避免 404)
  trailingSlash: true,

  // 圖片優化 (靜態導出不支援，需關閉)
  images: {
    unoptimized: true,
  },

  // 明確設定環境變數（如果需要）
  env: {
    NEXT_PUBLIC_BASE_PATH: isGitHubPages ? repoName : '',
  },
};

export default nextConfig;
```

**重要提醒：**
- 將 `'/your-repo-name'` 替換為你的實際 repository 名稱
- 如果部署到 `username.github.io`（用戶主頁），則將 `repoName` 設為 `''`

---

### 步驟 2: 創建 GitHub Actions 工作流

在專案根目錄創建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]  # 當推送到 main 分支時觸發
  workflow_dispatch:  # 允許手動觸發

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: 'pages'
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build
        env:
          GITHUB_PAGES: 'true'
          # 如果有需要的環境變數，在這裡添加
          # NEXT_PUBLIC_API_KEY: ${{ secrets.API_KEY }}

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

**說明：**
- `on.push.branches: [main]`：監聽 main 分支的推送
- `GITHUB_PAGES: 'true'`：觸發 `next.config.mjs` 中的 GitHub Pages 配置
- `path: ./out`：Next.js 靜態導出的輸出目錄

---

### 步驟 3: 修改 `package.json`

確保你的 `package.json` 包含建置腳本：

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  }
}
```

---

### 步驟 4: 更新程式碼中的路徑引用

如果你的專案使用了絕對路徑（如 `/images/logo.png`），需要更新為相對路徑或使用 `basePath`：

#### 方法 1: 使用環境變數
```javascript
// 在組件中
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
<img src={`${basePath}/images/logo.png`} alt="Logo" />
```

#### 方法 2: 使用 Next.js Image 組件
```javascript
import Image from 'next/image';

<Image src="/images/logo.png" alt="Logo" width={100} height={100} />
// Next.js 會自動處理 basePath
```

---

## 🚀 GitHub 設定

### 步驟 1: 創建 GitHub Repository

1. 登入 GitHub
2. 點擊右上角的 `+` → `New repository`
3. 填寫 repository 名稱（例如：`my-next-app`）
4. 選擇 Public（GitHub Pages 免費版需要公開 repo）
5. 點擊 `Create repository`

---

### 步驟 2: 啟用 GitHub Pages

1. 進入你的 repository
2. 點擊 `Settings` → `Pages`
3. 在 **Source** 下拉選單中選擇：
   - **Source**: `GitHub Actions`（不是 Deploy from a branch）
4. 儲存設定

![GitHub Pages 設定](https://docs.github.com/assets/cb-49684/mw-1440/images/help/pages/publishing-source-drop-down.webp)

---

### 步驟 3: 設定環境變數（如果需要）

如果你的應用需要 API 金鑰等敏感資訊：

1. 進入 repository → `Settings` → `Secrets and variables` → `Actions`
2. 點擊 `New repository secret`
3. 添加你的密鑰（例如：`GOOGLE_CLIENT_ID`）
4. 在 `deploy.yml` 中引用：
   ```yaml
   env:
     NEXT_PUBLIC_GOOGLE_CLIENT_ID: ${{ secrets.GOOGLE_CLIENT_ID }}
   ```

---

## 📤 部署流程

### 首次部署

1. **初始化 Git 並推送到 GitHub**：
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/username/your-repo-name.git
   git push -u origin main
   ```

2. **自動觸發部署**：
   - 推送後，GitHub Actions 會自動執行
   - 前往 repository → `Actions` 查看部署進度
   - 等待綠色勾勾（✅）表示部署成功

3. **訪問你的網站**：
   - 部署成功後，網站會在以下網址可用：
   - `https://username.github.io/your-repo-name/`

---

### 後續更新

每次你推送程式碼到 `main` 分支，GitHub Actions 都會自動重新部署：

```bash
git add .
git commit -m "Update feature"
git push
```

---

## 🔧 常見問題排除

### 問題 1: 404 錯誤 - 頁面找不到

**原因**：路徑配置錯誤

**解決方案**：
1. 確認 `next.config.mjs` 中的 `repoName` 與實際 repository 名稱一致
2. 確認 `basePath` 和 `assetPrefix` 正確設定
3. 檢查 `trailingSlash: true` 是否已設定

---

### 問題 2: CSS/JS 文件載入失敗

**原因**：靜態資源路徑錯誤

**解決方案**：
1. 確認 `assetPrefix` 已正確設定
2. 檢查程式碼中是否有硬編碼的絕對路徑
3. 使用 Next.js 的 `<Image>` 和 `<Link>` 組件

---

### 問題 3: 環境變數未生效

**原因**：環境變數未正確傳遞

**解決方案**：
1. 確認變數名稱以 `NEXT_PUBLIC_` 開頭（客戶端變數）
2. 在 `deploy.yml` 的 `env` 區塊中添加
3. 在 GitHub Secrets 中正確設定

---

### 問題 4: 建置失敗

**原因**：依賴問題或程式碼錯誤

**解決方案**：
1. 在本地執行 `npm run build` 測試
2. 檢查 GitHub Actions 的錯誤日誌
3. 確認 Node.js 版本一致（本地與 CI）

---

### 問題 5: 圖片無法顯示

**原因**：Next.js Image Optimization 在靜態導出中不支援

**解決方案**：
已在 `next.config.mjs` 中設定 `images: { unoptimized: true }`

---

## 📝 完整檢查清單

在部署前，請確認以下項目：

- [ ] `next.config.mjs` 已正確配置
  - [ ] `output: 'export'`
  - [ ] `basePath` 和 `assetPrefix` 正確
  - [ ] `images.unoptimized: true`
  - [ ] `trailingSlash: true`
- [ ] `.github/workflows/deploy.yml` 已創建
- [ ] `package.json` 包含 `build` 腳本
- [ ] GitHub repository 已創建
- [ ] GitHub Pages 設定為 `GitHub Actions`
- [ ] 環境變數已在 GitHub Secrets 中設定（如需要）
- [ ] 本地測試 `npm run build` 成功
- [ ] 程式碼已推送到 `main` 分支

---

## 🎉 完成！

如果一切順利，你的 Next.js 應用現在應該已經成功部署到 GitHub Pages！

**你的網站網址**：`https://username.github.io/your-repo-name/`

---

## 📚 參考資源

- [Next.js Static Exports 官方文檔](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Pages 官方文檔](https://docs.github.com/en/pages)
- [GitHub Actions 官方文檔](https://docs.github.com/en/actions)

---

## 💡 進階技巧

### 使用自訂域名

1. 在 repository 的 `public` 目錄創建 `CNAME` 文件
2. 文件內容為你的域名（例如：`www.example.com`）
3. 在域名提供商設定 DNS 記錄指向 GitHub Pages

### 手動觸發部署

在 repository 頁面：
1. 點擊 `Actions`
2. 選擇 `Deploy to GitHub Pages` 工作流
3. 點擊 `Run workflow`

---

**祝你部署順利！** 🚀
