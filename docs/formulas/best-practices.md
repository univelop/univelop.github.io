---
title: Best Practices
layout: title
parent: Formeln
nav_order: 10
redirect_from:
    - /docs/how-to-use-formulas/best-practices.html
---

Empfehlungen für den effizienten und fehlerfreien Umgang mit Formeln in Univelop.

## Formeln vor dem Einsatz testen

Formeln, die in E-Mails oder [PDF-Bausteinen](/docs/bricks/advanced/print-out) verwendet werden, sollten zunächst in einem Formelbaustein getestet werden. So lässt sich das Ergebnis direkt im Eintrag prüfen, ohne jedes Mal eine PDF generieren oder eine E-Mail versenden zu müssen.

Der Testbaustein kann nach erfolgreicher Prüfung wieder gelöscht werden.

## Formeln in Bausteine auslagern

Komplexe Formeln, die in E-Mail-Vorlagen oder PDF-Vorlagen verwendet werden, sollten in einen passenden Formelbaustein ausgelagert werden. In der Vorlage wird dann nur noch der technische Name des Formelbausteins referenziert.

**Vorteile:**
- Bessere Übersichtlichkeit in der Vorlage
- Einfache Prüfung, ob die Formel korrekt ist
- Zentrale Anpassung an einer Stelle

Dies lohnt sich besonders bei langen Formeln oder Formeln, die an mehreren Stellen verwendet werden.

## Formeln wiederverwenden

Wird dieselbe Berechnung an mehreren Stellen benötigt (z. B. Brutto/Netto-Kalkulation), sollte ein gemeinsamer Formelbaustein erstellt werden, auf den andere Formeln zugreifen.

```
netto_betrag          → Zahlenformel: preis * menge
mwst_betrag           → Zahlenformel: netto_betrag * 0.19
brutto_betrag         → Zahlenformel: netto_betrag + mwst_betrag
```

So wird die Formel nur einmal geschrieben und Fehler werden vermieden.

## Auf Datentypen achten

Jede Formel erwartet bestimmte Datentypen als Eingabe. Häufige Fehler:

- `formatDate()` erwartet ein **Datum**, keinen Text
- Rechenoperatoren (`+`, `-`, `*`, `/`) erwarten bei mathematischen Operationen **Zahlen**
- Vergleichsoperatoren (`==`, `!=`) erwarten auf beiden Seiten den **gleichen Datentyp**

Bei Typkonflikten können Konvertierungsformeln wie `toText()`, `toNumber()` oder `toDate()` helfen.
