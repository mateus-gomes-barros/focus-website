# Focus website images

Place exported Focus screenshots in this folder using these exact names:

- `timer-dashboard.webp`
- `android-notification.webp`
- `projects-and-tasks.webp`
- `analytics-dashboard.webp`
- `monthly-history.webp`
- `badges-and-heatmap.webp`
- `android-widgets.webp`

From the project root, replace an image through the terminal:

```bash
cp "/full/path/to/your-image.webp" public/images/timer-dashboard.webp
```

Convert a PNG to WebP on macOS with Homebrew:

```bash
brew install webp
cwebp -q 88 "/full/path/screenshot.png" -o public/images/timer-dashboard.webp
```

After adding images:

```bash
npm run dev
```

Missing images automatically appear as labeled placeholders on the website.
