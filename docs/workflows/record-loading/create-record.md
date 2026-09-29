---
layout: workflow-step
title: Erstelle einen neuen Datensatz
parent: Einträge laden
grand_parent: Workflows
icon: add_circle_outline
nav_order: 1
redirect_from:
    - /docs/workflows/grand-childs-bricks/create-record.html
    - /docs/workflows/load-records/create-record.html
---

Mit dem Schritt _Erstelle einen neuen Datensatz_ wird ein neuer Datensatz in der angegebenen Liste erstellt und optional mit Werten befüllt. Der erstellte Datensatz ist in folgenden Schritten über den technischen Namen zugreifbar.

## Einstellungen

1. **Auf Speichern warten** — Wenn aktiviert, wartet der Workflow, bis der Datensatz vollständig gespeichert ist, bevor er fortfährt.
2. **Verknüpfung mit** — Die Liste, in der der neue Datensatz erstellt wird.
3. **Variablen-Zuweisungen** — Für jeden Baustein des Datensatzes kann ein Wert angegeben werden. Der Wert muss zum Typ des Bausteins passen (z. B. Datum für einen [Datumsauswahl](/docs/bricks/input/date-picker)-Baustein, Zahl für ein [Zahlenfeld](/docs/bricks/input/number-field)).

## Hinweise

- Der erstellte Datensatz wird über den technischen Namen des Schritts im Workflow verfügbar (z. B. `neuer_eintrag.id` für die ID).
- Verfügbar in: Geräteseitige Automatisierung, Cloud-Automatisierung, Geschäftsprozess.

## Verwandte Schritte

- [Dupliziere einen Datensatz](/docs/workflows/record-loading/duplicate-record) — Zum Kopieren eines bestehenden Datensatzes
- [Ändere einen Datensatz](/docs/workflows/record-editing/modify-record) — Zum Ändern eines bestehenden Datensatzes
