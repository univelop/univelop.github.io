---
layout: title
title: Status Button
parent: Erweiterte Bausteine
grand_parent: Bausteine
nav_order: 7
redirect_from:
    - /docs/record-spec-settings/grand-child-expanded/button-status.html
---

Mit dem Baustein _Status Button_ kann ein bestimmter Status per Knopfdruck gesetzt werden. Er wird immer mit einem _Status_-Baustein verknüpft und eignet sich für die gezielte Steuerung von Prozessschritten — z. B. „Arbeitszeit geprüft" oder „Auftrag abgeschlossen".

## Einstellungen

Allgemeine Einstellungen wie Sichtbarkeit und Berechtigungen werden unter [Allgemeine Baustein-Einstellungen](/docs/bricks/common-settings) beschrieben.

1. **Verknüpfung mit** — Der _Status_-Baustein, der gesteuert werden soll.
2. **Status** — Der Status, der beim Klick auf den Button gesetzt wird.

## Funktionsweise

Beim Klick auf den Button wird der verknüpfte Status auf den konfigurierten Wert gesetzt. Dies löst ggf. auch die Pflichtfeldprüfung und Datensatzsperre aus, sofern diese im _Status_-Baustein für den jeweiligen Status konfiguriert sind.

Über die allgemeinen Einstellungen _Anzeigen wenn_ und _Rollenberechtigungen_ lässt sich steuern, wer den Button sehen und nutzen kann. So kann z. B. ein Button „Arbeitszeit geprüft" nur für Vorgesetzte sichtbar gemacht werden, während Mitarbeiter nur den Einreichungs-Button sehen.

## Hinweise

- Es können mehrere _Status Button_-Bausteine für denselben _Status_-Baustein angelegt werden, um verschiedene Statusübergänge abzubilden.
- Über bedingte Sichtbarkeit können Buttons je nach aktuellem Status ein- und ausgeblendet werden, um einen geführten Prozess zu erstellen.

## Verwandte Bausteine

- [Status](/docs/bricks/advanced/status) — Der Baustein, der die verfügbaren Stati definiert
- [Workflow Button](/docs/bricks/advanced/flow-button) — Für das Auslösen von Workflows per Button
- [Datensatz sperren](/docs/bricks/advanced/release) — Für die manuelle Datensatzsperre
