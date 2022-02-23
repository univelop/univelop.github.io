---
layout: default
title: Formelsammlung
nav_order: 11
---

# Formelsammlung

## Datumsformeln

Datumsformeln sind nur in Verbindung mit einem Datum Baustein möglich. Sie können diese Formeln in den Filtern
für Datensatzverknüpfungen oder im Listenfilter verwenden, wenn Sie dort den Formelbutton sehen.

### Liste mit Standard-Datumsformeln

- Today()
- startOfWeek()
- endOfWeek()
- startOfMonth()
- endOfMonth()
- startOfQuarter()
- endOfQuarter()
- startOfYear()
- endOfYear()

Rechnen mit Formeln über

- addMonths()
- subtractMonths()

Dies ist nur möglich mit einem Datumsbezug, siehe oben. Also: addMonths(today(),1)
Diese Formel addiert auf heute einen Monat.

### Darstellungen dynamischen Zeitspannen mit Formelberechnungen:

- Aktuelle Woche startOfWeek() und endOfWeek()
- Letzte Woche startOfWeek() -7 und endOfWeek() -7
- Aktueller Monat startOfMonth() und endOfMonth()
- Letzter Monat subtractMonths(startOfMonth(),1) und startOfMonth()-1

Sie können das Ende des letzten Monats z.B. nicht mit subtractMonths(endOfMonth(),1) darstellen,
da die Formel endOfMonth auf das aktuelle Monatsende zugreift. Durch die unterschiedlichen
Tage pro Monat würde hier mindestens ein Tag ignoriert werden. Stattdessen lassen Sie sich den Wert
vom Monatsanfang geben und rechnen hiervon einen Tag runter.

## Bedingungen und rechnen mit Formeln im Formel-Baustein

Sie können über den Formelbaustein ganz einfach mit Bedingungen rechnen oder sich Inhalte anzeigen lassen. 
Hierzu beziehen Sie sich immer auf den technischen Namen eines Bausteins in Ihrer Liste oder den technischen
Namen eines Bausteins in einer verknüpften Liste.

Der technische Name wird meistens durch die Bezeichnung vorgegeben, außer Sie ändern den technischen Namen selbst ab.
Ein Datensatz Baustein mit Namen Mitarbeiter wird wahrscheinlich mitarbeiter heißen.
Möchten Sie nun zum Beispiel auf den Stundenlohn des Mitarbeiters zugreifen, geben Sie ein "mitarbeiter.stundenlohn".

Wenn Sie Mitarbeiter.stundenlohn eingeben, wird Ihnen nur der Stundenlohn angezeigt. Wenn Sie in Ihrer Liste noch
eine Arbeitszeit haben, könnten Sie eingeben mitarbeiter.stundenlohn*arbeitszeit und hätten somit einen Arbeitswert.