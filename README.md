# 韓端勇老師個人網站

中英雙語、快樂溫暖風格的靜態網站，部署於 Cloudflare Pages。

## 怎麼更新內容
1. 所有文字都在 `content/site.mjs`，照著現有格式新增或修改即可（例如在 `news` 最上面加一則消息）。
2. 修改後把 `updated` 改成當月，例如 `'2026-12'`。
3. 個人照片請存成 `src/assets/photo.jpg`（建議正方形、至少 640×640）。
4. `git add -A && git commit -m "更新內容" && git push`，Cloudflare 約 1 分鐘後自動上線。

## 本機預覽
```
npm run preview
```

## Cloudflare Pages 設定
- Framework preset：None
- Build command：`node build.mjs`
- Build output directory：`dist`
