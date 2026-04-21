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

1. **Stil** - Legt das visuelle Erscheinungsbild des Links fest. Mögliche Werte:
   - _Als Link anzeigen_ — Einfache Anzeige des Texts 'Web-Link' in Primärfarbe.
   - _Primörer Button_ — Button in Primärfarbe des Arbeitsbereichs.
   - _Sekundärer Button_ — Button in Sekundärfarbe des Arbeitsbereihs. 
1. **URL für Button** — Die Ziel-URL des Links. Unterstützt Formeln, um Werte aus anderen Bausteinen einzusetzen (z. B. `https://example.com/{Technischer Name}`). Das Präfix `https://` und `www.`wird automatisch ergänzt, falls nicht angegeben.
2. **Link auf Mobilgerätem im externem Browser öffnen** — Legt fest, ob der Link  auf Mobilgeräten im externen Browser oder innerhalb der App geöffnet wird.

## Hinweise

- Die URL benötigt immer die vollständige Domain mit Endung (z. B. `example.de`). Präfixe wie `https://` und `www.` werden automatisch ergänzt sofern diese nicht vorhanden sind.
- Dieser Baustein eignet sich besonders für Links, die in jedem Eintrag gleich sind, z. B. allgemeine Geschäftsbedingungen oder externe Dokumentation.
- Für dynamische Links, die sich pro Eintrag unterscheiden, können Formeln in der URL-Einstellung verwendet werden.

## Funktionsweise
Nachdem wir  unsere URL unter _URL für Button_ hinterlegt haben können User durch einen Klick auf die hinterlegte URL weitergeleitet werden. 

![alt text](/assets/workflows/advanced/bricks/basic/web-link.png)

## Verwandte Bausteine

- [Navigation](/docs/bricks/basic/navigation) — Für Navigation innerhalb der App zu Listen oder Eicsnträgen
