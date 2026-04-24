---
layout: workflow-step
title: Scanner
parent: Benutzerinteraktion
grand_parent: Workflows
icon: barcode_scanner
nav_order: 3
redirect_from:
    - /docs/workflows/advanced/scanner.html
---

Mit dem Schritt _Öffne Scanner_ wird ein Scan-Dialog geöffnet, in dem der Benutzer einen Barcode oder QR-Code scannen kann. Der gescannte Wert ist in folgenden Schritten über den technischen Namen als Text verfügbar.

## Einstellungen

1. **Präfix für manuelle Suche** — Ein Text, der dem gescannten Wert vorangestellt wird. Kann als Formel angegeben werden.
2. **Scan-Bestätigung erforderlich** - Bevor ein QR Code verarbeiet wird muss bestätig werden. dass dieser QR ausgewertet werden soll.
3. **Standardkamera** - Kamera, die der Dialog verwendet. Standard: Rückkamera.
4. **Scanner-Ton** - Spielt einen Ton ab, wenn erfolgreich ein QR-Code gescannt wurde.

## Hinweise

- Nur in **Geräteseitige-Automatisierungen** verfügbar — nicht auf dem Server ausführbar.
- Dieser Schritt verbraucht einen [Credit](/docs/credits).

## Verwandte Bausteine

- [QR-Code / Barcode](/docs/bricks/advanced/qr-barcode) — Für die Anzeige von Barcodes in Datensätzen
- [Artikel Scanner](/docs/bricks/advanced/item-scanner) — Für die Artikelerfassung per Scanlaser
