---
layout: title
title: Allgemein
parent: Arbeitsbereich Einstellungen
nav_order: 0
---

Unter **Allgemein** werden die grundlegenden Angaben des Arbeitsbereichs verwaltet.

## Einstellungen

1. **Name** — der Anzeigename des Arbeitsbereichs. Bei aktivierter Mehrsprachigkeit kann der Name pro Sprache übersetzt werden.
2. **Arbeitsbereich-ID** — die eindeutige Kennung des Arbeitsbereichs. Diese darf nicht verändert werden.
3. **Arbeitsbereichstyp** — der Typ des Arbeitsbereichs (Produktion, Test, Entwurf, Solution)
4. **Zeitzone** — die Zeitzone, die für die Anzeige und Berechnung von Datumswerten verwendet wird (Standard: Europe/Berlin)

## Arbeitsbereichstypen

| Typ           | Beschreibung                                                     |
| ------------- | ---------------------------------------------------------------- |
| **Produktiv** | Standard-Arbeitsbereich für den produktiven Einsatz              |
| **Test**      | Testkopie eines Produktiv-Arbeitsbereichs                        |
| **Demo**      | Demo-Arbeitsbereich, der nach 90 Tagen automatisch gelöscht wird |
| **Solution**  | Arbeitsbereich zum Erstellen von Solutions                       |

## Dokumentation exportieren

Über das Drei-Punkte-Menü kann eine vollständige Dokumentation des Arbeitsbereichs als eigenständige HTML-Datei exportiert werden. Die Datei lässt sich in jedem Browser öffnen und eignet sich zur Archivierung, zum Wissenstransfer oder als Nachschlagewerk.

### Inhalt der Dokumentation

Die generierte Datei enthält:

- **Arbeitsbereich-Name** und Erstellungsdatum der Dokumentation
- **Alle Listen** des Arbeitsbereichs (ohne Seiten- und Einstellungs-Kacheln)
- **Bausteine pro Liste** — Name, Typ und technischer Name jedes Bausteins
- **Verknüpfungsdiagramme** — interaktive Diagramme, die zeigen, welche Listen über _Datensatz_- und _Datensätze_-Bausteine miteinander verknüpft sind (ein- und ausgehende Verknüpfungen)
- **Suchfunktion** — eine Suchleiste zum schnellen Finden von Listen und Bausteinen
- **Inhaltsverzeichnis** — Sprungmarken zu jeder Liste

### Verwendung

1. **Arbeitsbereich-Einstellungen** öffnen und **Allgemein** auswählen
2. Über das **Drei-Punkte-Menü** den Punkt **Dokumentation exportieren** klicken
3. Die HTML-Datei wird generiert und zum Download bereitgestellt

Die Datei wird nach dem Muster `{Arbeitsbereich}_Documentation_{Datum}.html` benannt.

### Hinweise

- Die Dokumentation enthält ausschließlich die Struktur (Listen, Bausteine, Verknüpfungen) — keine Datensatzinhalte
- Die HTML-Datei ist vollständig eigenständig und benötigt keine Internetverbindung zum Anzeigen
- Die Verknüpfungsdiagramme werden automatisch als Flussdiagramme dargestellt und passen ihr Layout an die Anzahl der verknüpften Listen an

## Export und Löschen

- **Export** — exportiert den gesamten Arbeitsbereich als ZIP-Datei (mit oder ohne Daten)
- **Löschen** — entfernt den Arbeitsbereich unwiderruflich
