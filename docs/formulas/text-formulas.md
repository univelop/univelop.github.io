---
title: Textformeln
layout: title
parent: Formelsammlung
nav_order: 3
redirect_from:
    - /docs/formulas/childs/text-formulas.html
---

## <span style="color:#0b5394">**Textkonstanten**</span>

Folgende Textkonstanten dienen dem Zugriff auf die Attribute des aktuellen Benutzers.
Alle Textkonstanten liefern einen Text bei der Auswertung.

| Konstanten            | Beschreibung                                   | Beispielausgabe                                                                    |
| --------------------- | ---------------------------------------------- | ---------------------------------------------------------------------------------- |
| `currentUserName`     | Name des aktuellen Benutzers                   | "Max Mustermann"                                                                   |
| `currentUserId`       | ID des aktuellen Benutzers                     | Eine 28-stellige Zeichenkette bestehend aus Klein- und Großbuchstaben sowie Zahlen |
| `currentUserEmail`    | E-Mail des aktuellen Benutzers                 | "max.mustermann@beispiel.mail                                                      |
| `currentUserTeamName` | Name des aktiven Teams des aktuellen Benutzers | "Beispielteam"                                                                     |
| `currentUserTeamId`   | ID des aktiven Teams des aktuellen Benutzers   | Eine -stellige Zeichenkette bestehend aus Klein- und Großbuchstaben sowie Zahlen   |
| `currentUserRoleName` | Name der aktiven Rolle des aktuellen Benutzers | "Beispielrolle"                                                                    |
| `currentUserRoleId`   | ID der aktiven Rolle des aktuellen Benutzers   | Eine -stellige Zeichenkette bestehend aus Klein- und Großbuchstaben sowie Zahlen   |

## <span style="color:#0b5394">**Textformeln**</span>


{% include expressions_table.html category="text" %}