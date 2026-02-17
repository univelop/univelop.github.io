---
layout: title
title: Statusprüfung
parent: Arbeitsbereich Einstellungen
nav_order: 12
---

Die **Statusprüfung** analysiert den Arbeitsbereich automatisch auf häufige Konfigurationsfehler und gibt Hinweise zur Verbesserung. Sie ist über die Arbeitsbereich-Einstellungen erreichbar.

## Funktionsweise

Die Statusprüfung führt eine Reihe automatischer Checks durch und gruppiert die Ergebnisse nach Schweregrad:

| Stufe | Bedeutung |
|---|---|
| **Fehler** (rot) | Kritische Probleme, die behoben werden sollten |
| **Warnung** (orange) | Potenzielle Probleme, die zu unerwartetem Verhalten führen können |
| **Info** (blau) | Hinweise und Verbesserungsvorschläge |
| **Bestanden** (grün) | Keine Probleme festgestellt |

## Geprüfte Bereiche

Die Statusprüfung umfasst unter anderem folgende Checks:

- **Zahlenfelder** — Prüfung auf zu große Werte in Zahlen-Bausteinen
- **Formeln** — Prüfung auf fehlerhafte Formelkonfigurationen in Bausteinen und Workflows
- **Verknüpfungen** — Prüfung auf ungültige Verknüpfungen zwischen Listen
- **Übertragungen** — Prüfung auf doppelte, zyklische oder inkonsistente Datenübertragungen
- **Sekundärschlüssel** — Prüfung auf doppelte Sekundärschlüssel
- **Übersetzungen** — Prüfung auf fehlende Übersetzungen bei aktivierter Mehrsprachigkeit
- **Datumsfilter** — Prüfung auf veraltete Datumsfilter-Formate
- **Workflow-Variablen** — Prüfung auf ungültige Variablennamen in Workflows
- **Bezeichnungen** — Prüfung auf fehlende Bezeichnungen bei Bausteinen

Jedes Ergebnis enthält einen Verweis auf die betroffene Kachel, den Workflow oder den Baustein, um das Problem schnell lokalisieren zu können.
