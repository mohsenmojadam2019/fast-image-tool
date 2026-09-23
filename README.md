# Fast Image Tool

ابزار حرفه‌ای و آفلاین برای فشرده‌سازی، تبدیل، crop و resize تصویر؛ بدون ارسال فایل به سرور.

## امکانات

- Chrome Extension با Manifest V3 و منوی راست‌کلیک روی تصاویر
- پردازش گروهی و دانلود چندخروجی
- WebP، AVIF، JPEG و PNG
- کیفیت و هدف حجم برحسب KB
- نسبت‌های آماده 1:1، 4:3، 16:9، 4:5 و 9:16
- اجرای دسکتاپ برای Windows و Ubuntu با Electron

## تست و اجرا

```bash
npm install
npm run check
npm start
```

ساخت خروجی‌ها:

```bash
npm run dist:win     # EXE و نسخه portable
npm run dist:linux   # AppImage و deb برای Ubuntu
```

برای Chrome: `chrome://extensions`، فعال‌کردن Developer mode و Load unpacked روی پوشهٔ پروژه.
