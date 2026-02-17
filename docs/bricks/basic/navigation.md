---
layout: title
title: Navigation
parent: Basis-Bausteine
grand_parent: Bausteine
nav_order: 8
redirect_from:
    - /docs/record-spec-settings/grand-childs-base/navigate.html
---

Der Baustein _Navigation_ zeigt einen Button an, der bei Klick eine konfigurierbare Navigation innerhalb der App auslöst. Er vereinfacht Prozesse zwischen mehreren Listen und verbessert die Nutzbarkeit, insbesondere für Portal-Nutzer.

## Einstellungen

Allgemeine Einstellungen wie Sichtbarkeit und Berechtigungen werden unter [Allgemeine Baustein-Einstellungen](/docs/bricks/common-settings) beschrieben.

1. **Aktion** — Das Navigationsziel, das bei Klick auf den Button ausgelöst wird:
   - _Zu Liste navigieren_ — Öffnet eine ausgewählte Liste. Über Filter können die angezeigten Einträge eingeschränkt werden.
   - _Zu Eintrag navigieren_ — Öffnet einen bestimmten Eintrag. Die Filter müssen den Eintrag eindeutig identifizieren. Wird kein Eintrag gefunden, erhält der Nutzer eine entsprechende Meldung. Werden mehrere Einträge gefunden, wird kein Eintrag geöffnet.
   - _Neuen Eintrag erstellen_ — Erstellt einen neuen Eintrag in einer ausgewählten Liste. Über Filter können dem neuen Eintrag Standardwerte mitgegeben werden.
   - _Zum Homescreen navigieren_ — Navigiert zurück zum Homescreen des Arbeitsbereichs.
   - _Zu Seite navigieren_ — Öffnet eine bestimmte Seite innerhalb des Arbeitsbereichs.
2. **Zielliste** — Die Liste, zu der navigiert wird oder in der ein Eintrag erstellt/gesucht wird. Verfügbar bei den Aktionen _Zu Liste navigieren_, _Zu Eintrag navigieren_ und _Neuen Eintrag erstellen_.
3. **Filter** — Filterbedingungen, um die Navigation einzuschränken oder Standardwerte zu setzen.
4. **Sortierung** — Der Baustein, nach dem die Ergebnisse sortiert werden, sowie die Sortierrichtung (aufsteigend/absteigend).
5. **Als Dialog öffnen** — Öffnet das Navigationsziel als Dialog-Overlay statt als vollständige Navigation.
6. **Eintrag erstellen, wenn keiner gefunden** — Erstellt automatisch einen neuen Eintrag, wenn die Filter kein Ergebnis liefern. Nur verfügbar bei _Zu Eintrag navigieren_.

## Hinweise

- Dieser Baustein ist in geteilten Datensätzen (Shared Record Specs) nicht verfügbar.

## Verwandte Bausteine

- [Web Link](/docs/bricks/basic/web-button) — Für Navigation zu externen URLs
