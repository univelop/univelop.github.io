---
layout: title
title: Unterschrift
parent: Erweiterte Bausteine
grand_parent: Bausteine
nav_order: 22
redirect_from:
    - /docs/record-spec-settings/grand-child-expanded/signature.html
---

Mit dem Baustein _Unterschrift_ kann je Datensatz eine Unterschrift erfasst werden. Zu jeder Unterschrift wird optional eine Klausel angezeigt (z. B. Hinweis auf AGBs) sowie der Name des Unterzeichners und das Unterschriftsdatum gespeichert.

## Einstellungen

Allgemeine Einstellungen wie Sichtbarkeit und Berechtigungen werden unter [Allgemeine Baustein-Einstellungen](/docs/bricks/common-settings) beschrieben.

1. **Klausel** — Ein optionaler Text, der dem Unterzeichner vor der Unterschrift angezeigt wird (z. B. AGB-Hinweis oder Datenschutzerklärung).

## Funktionsweise

Im Bearbeitungsmodus wird ein Klick auf das Feld „Hier unterschreiben" erwartet. Es öffnet sich ein Fenster mit der festgelegten Klausel. Die Unterschrift erfolgt auf mobilen Geräten per Fingereingabe oder im Web per Mauszeiger. Zusätzlich kann der Name des Unterzeichners eingetragen werden.

Nach dem Speichern werden angezeigt:
- Die Unterschrift als Bild
- Der Klarname des Unterzeichners
- Das Datum der Unterschrift

Das Löschen erfolgt über denselben Weg: Klick auf das Unterschriftsfeld und anschließend über den Button „Löschen".

## Hinweise

- Die Erfassung ist sowohl online als auch offline möglich.
- Für den PDF-Ausdruck kann neben der Unterschrift auch der Name und das Datum ausgegeben werden. Dazu wird hinter den technischen Namen `_text` angehängt — z. B. wird ein Baustein mit dem technischen Namen `signatur` über `signatur_text` in der Word-Vorlage referenziert.
- Der Baustein speichert intern: Unterschriftsbild, Name, unterzeichnende Person, Zeitpunkt.

## Verwandte Bausteine

- [Zeichnung](/docs/bricks/advanced/drawing) — Für allgemeine Zeichnungen
- [Genehmigung](/docs/bricks/advanced/approval) — Für Genehmigungsprozesse mit optionaler Unterschrift
- [PDF erstellen](/docs/bricks/advanced/print-out) — Für die Ausgabe von Unterschriften in PDF-Dokumenten
