---
layout: workflow-step
title: Setze Variablen
parent: Struktur
grand_parent: Workflows
icon: description
nav_order: 4
redirect_from:
    - /docs/workflows/grand-childs-bricks/set-variable.html
    - /docs/workflows/basic/set-variables.html
---

Mit dem Schritt _Setze Variablen_ werden benutzerdefinierte Variablen erstellt, die in allen folgenden Schritten des Workflows verfügbar sind. Variablen können Werte aus Bausteinen, Formeln oder feste Werte enthalten.

## Einstellungen

Für jede Variable wird angegeben:

1. **Name** — Der Name, unter dem die Variable in folgenden Schritten referenziert wird (z. B. `meine_variable`).
2. **Typ** — Der Datentyp der Variable (Text, Zahl, Datum, Ja/Nein, Liste, Dynamisch, Binär).
3. **Wert** — Der zuzuweisende Wert. Kann eine Formel sein, z. B. `bestellungen.id` für die ID eines geladenen Datensatzes.

## Beispiel

Um die Summe zweier Bausteinwerte in einer Variable zu speichern:

- Name: `gesamtbetrag`
- Typ: Zahl
- Wert: `nettobetrag + steuerbetrag`

In folgenden Schritten ist der Wert über `gesamtbetrag` zugreifbar.

## Hinweise

- Es können mehrere Variablen in einem einzelnen Schritt definiert werden.
- Der Typ muss korrekt gewählt werden — eine Zahl kann nicht in einer Text-Variable ohne Konvertierung gespeichert werden.
- Verfügbar in: Client-Automatisierung, Server-Automatisierung, Geschäftsprozess.
- Dieser Schritt verbraucht keine [Credits](/docs/credits).
