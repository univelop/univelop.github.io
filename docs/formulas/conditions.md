---
title: Bedingungen
layout: title
parent: Formeln
nav_order: 8
redirect_from:
    - /docs/how-to-use-formulas/conditions.html
---

Mit Formelbausteinen können bedingte Berechnungen durchgeführt werden. Der Zugriff auf Bausteinwerte erfolgt über den technischen Namen, der im [Designmodus](/docs/designmode/record) in den erweiterten Einstellungen eines Bausteins festgelegt wird.

## Technische Namen nutzen

Der technische Name eines Bausteins wird in Formeln als Platzhalter für den aktuellen Wert verwendet. Beispiel: Ein Baustein mit dem technischen Namen `stundenlohn` und dem Wert _25_ kann in einer Zahlenformel direkt referenziert werden:

```
stundenlohn * arbZeit
→ 25 * 8 = 200
```

Für den Zugriff auf Daten aus verknüpften Listen wird ein [Datensatz-Baustein](/docs/bricks/advanced/record-picker) benötigt, der den gewünschten Wert in einen lokalen Baustein überträgt.

{: .hint }
Kurze, sprechende technische Namen wie `stdlo` oder `arbZeit` vereinfachen die Arbeit mit Formeln.

## Wenn-Dann-Sonst

Die Formeln `if()` und `ifElse()` ermöglichen bedingte Berechnungen:

| Formel | Beschreibung |
|--------|-------------|
| `if(bedingung, dann)` | Gibt `dann` zurück, wenn die Bedingung wahr ist |
| `ifElse(bedingung, dann, sonst)` | Gibt `dann` zurück, wenn wahr, sonst `sonst` |

### Beispiele

**Samstagszuschlag auf den Stundenlohn:**

```
if(arbeitstag == "Samstag", stundenlohn * 1.5)
```

**Verpflegungspauschale bei langer Reisezeit:**

```
ifElse(reisezeit >= 12, verpflegungspauschale, 0)
```

## Rechnen mit Dezimalzahlen

Bei Berechnungen mit Dezimalzahlen muss ein **Punkt** statt eines Kommas verwendet werden:

```
stundenlohn * 1.5    → korrekt
stundenlohn * 1,5    → Fehler
```

## Zugriff auf verknüpfte Daten

Um auf Werte aus einer verknüpften Liste zuzugreifen, wird ein [Datensatz-Baustein](/docs/bricks/advanced/record-picker) eingesetzt, der den gewünschten Wert in einen lokalen Baustein überträgt. Dieser lokale Baustein bekommt einen technischen Namen, über den er in Formeln referenziert werden kann.

Beispiel: Der Stundenlohn aus der Mitarbeiter-Liste wird per Datensatzverknüpfung in einen lokalen Baustein mit dem technischen Namen `mitarbeiterLohn` übertragen. In der Formel wird dann `mitarbeiterLohn * arbZeit` geschrieben.
