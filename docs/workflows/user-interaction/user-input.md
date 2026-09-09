---
layout: workflow-step
title: Erfasse Benutzereingabe
parent: Benutzerinteraktion
grand_parent: Workflows
icon: input
nav_order: 6
---

Mit dem Schritt _Erfasse Benutzereingabe_ wird ein Eingabedialog angezeigt, in dem der Benutzer einen Wert eines bestimmten Typs eingeben kann. Der eingegebene Wert ist in folgenden Schritten über den technischen Namen verfügbar.

## Einstellungen

1. **Titel** — Der Titel des Eingabedialogs. Kann dynamisch mit `${}` gestaltet werden.
2. **Nachricht** — _Optional._ Ein erklärender Text im Dialog.
3. **Eingabetyp** — Der erwartete Datentyp der Eingabe: Text, Zahl, Datum, Ja/Nein, Liste oder Dynamisch.
4. **Initialwert** — _Optional._ Ein vorausgefüllter Wert. Kann als Formel angegeben werden.

## Beispiel

Um eine Menge vom Benutzer abzufragen:

- Titel: `Menge eingeben`
- Eingabetyp: Zahl
- Initialwert: `1`

In folgenden Schritten ist der eingegebene Wert über den technischen Namen (z. B. `menge_eingabe`) zugreifbar.

## Hinweise

- Nur in **Client-Automatisierungen** verfügbar — nicht auf dem Server ausführbar.
