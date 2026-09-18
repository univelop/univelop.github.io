---
layout: title
title: Einstellungen
nav_order: 11
parent: Kacheln
---

Die _Einstellungs_-Kachel ermöglicht es, [Bausteine](/docs/bricks/bricks) als globale Einstellungen zu definieren, auf die an verschiedenen Stellen in der App zugegriffen werden kann. Sie eignet sich für zentrale Werte oder Konfigurationen, die mehrfach benötigt werden — z. B. API-Schlüssel, Firmennamen oder Standardwerte.

## Zugriff in Workflows

Der Zugriff auf Felder der Einstellungs-Kachel ist innerhalb von [Workflows](/docs/workflows/workflows) über Formeln möglich. Die Syntax lautet:

```
settings.technischer_name
```

Beispiel: Hat ein Baustein den technischen Namen `api_key`, kann in Workflows mit `settings.api_key` auf den Wert zugegriffen werden.

## Einstellungen

Die Einstellungs-Kachel verwendet die [allgemeinen Kacheleinstellungen](/docs/tiles/general-settings). Die konfigurierten Bausteine innerhalb der Kachel bilden die eigentlichen Einstellungswerte.

## Einschränkungen

- Maximal **20 Daten-Bausteine** pro Einstellungs-Kachel. Bausteine ohne Wert (z. B. _Überschrift_, _Abschnitt_) sind von dieser Begrenzung ausgenommen.
- Pro Arbeitsbereich kann es nur **eine** Einstellungs-Kachel geben.
- Der Zugriff auf die Einstellungswerte ist derzeit nur in Workflows möglich.
