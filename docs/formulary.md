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

### Formel-Baustein und technischer Name

Sie können über den Formelbaustein ganz einfach mit Bedingungen rechnen oder sich Inhalte anzeigen lassen. 
Hierzu beziehen Sie sich immer auf den technischen Namen eines Bausteins in Ihrer Liste oder den technischen
Namen eines Bausteins in einer verknüpften Liste. Der technische Name steht im Designmodus des Bausteins direkt
unter dem Abschnitt "ERWEITERT".

Der technische Name wird meistens durch die Bezeichnung vorgegeben, außer Sie ändern den technischen Namen selbst ab.
Ein Datensatz Baustein mit Namen Mitarbeiter wird wahrscheinlich mitarbeiter heißen.
Möchten Sie nun zum Beispiel auf den Stundenlohn des Mitarbeiters zugreifen, geben Sie ein "mitarbeiter.stundenlohn".

Wenn Sie Mitarbeiter.stundenlohn eingeben, wird Ihnen nur der Stundenlohn angezeigt. Wenn Sie in Ihrer Liste noch
eine Arbeitszeit haben, könnten Sie eingeben mitarbeiter.stundenlohn*arbeitszeit und hätten somit einen Arbeitswert.

Es bietet sich an den technischen Namen für PDF-Vordrucke oder lange Formeln abzukürzen. Für das Beispiel des
Stundenlohns könnten Sie stdlo schreiben. Weiterhin kann es sein, dass Sie den technischen Namen anpassen
müssen, wenn Univelop mit einem anderen System automatisch kommunizieren soll, da das andere System
Ihnen Feldnamen oder Bezeichnungen vorgibt.

### Rechnen mit Formelbaustein

Sie können mit dem Formelbaustein rechnen. Dabei müssen Sie nicht zwingend zwei technische Namen / Felder angeben. Sie können
ebenso technischer Name, Rechenzeichen und gewünschte Zahl eingeben. Also für einen Samstagszuschlag beispielsweise könnte
die Formel heißen stundenlohn*1,5. Im Vergleich zu einem Nummernfeld hat dies den Vorteil, dass der prozentuale Zuschlag dynamisch
bleibt und Sie nur das Feld Stundenlohn anpassen müssten.

### Rechnung unter Bedingung

Vielleicht kennen Sie aus Excel bereits die wenn, dann Formel. Diese können Sie ebenso in einen Formelbaustein integrieren.
Auch hier können Sie sich neben der aktuellen Liste auch auf eine verknüpfte Liste beziehen.

- if(condition, thenValue) bedeutet ein einfaches wenn, dann.
- Beispiel: `if(arbeitstag == Samstag, stundenlohn*1,5)`, wenn der Arbeitstag ein Samstag ist, erhöhe den Stundenlohn um 50%.

- ifElse(condition,thenValue,elseValue) bedeutet ein wenn, dann, sonst.
- Beispiel: `ifElse(Reisezeit >= 12, verpflegungspauschale, 0)`, wenn die Reisezeit 12 Stunden oder länger dauert, gebe das Feld Verpflegungspauschale ein (Hier sollte dann ein Wert hinterlegt sein), sonst gebe eine 0 aus.

### Rechensymbole

- `== (Gleich)`
- `&& (Und)`
- `|| (Oder)`
- `< (Kleiner als)`
- `> (Größer als)`
- `!= (Ungleich)`
- `<= (Kleiner gleich)`
- `>= (Größer gleich)`
- `+ (Plus, Addition)`
- `- (Minus, Subtraction)`
- `* (Mal, Multiplikation)`
- `/ (Geteilt, Division)`
- `% (Modulo, gibt einen Restwert einer Teilung aus)`

## Weitere Funktionen des Formelbausteins

