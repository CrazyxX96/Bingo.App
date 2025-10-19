# Bingoscheine Prüfen (PWA)

Eine offlinefähige Web-App (PWA) zum Erkennen von Bingo-Zahlen per Foto/OCR und Verwalten von Scheinen.

## Deploy (GitHub Pages)

1. Erstelle ein neues Repository und lade alle Dateien aus diesem Ordner hoch.
2. Aktiviere **Settings → Pages → Deploy from branch**, Branch: `main` (oder `master`), Folder: `/ (root)`.
3. Warte auf den Build. Die App ist dann unter der Pages-URL erreichbar.

## iOS als App installieren

- Öffne die GitHub Pages URL in **Safari** auf dem iPhone/iPad.
- Tippe auf **Teilen** → **Zum Home-Bildschirm**.
- Starte die App über das Icon. Die App läuft im Vollbild (**standalone**) und funktioniert offline.

## Entwicklung

- Icons liegen in `icons/` und sind für PWA/iOS vorbereitet (inkl. maskable).
- `manifest.webmanifest` definiert App-Metadaten.
- `sw.js` ist ein einfacher Service Worker (Cache-first mit Fallback).

