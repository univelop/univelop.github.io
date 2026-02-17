---
layout: title
title: Import und Export
parent: Schnittstellen
redirect_from:
    - /docs/import-export.html
nav_order: 3
---

Univelop bietet verschiedene Im- und Exportmöglichkeiten, um Daten zwischen Arbeitsbereichen oder mit externen Systemen auszutauschen.

## Arbeitsbereiche

Ganze Arbeitsbereiche können als ZIP-Datei exportiert und in neue Arbeitsbereiche importiert werden. Der Export erfolgt über die [Arbeitsbereich-Einstellungen](/docs/workspace-settings/general).

Beim Export kann gewählt werden, ob nur die **Struktur** (Kacheln, Bausteine, Workflows) oder auch die **Daten** (Datensätze) exportiert werden sollen.

Zum Import wird über den Haus-Button ein neuer Arbeitsbereich erstellt und die Option **Arbeitsbereich importieren** gewählt.

## Kacheln

Einzelne Kacheln können als JSON-Datei exportiert und in andere Arbeitsbereiche importiert werden. Der Export erfolgt über den Button **Export** in den Kacheleinstellungen im Designmodus.

{: .warning }
Beim Kachel-Import ist zu beachten: Verknüpfungen werden nur übernommen, wenn die referenzierten Kacheln im Ziel-Arbeitsbereich existieren. Daten und Word-Vorlagen werden nicht übertragen. Der Import ist eine Einbahnstraße — es kann nicht in den Ursprungs-Arbeitsbereich zurück importiert werden.

## Datensätze (Excel)

Datensätze können über Excel-Dateien (.xlsx) importiert und exportiert werden. Der Im- und Export erfolgt über die drei Punkte in der Listenansicht.

### Erstimport

Für den Erstimport empfehlen wir, zunächst einen Dummy-Datensatz anzulegen und die Liste nach Excel zu exportieren. Die exportierte Datei dient als Importvorlage mit korrekten Spaltennamen.

### Aktualisierung

Für die Aktualisierung bestehender Datensätze werden diese zuerst exportiert und die gewünschten Änderungen in Excel vorgenommen. Dabei muss die **ID-Spalte** (letzte Spalte) erhalten bleiben — über diese erkennt Univelop, welcher Datensatz aktualisiert werden soll.

{: .warning }
Die ID eines Datensatzes ist einzigartig. Werden Daten ohne ID importiert, werden automatisch neue Datensätze angelegt. Wir empfehlen, vor jedem Import einen Export durchzuführen.

### Komplexe Bausteine

Bausteine mit mehreren Werten (z. B. Zeitspanne mit Anfangs- und Endzeit) bieten in den Einstellungen eigene technische Namen für jedes Feld an, damit die Werte beim Export in separate Spalten aufgeteilt werden.

## Mitglieder und Rollen (Excel)

Mitglieder und Nutzerrollen können ebenfalls per Excel-Datei im- und exportiert werden.

**Mitglieder-Export:** Spalten für ID, E-Mail, Vor-/Nachname, aktive und mögliche Rollen.
**Mitglieder-Import:** Vor-/Nachname, E-Mail und Passwort sind Pflichtfelder. Optional können Rollen angegeben werden.

**Rollen-Export:** Jede Zeile definiert die Rechte einer Rolle für eine einzelne Kachel (Lesen, Anlegen, Bearbeiten, Löschen, Import). Die Standard-Rollen Admin und Besitzer sind ausgenommen.

## Dateisynchronisation (PowerShell)

Über die Bausteine [Datei Upload](/docs/bricks/input/file-picker) und [PDF erstellen](/docs/bricks/advanced/print-out) kann eine automatische Synchronisation mit dem lokalen Dateisystem eingerichtet werden.

### Einrichtung

1. In den Bausteineinstellungen **Per PowerShell mit Dateisystem synchronisieren** aktivieren
2. Den **Zielordner** angeben
3. Optional: **Dateitypen** einschränken und **Löschen vor Synchronisation** aktivieren
4. Das generierte **PowerShell-Skript** herunterladen

Das Skript kann manuell oder über die Windows Aufgabenplanung ausgeführt werden.

{: .hint }
Für PowerShell wird Version 6 oder höher empfohlen. Die Richtlinieneinstellungen des ausführenden Benutzers bzw. Servers sind zu beachten.
