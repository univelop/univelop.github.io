---
title: Praxisbeispiele
layout: title
parent: Formeln
nav_order: 9
redirect_from:
    - /docs/how-to-use-formulas/examples.html
---

Die folgenden Beispiele zeigen typische Anwendungsfälle für Formeln in Univelop.

## Sortierung mit Formelbaustein

Ein [Textformel-Baustein](/docs/bricks/advanced/text-expression) kann als Sortierschlüssel für eine Blocksortierung verwendet werden.

**Anwendungsfall:** Arbeitszeiten sollen nach Mitarbeitername und dann nach Datum sortiert werden.

**Formel:**

```
mitarbeiterNachname + formatDate(datum, "yyyyMMdd")
```

**Ergebnis:** `"Schäfer20220131"` — Die Sortierung nach diesem Feld ergibt eine Blocksortierung: erst nach Name, dann nach Datum.

## Kettenformeln mit Zuschlagsberechnung

Mehrere Berechnungen können verkettet werden. Zusammengehörige Rechenblöcke sollten in Klammern stehen.

**Anwendungsfall:** Sonderlohn aus Stundenlohn mit Zuschlag plus Bereitschaftspauschale.

**Formel:**

```
(mitarbeiterStundenlohn * 1.25) + mitarbeiterBereitschaftspauschale
```

## Lagerverwaltung mit bedingten Formeln

Bedingte Formeln (`ifElse`) lassen sich verketten, um positive und negative Bewegungen zu kombinieren.

**Anwendungsfall:** Zu- und Abgänge in einer Artikelbewegung zusammenfassen.

**Formel:**

```
ifElse(eingelagert == "Ja", menge_eingang, 0) - ifElse(ausgelagert == "Ja", menge_ausgang, 0)
```

**Ergebnis:** Einlagerungen ergeben positive Werte, Auslagerungen negative. Per [Datensatzliste](/docs/bricks/advanced/record-list) im Artikel wird die Summe aller Bewegungen zum aktuellen Lagerbestand.

## Dynamische Datumsfilter

Datumsformeln eignen sich zum Erstellen dynamischer Filter, die automatisch aktuell bleiben.

**Anwendungsfall:** Alle Datensätze aus dem Vormonat anzeigen.

**Filter konfigurieren:**
- Datumsfeld >= `subtractMonths(startOfMonth(), 1)`
- Datumsfeld < `startOfMonth()`

Weitere Zeitspannen-Beispiele finden sich unter [Datumsformeln](/docs/formulas/date-formulas#dynamische-zeitspannen-für-filter).
