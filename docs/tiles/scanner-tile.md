---
layout: title
title: Scanner
nav_order: 9
parent: Kacheln
---

Die _Scanner_-Kachel dient dem Scannen von QR-Codes und Barcodes, um Einträge schnell zu finden oder Workflows auszulösen. Sie wird mit einer Liste verknüpft, in der nach dem gescannten Wert gesucht wird.

## Funktionsweise

Beim Öffnen der Kachel wird die Kamera oder ein externes Scannergerät aktiviert. Der gescannte Wert wird in der verknüpften Liste im konfigurierten Baustein gesucht:

- **Ein Treffer** — Der gefundene Eintrag wird direkt geöffnet.
- **Mehrere Treffer** — Eine Liste der passenden Einträge wird angezeigt.
- **Kein Treffer** — Eine Meldung erscheint.

Alternativ kann der Scanner so konfiguriert werden, dass beim Scannen ein Workflow gestartet wird.

## Einstellungen

Zusätzlich zu den [allgemeinen Kacheleinstellungen](/docs/tiles/general-settings):

1. **Aktion** — Was beim Scannen passieren soll: _Eintrag anzeigen_ oder _Workflow starten_.
2. **Verknüpft mit** — Die Liste, in der nach dem gescannten Wert gesucht wird (bei Aktion „Eintrag anzeigen").
3. **Baustein** — Der Baustein, in dem nach dem gescannten Wert gesucht wird. Sollte derselbe sein, der im [QR-/Barcode-Baustein](/docs/bricks/advanced/qr-barcode) konfiguriert ist.
4. **Manueller Suchpräfix** — Ein Präfix, das dem gescannten Wert vorangestellt wird.
5. **Externer Scanner** — Ob ein externes Scannergerät statt der Gerätekamera verwendet wird.
6. **Kameraausrichtung** — Ob die Rück- oder Frontkamera verwendet wird.
7. **Scan bestätigen** — Ob der Benutzer jeden Scan bestätigen muss.
8. **Töne abspielen** — Ob bei erfolgreichem Scan ein Ton abgespielt wird.
9. **Workflow** — Der Workflow, der beim Scannen gestartet wird (bei Aktion „Workflow starten").

## Verwandte Bausteine

- [QR-/Barcode](/docs/bricks/advanced/qr-barcode) — Baustein zum Erzeugen von scanbaren Codes
- [Artikel Scanner](/docs/bricks/advanced/item-scanner) — Baustein zum Scannen innerhalb eines Eintrags
