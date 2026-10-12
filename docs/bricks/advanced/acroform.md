---
layout: title
title: PDF-Formular ausfüllen
parent: Erweiterte Bausteine
grand_parent: Bausteine
nav_order: 27
---

{: .hint }
Der Baustein _PDF-Formular ausfüllen_ befindet sich in der Beta-Phase und ist nur auf Anfrage nutzbar. Bei Interesse bitte unter support@univelop.de melden.

Mit dem Baustein _PDF-Formular ausfüllen_ wird ein bestehendes PDF-Formular mit Werten aus dem aktuellen Datensatz befüllt. Als Vorlage dient ein PDF, das bereits Formularfelder (Acroform) enthält — also Textfelder, Checkboxen, Optionsfelder oder Auswahllisten. Jedes Feld der Vorlage wird einmalig einer Formel oder einem Baustein zugeordnet; beim Ausführen entsteht daraus ein ausgefülltes PDF, das am Datensatz gespeichert wird.

Im Gegensatz zum Baustein [PDF erstellen](/docs/bricks/advanced/print-out), der ein Dokument aus einer Word-Vorlage neu aufbaut, bleibt hier das Layout der Original-PDF unverändert erhalten. Das eignet sich vor allem für amtliche Formulare, Antragsformulare und vorgegebene Vordrucke, die exakt so aussehen müssen wie ausgegeben.

## Einstellungen

Allgemeine Einstellungen wie Sichtbarkeit und Berechtigungen werden unter [Allgemeine Baustein-Einstellungen](/docs/bricks/common-settings) beschrieben.

