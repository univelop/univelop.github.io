---
layout: title
title: Allgemein
parent: Arbeitsbereich Einstellungen
nav_order: 0
---

Unter **Allgemein** werden die grundlegenden Angaben des Arbeitsbereichs verwaltet.

## Einstellungen

1. **Name des Arbeitsbereichs** — der Anzeigename. Bei aktivierter [Mehrsprachigkeit](/docs/workspace-settings/multi-language) kann der Name pro Sprache übersetzt werden.
2. **ID des Arbeitsbereichs** — die eindeutige Kennung des Arbeitsbereichs. Sie kann nicht verändert werden.
3. **Art des Arbeitsbereichs** — siehe [Arbeitsbereichstypen](#arbeitsbereichstypen)
4. **Zeitzone für die Anzeige von Daten** — die Zeitzone, in der Datumswerte angezeigt und berechnet werden (z. B. Europe/Berlin)
5. **Standardsprache** — die Sprache, die verwendet wird, wenn die Sprache eines Benutzers nicht unterstützt wird. Sie kann nur über den Support geändert werden.
6. **Unterstützte Sprachen** — die Sprachen, in denen der Arbeitsbereich verfügbar ist. Die Standardsprache muss enthalten sein.

## Arbeitsbereichstypen

| Typ | Beschreibung |
|---|---|
| **Demo-Arbeitsbereich** | Jeder neue Arbeitsbereich startet als Demo — auch ein importierter. Er wird nach 90 Tagen automatisch gelöscht, sofern kein Zahlungskonto verknüpft wird. |
| **Produktiv-Arbeitsbereich** | Standard-Arbeitsbereich für den produktiven Einsatz. Ein Demo-Arbeitsbereich wird zum Produktiv-Arbeitsbereich, sobald ein [Zahlungskonto](/docs/workspace-settings/billing) verknüpft wird. |
| **Test-Arbeitsbereich** | Arbeitsbereich zum Testen, z. B. als Kopie eines Produktiv-Arbeitsbereichs |
| **Solution-Arbeitsbereich** | Arbeitsbereich zum Erstellen von [Solutions](/docs/solutions). Kann nur nach Freischaltung durch Univelop angelegt werden. |

Die Art kann nur zwischen **Test** und **Produktiv** gewechselt werden. Bei Demo- und Solution-Arbeitsbereichen ist das Feld nicht änderbar.

## Aktionen

Über das **Drei-Punkte-Menü** stehen folgende Aktionen zur Verfügung:

1. **Datensatzlisten neu berechnen**
2. **Komponenten neu berechnen**
3. **Arbeitsbereich löschen**
4. **Arbeitsbereich exportieren**
5. **Dokumentation erstellen**

### Datensatzlisten neu berechnen

Berechnet für den gesamten Arbeitsbereich die Werte neu, die über Listen hinweg zusammengefasst oder übertragen werden:

- die Anzahl der Einträge und Summen an Bausteinen vom Typ [Datensätze](/docs/bricks/advanced/record-list)
- Übertragungen, die an [Datensatz](/docs/bricks/advanced/record-picker)-Bausteinen mit „synchron halten“ eingestellt sind

Die Neuberechnung läuft als Hintergrund-Job und kann einige Minuten dauern; der Fortschritt ist in der **Job-Übersicht** sichtbar. Sie wird zusätzlich jede Nacht automatisch ausgeführt — manuell lohnt sie sich, wenn Summen, Zähler oder Übertragungen sofort korrigiert werden sollen.

### Komponenten neu berechnen

Berechnet die Zähler und Summen neu, die auf dem Homescreen an Komponenten angezeigt werden (Indikator „Anzahl der Datensätze“ oder „Summe“). Das ist hilfreich, wenn eine angezeigte Zahl nicht zu den Daten in der Liste passt.

### Dokumentation erstellen

Erzeugt eine HTML-Datei, die den **Aufbau** des Arbeitsbereichs beschreibt und sich ohne Univelop in jedem Browser lesen lässt. Sie eignet sich zur Archivierung, zum Wissenstransfer oder als Nachschlagewerk.

Die Dokumentation enthält:

- alle **Listen** des Arbeitsbereichs mit ihren **Bausteinen**
- die **Beziehungen** zwischen den Listen als Diagramm
- eine **Suche** und ein **Inhaltsverzeichnis** zum schnellen Navigieren

{: .hint }
Die Dokumentation enthält weder Datensätze noch Workflows oder Rollen. Sie dient nur zum Nachlesen und kann nicht wieder in Univelop importiert werden.

### Arbeitsbereich exportieren

Exportiert den Arbeitsbereich als ZIP-Datei. Beim Export wird gewählt, was enthalten sein soll:

1. **Komponenten und Workflows exportieren**
2. **Komponenten, Workflows und Daten exportieren** — ohne generierte PDFs
3. **Komponenten, Workflows und Daten inkl. generierter PDFs exportieren**

Im Unterschied zur Dokumentation ist der Export eine **technische Kopie** des Arbeitsbereichs. Über **Arbeitsbereich importieren** im Dialog **Arbeitsbereich anlegen** (Arbeitsbereichsübersicht) wird daraus ein neuer Arbeitsbereich „‹Name› (Kopie)“ erstellt — immer als Demo-Arbeitsbereich.

{: .hint }
In Demo-Arbeitsbereichen steht der Export nicht zur Verfügung.

### Arbeitsbereich löschen

Entfernt den kompletten Arbeitsbereich. Die Aktion ist nur für Besitzer verfügbar und muss durch Eingabe des Arbeitsbereich-Namens bestätigt werden.

{: .warning }
Das Löschen eines Arbeitsbereichs kann nicht rückgängig gemacht werden.
