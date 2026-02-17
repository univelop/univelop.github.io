---
layout: title
title: Bild-Erkennung
parent: Erweiterte Bausteine
grand_parent: Bausteine
nav_order: 32
redirect_from:
    - /docs/record-spec-settings/grand-child-expanded/chatgpt-image-scanner.html
---

Mit dem Baustein _Bild-Erkennung_ kann der Inhalt eines Bildes — z. B. die Kontaktdaten auf einer Visitenkarte oder eine Adresse aus einem Schreiben — automatisch in einen Datensatz übernommen werden.

## Einstellungen

Allgemeine Einstellungen wie Sichtbarkeit und Berechtigungen werden unter [Allgemeine Baustein-Einstellungen](/docs/bricks/common-settings) beschrieben.

Der Baustein hat keine zusätzlichen bausteinspezifischen Einstellungen. Die Konfiguration erfolgt — wie beim _ChatGPT_-Baustein — über die Tooltips der einzelnen Bausteine im Datensatz.

## Funktionsweise

Die Funktionsweise entspricht dem Baustein _ChatGPT_, mit dem Unterschied, dass statt einer Text- oder Spracheingabe ein Bild hochgeladen wird. Das Bild wird von einem KI-Modell mit Bildverständnis analysiert und die erkannten Informationen werden in die entsprechenden Felder des Datensatzes übertragen.

## Einrichtung

Alle Bausteine, die aus dem Bild ausgefüllt werden sollen, müssen mit einem Tooltip versehen werden (siehe [ChatGPT — Einrichtung](/docs/bricks/advanced/gpt#einrichtung)).

## Hinweise

- Der Baustein nutzt ein KI-Modell mit Bildverständnis und verbraucht daher mehr Tokens als der reine Text-Baustein _ChatGPT_.
- Die Qualität der Erkennung hängt von der Bildqualität und der Klarheit der Tooltips ab.

## Verwandte Bausteine

- [ChatGPT](/docs/bricks/advanced/gpt) — Für die Befüllung eines Datensatzes aus Text oder Sprache
- [Bildauswahl](/docs/bricks/input/image-picker) — Für die manuelle Bildaufnahme
