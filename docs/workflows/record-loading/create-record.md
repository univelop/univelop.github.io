---
layout: workflow-step
title: Erstelle Eintrag
parent: Einträge laden
grand_parent: Workflows
icon: add_circle_outline
nav_order: 1
redirect_from:
    - /docs/workflows/grand-childs-bricks/create-record.html
    - /docs/workflows/load-records/create-record.html
---

Mit dem Schritt _Erstelle Eintrag_ wird ein neuer Datensatz in der angegebenen Liste erstellt und optional mit Werten befüllt. Der erstellte Datensatz ist in folgenden Schritten über den technischen Namen zugreifbar.

## Einstellungen

1. **Verknüpfung mit** — Die Liste, in der der neue Datensatz erstellt wird.
2. **Variablen-Zuweisungen** — Für jeden Baustein des Datensatzes kann ein Wert angegeben werden. Der Wert muss zum Typ des Bausteins passen (z. B. Datum für einen [Datumsauswahl](/docs/bricks/input/date-picker)-Baustein, Zahl für ein [Zahlenfeld](/docs/bricks/input/number-field)).
3. **Auf Speicherung warten** — Wenn aktiviert, wartet der Workflow, bis der Datensatz vollständig gespeichert ist, bevor er fortfährt.

## Hinweise

- Der erstellte Datensatz wird über den technischen Namen des Schritts im Workflow verfügbar (z. B. `neuer_eintrag.id` für die ID).
- Verfügbar in: Client-Automatisierung, Server-Automatisierung, Geschäftsprozess.

## Verwandte Schritte

- [Dupliziere einen Eintrag](/docs/workflows/record-loading/duplicate-record) — Zum Kopieren eines bestehenden Datensatzes
- [Ändere einen Eintrag](/docs/workflows/record-editing/modify-record) — Zum Ändern eines bestehenden Datensatzes
