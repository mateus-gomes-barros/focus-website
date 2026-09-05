# Focus Website

Landing page for the Focus productivity app, built as a standalone React project and ready for Vercel.

## Technologies

- React 19
- TypeScript
- Vite
- Framer Motion
- Lucide React
- CSS with responsive design and custom design tokens

## Open in VS Code

1. Extract the downloaded ZIP.
2. Open the `focus-website` folder in VS Code.
3. Open the integrated terminal.
4. Run:

```bash
npm install
npm run dev
```

Vite will show the local address, usually `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

The production files are generated in `dist`.

## Deploy to Vercel

### Through GitHub

1. Create a new GitHub repository.
2. Push this project to it.
3. In Vercel, select **Add New → Project**.
4. Import the repository.
5. Vercel should detect **Vite** automatically.
6. Confirm:
   - Build command: `npm run build`
   - Output directory: `dist`
7. Click **Deploy**.

### Through the Vercel CLI

```bash
npm install -g vercel
vercel
```

## Where to edit

- `src/App.tsx`: page sections and text.
- `src/index.css`: colors, spacing, responsive layout, and animation.
- `src/data/features.ts`: feature card content.
- `src/data/siteContent.ts`: links, image paths, badges, and widget names.
- `src/components/FocusMark.tsx`: Focus symbol.
- `src/components/TimerPreview.tsx`: timer interface shown in the hero.
- `src/components/AnalyticsPreview.tsx`: analytics card.
- `public/`: favicon and future screenshots.
- `public/images/`: product screenshots used by the image slots.

## Add screenshots using only the terminal

The page already contains seven visual slots. Missing files appear as labeled
placeholders, so the layout remains complete while you prepare the images.

Copy an image into a slot:

```bash
cp "/full/path/to/screenshot.webp" public/images/timer-dashboard.webp
```

Available filenames:

```text
timer-dashboard.webp
android-notification.webp
projects-and-tasks.webp
analytics-dashboard.webp
monthly-history.webp
badges-and-heatmap.webp
android-widgets.webp
```

To replace text quickly from the terminal on macOS:

```bash
sed -i '' 's/Old text/New text/g' src/App.tsx
```

To update the GitHub URL:

```bash
sed -i '' 's|https://github.com/mateus-gomes-barros/pomodoro|NEW_URL|g' src/data/siteContent.ts
```

After any change:

```bash
npm run build
```

## Important

The current feature selection is only the first version of the marketing page. Tasks, projects, goals, history, mobile widgets, Android ongoing notifications, offline-first behavior, and other Focus features can be added progressively.
