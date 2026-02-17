---
layout: title
title: Checkliste
parent: Erweiterte Bausteine
grand_parent: Bausteine
nav_order: 27
redirect_from:
    - /docs/record-spec-settings/grand-child-expanded/checklist.html
---

Mit dem Baustein _Checkliste_ können Aufgaben als abhakbare Liste innerhalb eines Datensatzes verwaltet werden. Jeder Eintrag kann einzeln als erledigt markiert werden. Der Baustein eignet sich z. B. für Prüflisten, Arbeitsanweisungen oder To-Do-Listen.

## Einstellungen

Allgemeine Einstellungen wie Sichtbarkeit und Berechtigungen werden unter [Allgemeine Baustein-Einstellungen](/docs/bricks/common-settings) beschrieben.

Der Baustein hat keine zusätzlichen bausteinspezifischen Einstellungen. Die Checklisteneinträge werden direkt im Datensatz erfasst.

## Funktionsweise

Die Checkliste wird im Markdown-Format gespeichert. Einträge können hinzugefügt, bearbeitet, abgehakt und gelöscht werden. Der Baustein stellt automatisch folgende abgeleitete Werte bereit:

- **Gesamtanzahl** — Die Anzahl aller Einträge in der Checkliste.
- **Abgehakt** — Die Anzahl der erledigten Einträge.
- **Nicht abgehakt** — Die Anzahl der offenen Einträge.
- **Alle erledigt** — Ein Wahrheitswert, der angibt, ob alle Einträge abgehakt sind.

Diese Werte können in Formeln und Filtern verwendet werden, z. B. um den Fortschritt einer Checkliste darzustellen.

## Hinweise

- Die abgeleiteten Werte ermöglichen es, z. B. in einer _Zahlenformel_ den Fortschritt als Prozentwert zu berechnen.
- Der Wahrheitswert _Alle erledigt_ kann in Bedingungen oder für die Datensatzsperre verwendet werden.

## Verwandte Bausteine

- [Schalter](/docs/bricks/input/switch) — Für einzelne Ja/Nein-Eingaben
- [Status](/docs/bricks/advanced/status) — Für die Statusverwaltung von Prozessen
