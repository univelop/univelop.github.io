---
layout: default
title: Listenformeln
nav_order: 5
parent: Formelsammlung
---

# <span style="color:#0b5394">**Listenformeln**</span>

| Formel                          | Beschreibung                                                                                                                             | Beispiel                                              | Eingabewerte Werte (Werte in den Klammern)                                              | Gelieferter Ergebnistyp |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | --------------------------------------------------------------------------------------- | ----------------------- |
| `listToText(list, separator)`   | Listet alle Elemente einer Liste auf, getrennt durch einen optionalen Separator (Wenn nicht angegeben, wird standardmäßig _,_ genommen). | `listToText([1,2,3], '--')` liefert 1--2--3            | 1. Wert: Liste, 2. Wert: Text                                                           | Text                    |
| `addToList(list, element)`      | Fügt einer Liste ein Element hinten an                                                                                                   | `addToList([1,2], 3)` liefert [1,2,3]                 | 1. Wert: Liste, 2. Wert: beliebiger Wert                                                | Liste                   |
| `removeFromList(list, element)` | Entfernt ein Element aus einer Liste                                                                                                     | `joinLists([1,2,3], 3)` liefert [1,2]                 | 1. Wert: Liste, 2. Wert: beliebiger Wert                                                | Liste                   |
| `joinLists(list, list2)`        | Verbindet zwei Listen, in dem die zweite Liste der ersten angehängt wird                                                                 | `joinLists([1,2], [3,4])` liefert [1,2,3,4]           | 1. Wert: Liste, 2. Wert: Liste                                                          | Liste                   |
| `count(list)`                   | Zählt die Elemente einer Liste/eines dynamischen Wertes                                                                                  | `count([1,2,4])` liefert 3                            | 1. Wert: Liste                                                                          | Zahl                    |
| `contains(list, item)`          | Gibt Ja/Nein abhängig davon zurück, ob das Objekt _item_ in der Liste _list_ vorhanden ist.                                              | `contains(["Hello", "World"],"World")` liefert _true_ | 1. Wert: Liste, 2. Wert: Objekt (Typ muss mit den Objekten in der Liste übereinstimmen) | Ja/Nein                 |