1. **PDF-Vorlage** — Das PDF mit den Formularfeldern. Über den Plus-Button wird genau eine Datei hochgeladen. Nach dem Hochladen wird die Vorlage direkt in den Einstellungen angezeigt und alle erkannten Formularfelder werden markiert.
2. **Abweichender Dateiname** — Ein optionaler Dateiname für die erzeugte Datei. Kann dynamisch gestaltet werden, z. B. `${belegnummer}` für einen Dateinamen basierend auf der Belegnummer. Ohne Angabe wird der Name der Vorlage zusammen mit der Datensatz-ID verwendet.
3. **Feldzuordnung** — Die Wertequelle je Formularfeld. Sie wird nicht über eine Liste, sondern direkt in der Vorschau der Vorlage gepflegt (siehe [Feldzuordnung](#feldzuordnung)).

## Vorbereitung der PDF-Vorlage

Die Vorlage muss ein PDF mit echten Formularfeldern sein. Solche Felder werden z. B. mit Adobe Acrobat, LibreOffice Draw oder einem Formulargenerator angelegt. Ein eingescanntes oder als Bild exportiertes PDF enthält keine Formularfelder und kann nicht befüllt werden.

Entscheidend ist der **Feldname** in der Vorlage: Er identifiziert das Feld bei der Zuordnung und sollte deshalb sprechend vergeben werden (z. B. `kunde_name` statt `Text1`).

Folgende Feldtypen werden unterstützt:

| Feldtyp | Erwarteter Wert |
| --- | --- |
| **Textfeld** | Text oder Zahl. Mehrzeilige Textfelder werden unterstützt. |
| **Checkbox** | Ja/Nein. Neben `true`/`false` werden auch `1`, `ja`, `yes` und `on` als „angehakt" gewertet. |
| **Optionsfeld** (Radio) | Der Name einer der hinterlegten Optionen. Werte außerhalb der Optionen werden ignoriert. |
| **Auswahlliste** (Dropdown) | Der Name einer der hinterlegten Optionen. Ist die Liste als frei editierbar angelegt, sind beliebige Texte möglich. Bei Mehrfachauswahl können mehrere Werte übergeben werden. |
| **Datumsfeld** | Text im Format, das die Vorlage erwartet. |

{: .hint }
Formularfelder auf mehrseitigen Vorlagen werden ebenfalls erkannt. In der Vorschau werden jeweils die Felder der aktuell angezeigten Seite markiert.

## Feldzuordnung

Nach dem Hochladen zeigt der Baustein die Vorlage direkt in den Einstellungen an. Jedes erkannte Formularfeld ist mit einem farbigen Rahmen markiert:

- **Blau** — dem Feld ist noch keine Wertequelle zugeordnet.
- **Grün** — dem Feld ist eine Wertequelle zugeordnet.

Ein Klick auf ein Feld öffnet die Zuordnung. Dort stehen zur Verfügung:

1. **Formel** — Eine Formel, die beim Ausführen gegen den aktuellen Datensatz ausgewertet wird, z. B. `${kunde.name}` oder eine zusammengesetzte Formel. Das ist die Standard-Wertequelle für alle Feldtypen.
2. **Baustein** — Nur bei Checkboxen verfügbar: Statt einer Formel kann direkt ein _Schalter_- oder _Ja-Nein-Formel_-Baustein ausgewählt werden.

Bei Optionsfeldern und Auswahllisten werden die gültigen Optionen der Vorlage unterhalb des Eingabefelds angezeigt.

Felder ohne Zuordnung bleiben beim Ausfüllen leer. Ergibt eine Formel keinen Wert, bleibt das Feld ebenfalls unverändert.

## Bilder einfügen

Neben Text lassen sich auch Bilder in die Vorlage übernehmen, z. B. ein Logo oder eine Unterschrift. Dafür wird in der Vorlage an der gewünschten Stelle ein **Textfeld angelegt, dessen Name mit `image_` beginnt** — beispielsweise `image_unterschrift`.

Der Baustein erkennt solche Felder automatisch als Bildfelder. Als Wertequelle wird eine Formel hinterlegt, die auf einen Bild-Baustein verweist (z. B. `${logo}` oder `${unterschrift}`).

Beim Ausführen wird das Platzhalter-Textfeld entfernt und das Bild an seiner Stelle eingesetzt. Das Bild wird dabei unter Beibehaltung des Seitenverhältnisses so skaliert, dass es vollständig in das Feld passt, und darin zentriert.

{: .tip }
Das Platzhalter-Feld sollte im Seitenverhältnis ungefähr dem erwarteten Bild entsprechen — dann wird der verfügbare Platz optimal genutzt.

## Ausführung

Das Ausfüllen kann auf zwei Wegen ausgelöst werden:

- **Manuell** — Über den Play-Button am Baustein in der Detailansicht des Datensatzes.
- **Automatisch** — Über den Workflow-Schritt [Führe Aktion aus](/docs/workflows/record-editing/run-action), z. B. bei einem Statuswechsel oder nach dem Speichern.

Das erzeugte PDF wird am Datensatz gespeichert und kann von dort geöffnet und heruntergeladen werden. Bei jeder erneuten Ausführung wird die zuvor erzeugte Datei ersetzt.

## Hinweise

- Das Ausfüllen verbraucht Credits.
- Vorlage und Ergebnis dürfen jeweils maximal 25 MB groß sein.
- Wird die Vorlage ausgetauscht, bleiben bestehende Zuordnungen erhalten, sofern die Feldnamen gleich bleiben. Zuordnungen zu Feldern, die es in der neuen Vorlage nicht mehr gibt, werden beim Ausfüllen übergangen.
- Enthält die hochgeladene Datei keine Formularfelder, wird in den Einstellungen ein entsprechender Hinweis angezeigt.

## Verwandte Bausteine

- [PDF erstellen](/docs/bricks/advanced/print-out) — Für die Erzeugung von PDF-Dokumenten aus Word-Vorlagen
- [XML erstellen](/docs/bricks/advanced/xml) — Für die Erzeugung von XML-Dateien
- [Unterschrift](/docs/bricks/advanced/signature) — Für die Erfassung von Unterschriften, die in das Formular übernommen werden können
- [Bild Upload](/docs/bricks/input/image-picker) — Für Bilder, die in das Formular übernommen werden können
