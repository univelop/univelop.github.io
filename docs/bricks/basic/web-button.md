---
layout: title
title: Web Link
parent: Basis-Bausteine
grand_parent: Bausteine
nav_order: 5
redirect_from:
    - /docs/record-spec-settings/grand-childs-base/web-link.html
---

Mit dem Baustein _Web Link_ kann ein Button oder Link zu einer URL in Einträgen angezeigt werden. Die URL kann statisch sein oder dynamisch über Formeln aus anderen Bausteinen zusammengesetzt werden.

## Einstellungen

Allgemeine Einstellungen wie Sichtbarkeit und Berechtigungen werden unter [Allgemeine Baustein-Einstellungen](/docs/bricks/common-settings) beschrieben.

1. **URL** — Die Ziel-URL des Links. Unterstützt Formeln, um Werte aus anderen Bausteinen einzusetzen (z. B. `https://example.com/{Technischer Name}`). Das Präfix `https://` wird automatisch ergänzt, falls nicht angegeben.
2. **Extern öffnen** — Legt fest, ob der Link im externen Browser oder innerhalb der App geöffnet wird.

## Hinweise

- Die URL benötigt immer die vollständige Domain mit Endung (z. B. `www.example.de`).
- Dieser Baustein eignet sich besonders für Links, die in jedem Eintrag gleich sind, z. B. allgemeine Geschäftsbedingungen oder externe Dokumentation.
- Für dynamische Links, die sich pro Eintrag unterscheiden, können Formeln in der URL-Einstellung verwendet werden.

## Verwandte Bausteine

- [Navigation](/docs/bricks/basic/navigation) — Für Navigation innerhalb der App zu Listen oder Einträgen
