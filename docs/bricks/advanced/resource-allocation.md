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

Mit dem Baustein _Ressourcen-Zuweisung_ können Ressourcen per Drag & Drop auf Zuweisungs-Ziele zugeordnet werden. Der Baustein arbeitet mit drei Listen: einer Ressourcen-Liste, einer Zuweisungs-Liste und einer Zuweisungs-Ziel-Liste. Er eignet sich z. B. für die Zuordnung von Materialien zu Warengruppen, Mitarbeitern zu Projekten oder Fahrzeugen zu Einsätzen.

## Einstellungen

Allgemeine Einstellungen wie Sichtbarkeit und Berechtigungen werden unter [Allgemeine Baustein-Einstellungen](/docs/bricks/common-settings) beschrieben.

### Ressource

1. **Verknüpfung mit** — Die Liste, die die Ressourcen enthält (z. B. Materialien).
2. **Verknüpfung über** — _Optional._ Filtert die Ressourcen auf den aktuellen Datensatz.
3. **Filter und Sortierung** — Schränkt die angezeigten Ressourcen ein.
4. **Eintragsvorschau** — Die Darstellung der Ressourcen auf der Zuweisungs-Oberfläche. Standardmäßig wird die Listenansicht der verknüpften Liste verwendet.

### Zuweisung

5. **Verknüpfung mit** — Die Liste, die die Zuweisungen enthält. Diese Liste verbindet Ressourcen mit Zuweisungs-Zielen und muss mindestens je einen _Datensatz_-Baustein auf die Ressource und auf das Zuweisungs-Ziel enthalten.
6. **Verknüpfung über** — _Optional._ Filtert die Zuweisungen auf den aktuellen Datensatz.
7. **Filter und Sortierung** — Schränkt die angezeigten Zuweisungen ein.
8. **Verknüpfung zur Ressource** — Der _Datensatz_-Baustein in der Zuweisungs-Liste, der auf die Ressource zeigt. Wird beim Zuweisen automatisch befüllt.
9. **Verknüpfung zum Zuweisungs-Ziel** — Der _Datensatz_-Baustein in der Zuweisungs-Liste, der auf das Zuweisungs-Ziel zeigt. Wird beim Zuweisen automatisch befüllt.

### Zuweisungs-Ziel

10. **Verknüpfung mit** — Die Liste, die die Zuweisungs-Ziele enthält (z. B. Warengruppen).
11. **Verknüpfung über** — _Optional._ Filtert die Zuweisungs-Ziele auf den aktuellen Datensatz.
12. **Filter und Sortierung** — Schränkt die angezeigten Zuweisungs-Ziele ein.
13. **Eintragsvorschau** — Die Darstellung der Zuweisungs-Ziele auf der Oberfläche.

## Funktionsweise

Die Oberfläche zeigt links die verfügbaren Ressourcen und rechts die Zuweisungs-Ziele. Per Drag & Drop wird eine Ressource auf ein Zuweisungs-Ziel gezogen, wodurch automatisch ein Zuweisungs-Datensatz erstellt wird. Die Bausteine _Verknüpfung zur Ressource_ und _Verknüpfung zum Zuweisungs-Ziel_ werden dabei automatisch befüllt.

Zuweisungen können innerhalb von Zuweisungs-Zielen verschoben oder zurückgezogen werden, um den Zuweisungs-Datensatz zu löschen.

## Hinweise

- Die Zuweisungs-Liste kann weitere Bausteine enthalten (z. B. eine Nummer für die Menge), die beim Zuweisen manuell ausgefüllt werden können.
- Die optionalen _Verknüpfung über_-Einstellungen ermöglichen es, Ressourcen und Zuweisungen auf den Kontext eines bestimmten Datensatzes (z. B. eines Projekts) zu beschränken.

## Verwandte Bausteine

- [Matrix](/docs/bricks/advanced/matrix) — Für zweidimensionale Zuordnungen in Gitterform
- [Terminplaner](/docs/bricks/advanced/scheduler) — Für die zeitbasierte Ressourcenplanung
- [Datensatz Liste](/docs/bricks/advanced/record-list) — Für die einfache Listenanzeige verknüpfter Einträge
