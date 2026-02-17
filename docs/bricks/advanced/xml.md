---
layout: title
title: XML erstellen
parent: Erweiterte Bausteine
grand_parent: Bausteine
nav_order: 26
redirect_from:
    - /docs/record-spec-settings/grand-child-expanded/xml.html
---

{: .hint }
Dieser Baustein ist ein [Power Feature](/docs/power-features)

Mit dem Baustein _XML erstellen_ kann ausgehend von einer XML-Vorlage eine XML-Datei generiert und optional per E-Mail versendet werden. Die Vorlage kann individuell gestaltet werden und über Platzhalter auf Bausteine der aktuellen Liste zugreifen. Im Gegensatz zum _PDF erstellen_-Baustein verwendet die XML-Vorlage spezielle XML-Tags mit dem `uni:`-Namespace für Schleifen und bedingte Anzeigen.

## Einstellungen

Allgemeine Einstellungen wie Sichtbarkeit und Berechtigungen werden unter [Allgemeine Baustein-Einstellungen](/docs/bricks/common-settings) beschrieben.

1. **XML-Vorlage** — Die XML-Datei, die als Vorlage dient. Wird über den Plus-Button hochgeladen und automatisch validiert.
2. **Dateiname** — Ein optionaler abweichender Dateiname, kann dynamisch gestaltet werden (z. B. `${belegnummer}`).
3. **PowerShell-Synchronisation** — Ermöglicht die automatische Dateiübertragung in einen Zielordner per PowerShell-Skript.
4. **Direkter Mailversand** — Aktiviert den Versand der erzeugten XML-Datei per E-Mail.

### Mail-Einstellungen

Nur verfügbar wenn _Direkter Mailversand_ aktiviert ist:

5. **Empfänger** — Ein _Textfeld_- oder _E-Mail_-Baustein mit der Empfänger-Adresse.
6. **CC-Empfänger** — Zusätzliche CC-Adressen.
7. **Benutzer in CC hinzufügen** — Fügt den auslösenden Benutzer automatisch in CC hinzu.
8. **BCC** — Zusätzliche BCC-Adressen.
9. **Betreff** — Der E-Mail-Betreff, dynamisch mit `${}` gestaltbar.
10. **Inhalt** — Der E-Mail-Text, dynamisch mit `${}` gestaltbar.

## Vorbereitung der XML-Vorlage

### Einzelwerte

Die Ausgabe von Einzelwerten erfolgt über den technischen Namen in geschweiften Klammern: `${belegnummer}`.

### Datensatz-Listen (uni:repeat)

Für die Ausgabe verknüpfter Listen wird das `<uni:repeat>`-Tag verwendet:

```xml
<?xml version="1.0" encoding="utf-8"?>
<liste xmlns:uni="http://univelop.com/xml">
    <uni:repeat ref="mitarbeiterZeiten" name="eintrag">
        <eintrag>
            <arbeitszeit>${eintrag.Arbeitszeit}</arbeitszeit>
            <name>${eintrag.name}</name>
            <index>${eintrag.__index__}</index>
        </eintrag>
    </uni:repeat>
</liste>
```

**Attribute von `<uni:repeat>`:**
- `ref` — Der technische Name des Bausteins (Pflichtfeld).
- `name` — Der Alias, unter dem die Datensätze in der Vorlage verfügbar sind (optional, Standard: `ref`-Wert).
- Die Variable `__index__` liefert die aktuelle Iterationsnummer (ab 1).

**Unterstützte Bausteine:** _Datensatz Liste_, _Datensätze_, _Tabelle_, _Kalender_.

Verschachtelte `<uni:repeat>`-Tags sind möglich, sofern die innere Liste von der äußeren erreichbar ist.

### Bedingte Inhalte (uni:showIf)

XML-Elemente können abhängig von einer Bedingung ein- oder ausgeblendet werden:

```xml
<uni:showIf exp="istReisezeit">
    <reisezeit>true</reisezeit>
</uni:showIf>
```

Das `exp`-Attribut muss in einem Wahrheitswert resultieren. Das Tag kann auch außerhalb von `<uni:repeat>`-Blöcken verwendet werden.

### Sonderzeichen

Sonderzeichen in Parametern werden automatisch für XML escapiert, um eine gültige Struktur zu gewährleisten.

## Anwendungsfälle

- **E-Rechnungen** — Erzeugung von XML-basierten Rechnungsformaten.
- **Datenexport** — Strukturierter Export für Fremdsysteme.
- **Systemintegration** — Standardisierte Datenübertragung zwischen Systemen.
- **Archivierung** — Langzeitarchivierung in standardisiertem Format.

## Hinweise

- Die XML-Vorlage wird beim Hochladen automatisch auf Gültigkeit geprüft.
- Die `uni:`-Namespace-Syntax unterscheidet sich von der `${repeat(...)}`-Syntax des _PDF erstellen_-Bausteins.

## Verwandte Bausteine

- [PDF erstellen](/docs/bricks/advanced/print-out) — Für die Erzeugung von PDF-Dokumenten aus Word-Vorlagen
- [Datensatz Liste](/docs/bricks/advanced/record-list) — Für die Listen, die in der XML ausgegeben werden
