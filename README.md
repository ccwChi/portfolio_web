# 個人作品集網站

使用 Next.js 建構的個人作品集網站，展示我從材料科學轉職至全端工程師的職涯歷程。

## 技術堆疊

*   **框架**: Next.js 14 (App Router)
*   **語言**: JavaScript / React
*   **樣式**: Tailwind CSS v4, Shadcn UI
*   **動畫**: Framer Motion
*   **國際化**: react-i18next (已實作 繁體中文 / 英文 切換)
*   **主題模式**: next-themes (支援 亮色 / 深色 模式切換)
*   **部署平台**: GitHub Pages

## 功能特色

*   **響應式設計**: 針對手機與桌機版面進行優化，提供流暢的瀏覽體驗。
*   **雙語支援**: 可即時切換 中文 / 英文 語系。
*   **深色模式**: 支援系統自動偵測，並提供手動切換開關。
*   **互動體驗**: 使用 Framer Motion 實現流暢的進場動畫與過場效果。
*   **現代化元件**: 採用 Shadcn UI 確保介面的一致性與可訪問性。

## 本地開發

1.  **安裝套件**:
    ```bash
    npm install
    ```

2.  **啟動開發伺服器**:
    ```bash
    npm run dev
    ```

3.  **建置正式版本**:
    ```bash
    npm run build
    ```

## 部署方式

本專案已配置為透過 **GitHub Pages** 進行部署。

執行以下指令即可進行部署：

```bash
npm run deploy
```

此指令將會自動執行：
1.  建置專案 (`npm run build`)。
2.  將靜態檔案匯出至 `out` 目錄。
3.  將 `out` 目錄內容推送到 `gh-pages` 分支。
