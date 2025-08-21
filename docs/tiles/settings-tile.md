---
layout: title
title: Einstellungen
nav_order: 11
parent: Kacheln
---

Die **Einstellungs-Kachel** ermöglicht es, [Bausteine](/docs/bricks/bricks) als globale Einstellungen zu definieren, auf die an verschiedenen Stellen in der App zugegriffen werden kann. Sie eignet sich besonders, wenn es zentrale Werte oder Konfigurationen gibt, die mehrfach in der App benötigt werden.

Beispielsweise kann in der Einstellungs-Kachel ein Feld **"API Key"** angelegt werden, auf das anschließend in Workflows verwiesen werden kann.

### <span style="color:#'">Zugriff in Workflows</span>

Derzeit ist der Zugriff auf Felder der Einstellungs-Kachel nur innerhalb von [Workflows](/docs/workflows/workflows) möglich.  
In Formeln erfolgt der Zugriff über den technischen Namen `settings`, gefolgt von einem Punkt und dem technischen Namen der jeweiligen Einstellung.

Wenn im obigen Beispiel der Baustein den technischen Namen `api_key` hätte, kann in Workflows dann mit `settings.api_key` auf den API Key zugegriffen werden.

### <span style="color:#'">Einschränkungen</span>

Die **Einstellungs-Kachel** dient dazu, einfach auf globale Werte zuzugreifen.  
Aus technischer Sicht ist die Auswahl an Bausteinen daher eingeschränkt und auf maximal **20 Daten-Bausteine** begrenzt. Bausteine ohne Wert (z. B. _Überschrift_, _Abschnitt_ usw.) sind von dieser Einschränkung ausgenommen.
Außerdem kann es nur eine **Einstellungs-Kachel** pro Arbeitsbereich geben.
