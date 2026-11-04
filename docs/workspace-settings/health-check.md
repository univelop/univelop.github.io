---
layout: title
title: Arbeitsbereich-Zustand
parent: Arbeitsbereich Einstellungen
nav_order: 6
---

Der **Arbeitsbereich-Zustand** analysiert den Arbeitsbereich automatisch auf häufige Konfigurationsfehler und gibt Hinweise zur Verbesserung. Über **Zustand erneut prüfen** wird die Prüfung neu gestartet.

## Funktionsweise

Die Ergebnisse werden nach Schweregrad gruppiert:

| Gruppe | Bedeutung |
|---|---|
| **Fehler** | Kritische Probleme, die behoben werden sollten |
| **Warnungen** | Potenzielle Probleme, die zu unerwartetem Verhalten führen können |
| **Info** | Hinweise und Verbesserungsvorschläge |
| **Bestandene Tests** | Prüfungen ohne Befund |

Oberhalb der Gruppen wird der Gesamtzustand zusammengefasst — von „Der Zustand dieses Arbeitsbereiches ist gut.“ bis „In diesem Arbeitsbereich wurden Fehler gefunden.“ Jedes Ergebnis kann einen Link auf die betroffene Liste, den Workflow oder die Komponente enthalten, um das Problem schnell zu finden.

## Geprüfte Bereiche

| Prüfung | Gruppe bei Befund |
|---|---|
| Ungültige Formeln in Bausteinen | Fehler |
| Ungültige Listenverbindungen in Bausteinen | Fehler |
| Leere oder ungültige Baustein-Referenzen in Workflows | Fehler |
| Bausteine ohne Bezeichnung | Warnung |
| Fehlerhaft konfigurierte Übertragungen | Warnung |
| Doppelte Übertragungen | Warnung |
| Zyklische Übertragungen | Warnung |
| Datensatzlisten-Bausteine mit synchroner Übertragung und Summen-Badge | Warnung |
| Mehr als 100 verknüpfte Datensätze | Warnung |
| Fehlende Übersetzungen | Warnung |
| Nicht mehr unterstützte Datums-Filter | Warnung |
| Startstatus, der einen Datensatz mit Pflichtfeldern sperrt | Warnung |
| Doppelte Sekundärschlüssel | Info |

In Solution-Arbeitsbereichen kommen weitere Prüfungen hinzu, z. B. für Ordner, geteilte Listen, Workflows und technische Namen.
