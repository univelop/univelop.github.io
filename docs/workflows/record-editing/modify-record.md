---
layout: workflow-step
title: Ändere einen Datensatz
parent: Einträge bearbeiten
grand_parent: Workflows
icon: change_circle
nav_order: 1
redirect_from:
    - /docs/workflows/grand-childs-bricks/alter-record.html
    - /docs/workflows/edit-records/modify-record.html
---

Mit dem Schritt _Ändere einen Datensatz_ werden Bausteinwerte eines bestehenden Datensatzes aktualisiert.

## Einstellungen

1. **Auf Speichern warten** — Wenn aktiviert, wartet der Workflow, bis die Änderungen gespeichert sind.
2. **Verknüpfung mit** — Die Liste, in der der Datensatz liegt.
3. **Datensatz-ID** — Die ID des zu ändernden Datensatzes. Kann als Formel angegeben werden (z. B. `bestellungen.id`).
4. **Variablen-Zuweisungen** — Für jeden zu ändernden Baustein wird der neue Wert angegeben. Der Wert muss zum Typ des Bausteins passen.

## Hinweise

- Nur die angegebenen Bausteine werden geändert — nicht aufgeführte Bausteine behalten ihren aktuellen Wert.
- Verfügbar in: Geräteseitige Automatisierung, Cloud-Automatisierung, Geschäftsprozess.

## Verwandte Schritte

- [Erstelle einen neuen Datensatz](/docs/workflows/record-loading/create-record) — Zum Erstellen neuer Datensätze
- [Lösche einen Datensatz](/docs/workflows/record-editing/delete-record) — Zum Löschen von Datensätzen
