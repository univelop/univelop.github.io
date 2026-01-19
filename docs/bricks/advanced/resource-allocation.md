---
layout: title
title: Ressourcen-Zuweisung
parent: Erweiterte Bausteine
grand_parent: Bausteine
nav_order: 35
nav_exclude: true
---

{: .hint }
Die Ressourcen-Zuweisung ist ein [Power Feature](/docs/power-features)

Mit der Ressourcen-Zuweisung können **Ressourcen** als **Zuweisungen** auf **Zuweisungs-Ziele** zugeordnet werden.
Die Ressourcen-Zuweisung bietet eine Oberfläche, die es intuitiv ermöglicht **Ressourcen** auf **Zuweisungs-Ziele** zu ziehen und somit **Zuweisungen** zu erstellen. **Zuweisungen** können innerhalb von **Zuweisungs-Zielen** verschoben werden oder zurückgezogen werden, um den **Zuweisungs-Datensatz** zu löschen.

Ein Beispielszenario könnte wie folgt aussehen:
- **Ressourcen**: Materialien-Liste
- **Zuweisungen**: Liste, welche Materialien mit Warengruppen kombiniert. Diese Liste muss mindestens einen Datensatz-Baustein auf die **Ressourcen** sowie einen auf die **Zuweisungs-Ziele** beinhalten. Diese Liste kann weitere Bausteine, wie bspw. eine Nummer als Menge, beinhalten
- **Zuweisungs-Ziele**: Warengruppe-Liste 

## <span style="color:#0b5394">Einstellung</span>

### Ressource

#### Verknüpfung mit (erforderlich)

Über diese Einstellung muss die Liste ausgewählt werden, welche die Ressourcen beinhaltet.

#### Verknüpfung über (optional)

Optional kann eine `Verknüpfung über` definiert werden. Diese verknüpft die Ressourcen mit dem aktuellen Datensatz, auf welchem sich der Baustein befindet. Ist dies gesetzt, werden die Datensätze direkt auf entsprechenden Datensatz heruntergefiltert.

#### Filter und Sortierung (optional)

Optional können Filter und/oder eine Sortierung angegeben werden, um die angezeigten Datensätze einzuschränken.

#### Eintragsvorschau (optional)

Die Darstellung der Datensätze auf der Ressourcen-Zuweisungs Oberfläche.
Standardmäßig wird die Darstellung der verknüpften Ressourcne-Liste verwendet.

### Zuweisung

#### Verknüpfung mit (erforderlich)

Über diese Einstellung muss die Liste ausgewählt werden, welche die Zuweisungen beinhaltet.

#### Verknüpfung über (optional)

Optional kann eine `Verknüpfung über` definiert werden. Diese verknüpft die Zuweisungen mit dem aktuellen Datensatz, auf welchem sich der Baustein befindet. Ist dies gesetzt, werden die Datensätze direkt auf entsprechenden Datensatz heruntergefiltert.

#### Filter und Sortierung (optional)

Optional können Filter und/oder eine Sortierung angegeben werden, um die angezeigten Datensätze einzuschränken.

#### Verknüpfung zur Ressource (erforderlich)

Hier muss ein Baustein in der Zuweisungs-Liste ausgewählt werden, welcher auf die Ressourcen zeigt.
Wird eine Ressource vom Nutzer zu einem Zuweisungs-Ziel gezogen, wird dieser Baustein automatisch mit der gezogenen Ressource befüllt - also eine neue Zuweisung erstellt.

#### Verknüpfung zum Zuweisungs-Ziel (erforderlich)

Hier muss ein Baustein in der Zuweisungs-Liste ausgewählt werden, welcher auf die Ressourcen-Ziele zeigt.
Wird eine Ressource vom Nutzer zu einem Zuweisungs-Ziel gezogen, wird dieser Baustein automatisch mit dem Zuweisungs-Ziel befüllt, auf welches der Nutzer die Ressource fallengelassen hat.

### Zuweisungs-Ziel (erforderlich)

#### Verknüpfung mit (erforderlich)

Über diese Einstellung muss die Liste ausgewählt werden, welche die Zuweisungs-Ziele beinhaltet.

#### Verknüpfung über (optional)

Optional kann eine `Verknüpfung über` definiert werden. Diese verknüpft die Zuweisungs-Ziele mit dem aktuellen Datensatz, auf welchem sich der Baustein befindet. Ist dies gesetzt, werden die Datensätze direkt auf entsprechenden Datensatz heruntergefiltert.

#### Filter und Sortierung (optional)

Optional können Filter und/oder eine Sortierung angegeben werden, um die angezeigten Datensätze einzuschränken.

#### Eintragsvorschau (optional)

Die Darstellung der Datensätze auf der Ressourcen-Zuweisungs Oberfläche.
Standardmäßig wird die Darstellung der verknüpften Ressourcne-Liste verwendet.




