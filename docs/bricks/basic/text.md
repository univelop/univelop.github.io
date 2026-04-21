---
layout: title
title: Hinweis
parent: Basis-Bausteine
grand_parent: Bausteine
nav_order: 3
redirect_from:
    - /docs/record-spec-settings/grand-childs-base/hint.html
---

Mit dem Baustein _Hinweis_ können statische Hinweistexte in Einträgen angezeigt werden. Der Hinweistext wird über die Bezeichnung des Bausteins im Designmodus eingegeben. Zeilenumbrüche innerhalb des Textes sind per Enter-Taste möglich.

## Einstellungen

Allgemeine Einstellungen wie Sichtbarkeit und Berechtigungen werden unter [Allgemeine Baustein-Einstellungen](/docs/bricks/common-settings) beschrieben.

1. **Stil** — Legt das visuelle Erscheinungsbild des Hinweistextes fest. Mögliche Werte:
   - _Kein Stil_ — Einfache Anzeige als Listenzeile mit optionalem Icon
   - _Schlicht_ — Grauer, kursiver Text
   - _Info_ — Blaue Infobox mit Info-Icon
   - _Warnung_ — Orange Warnungsbox mit Warndreick-Icon
   - _Erfolg_ — Grüne Erfolgsbox mit Checkhaken-Icon
   - _Fehler_ — Rote Fehlerbox mit Ausrufezeichen-Icon

## Hinweise

- Der technische Name sollte ggf. gekürzt werden, da sonst der gesamte Hinweistext als technischer Name erscheinen kann.
- Hinweistexte sind immer nur lesbar. Die Einstellung _Nur Lesen_ hat hier keine weitere Funktion.
- Das bedingte Anzeigen und Verstecken von Hinweistexten ist möglich und dort sinnvoll, wo Hinweise nur unter bestimmten Bedingungen relevant sind.

## Funktionsweise 

Nachdem der Hinweistext über die Bezeichnung des Bausteins im Designmodus eingegeben wurde, kann über die Einstellung _Stil_ ein Stil ausgewählt werden (z.B. hier: Warnung).

![alt text](/assets/workflows/advanced/bricks/basic/text-hint.png)

## Verwandte Bausteine

- [Formatierter Hinweis](/docs/bricks/basic/rich-text-hint) — Für Hinweistexte mit Formatierungen, Bildern und Auflistungen
- [Abschnitt](/docs/bricks/basic/section) — Zum thematischen Gliedern von Einträgen
