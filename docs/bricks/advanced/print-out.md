---
layout: title
title: PDF erstellen
parent: Erweiterte Bausteine
grand_parent: Bausteine
nav_order: 25
redirect_from:
    - /docs/record-spec-settings/grand-child-expanded/create-pdf.html
---

Mit dem Baustein _PDF erstellen_ kann ausgehend von einer Word-Vorlage eine PDF-Datei generiert und optional per E-Mail versendet werden. Die Word-Vorlage kann individuell gestaltet werden und über Platzhalter auf Bausteine der aktuellen Liste zugreifen. Neben Text und Zahlen können auch Bilder, Unterschriften und verknüpfte Datensatz-Listen ausgegeben werden.

## Einstellungen

Allgemeine Einstellungen wie Sichtbarkeit und Berechtigungen werden unter [Allgemeine Baustein-Einstellungen](/docs/bricks/common-settings) beschrieben.

1. **Dateivorlage** — Die Word-Vorlage (.docx), die als Basis für die PDF-Erstellung dient. Über den Plus-Button wird die Vorlage hochgeladen.
2. **Dateiname** — Ein optionaler abweichender Dateiname. Kann dynamisch gestaltet werden, z. B. `${belegnummer}` für einen Dateinamen basierend auf der Belegnummer.
3. **In PDF konvertieren** — Konvertiert die erzeugte Datei automatisch in das PDF-Format.
4. **PDF/A-Format** — Erzeugt die PDF im archivierungsfähigen PDF/A-Format.
5. **PowerShell-Synchronisation** — Ermöglicht die automatische Dateiübertragung in einen Zielordner per PowerShell-Skript.
6. **Direkter Mailversand** — Aktiviert den Versand der erzeugten PDF per E-Mail.

### Mail-Einstellungen

Nur verfügbar wenn _Direkter Mailversand_ aktiviert ist:

7. **Empfänger** — Ein _Textfeld_- oder _E-Mail_-Baustein, der die Empfänger-Adresse enthält.
8. **CC-Empfänger** — Zusätzliche CC-Adressen.
9. **Benutzer in CC hinzufügen** — Fügt den auslösenden Benutzer automatisch in CC hinzu.
10. **BCC** — Zusätzliche BCC-Adressen.
11. **Betreff** — Der E-Mail-Betreff, kann dynamisch mit `${}` gestaltet werden.
12. **Inhalt** — Der E-Mail-Text, kann dynamisch mit `${}` gestaltet werden.

## Vorbereitung der Word-Vorlage

### Einzelwerte

Die Ausgabe von Einzelwerten erfolgt über den technischen Namen in geschweiften Klammern mit Dollar-Zeichen: `${belegnummer}`.

### Schalter

Die Darstellung eines _Schalter_-Bausteins im PDF wird über dessen Einstellung „Darstellung als Ausdruck" gesteuert (z. B. Checkbox, Ja/Nein, eigener Text).

### Datensatz-Listen (repeat)

Um Einträge einer _Datensatz Liste_ auszugeben, wird eine Tabelle mit der `repeat`-Syntax verwendet:

| Spalte A | Spalte B |
| --- | --- |
| `${repeat(mitarbeiterZeiten)}` | |
| `${mitarbeiterZeiten.Arbeitszeit}` | `${mitarbeiterZeiten.name}` |
| `${endrepeat}` | |

Verschachtelte `repeat`-Blöcke sind möglich, solange die innere Liste von der äußeren erreichbar ist. Beim verschachtelten `endrepeat` muss der Listenname angegeben werden: `${endrepeat(maschZeiten.einsaetze)}`.

### Bedingte Inhalte (showIf / hideIf)

Inhalte können abhängig von einem _Schalter_- oder _Ja-Nein-Formel_-Baustein ein- oder ausgeblendet werden:

`${showIf(istReisezeit)}Reisezeit${endShowIf(istReisezeit)}`

{: .hint }
`showIf` und `hideIf` können nur auf Schalter- oder Ja-Nein-Formel-Bausteine angewendet werden. Die direkte Eingabe von Formeln ist nicht möglich.

### Unterschriften

Eine Unterschrift wird über den technischen Namen referenziert. Für die zusätzliche Ausgabe von Name und Datum wird `_text` angehängt, z. B. `${signatur_text}`.

## Hinweise

- Die E-Mail-Adresse für den Empfänger kann fest (verstecktes Textfeld mit Standardwert) oder dynamisch (aus Stammdaten übernommen) konfiguriert werden.
- Generierte PDFs können zusätzlich per PowerShell-Skript automatisch in einen Zielordner synchronisiert werden.

## Verwandte Bausteine

- [XML erstellen](/docs/bricks/advanced/xml) — Für die Erzeugung von XML-Dateien
- [Unterschrift](/docs/bricks/advanced/signature) — Für die Erfassung von Unterschriften im PDF
- [Datensatz Liste](/docs/bricks/advanced/record-list) — Für die Listen, die im PDF ausgegeben werden
