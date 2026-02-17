---
layout: title
title: Datensatz sperren
parent: Erweiterte Bausteine
grand_parent: Bausteine
nav_order: 4
redirect_from:
    - /docs/record-spec-settings/grand-child-expanded/lock.html
---

Der Baustein _Datensatz sperren_ ermöglicht es, Datensätze unveränderbar zu sichern. Er wird als Button angezeigt und kann zusätzlich mit dem Baustein _Status_ verknüpft werden, um Datensätze statusabhängig zu sperren.

## Einstellungen

Allgemeine Einstellungen wie Sichtbarkeit und Berechtigungen werden unter [Allgemeine Baustein-Einstellungen](/docs/bricks/common-settings) beschrieben.

Der Baustein hat keine zusätzlichen bausteinspezifischen Einstellungen. Die Sperrfunktion wird über den Button selbst oder über die _Datensatz sperren_-Option im Baustein _Status_ gesteuert.

## Funktionsweise

### Sperren und Entsperren

- Bei nicht gesperrten Datensätzen wird der Sperren-Button farblich hervorgehoben angezeigt.
- Nach dem Sperren wird ein Zeitstempel mit Benutzer und Datum der Sperrung angezeigt.
- Über den Button „Entsperren" kann ein gesperrter Datensatz wieder freigegeben werden (anders als beim Sperren über den _Status_-Baustein, wo nur über das Schloss-Symbol entsperrt werden kann).
- Gesperrte Datensätze sind am Schloss-Symbol am oberen rechten Bildschirmrand erkennbar.

### Pflichtfeldprüfung

Der Baustein löst beim Sperren eine Pflichtfeldprüfung aus. Dazu muss in den Einstellungen der gewünschten Bausteine der Schalter _Pflichtfeld_ aktiviert sein. Nur Bausteine, die als Pflichtfeld markiert und gleichzeitig sichtbar sind, werden geprüft — versteckte Pflichtfelder werden automatisch ausgesetzt.

### Verknüpfung mit Status

In den Einstellungen eines _Status_-Bausteins kann pro Status die Option _Datensatz sperren_ aktiviert werden. Beim Setzen dieses Status wird der Datensatz automatisch gesperrt. Ist kein _Datensatz sperren_-Baustein verbaut, kann der Datensatz nur über das Schloss-Symbol entsperrt werden.

## Hinweise

- Gesperrte Datensätze können weder bearbeitet noch gelöscht werden. Auch verknüpfte Datensätze (Mutter- und Tochter-Datensätze über _Datensatz Liste_) müssen separat entsperrt werden.
- Wer Datensätze sperren und entsperren darf, wird in den [Rollen und Rechten](/docs/member-management/roles-rights) festgelegt.
- Ist nur ein _Datensatz sperren_-Baustein verbaut und kein _Status_-Baustein, werden alle Pflichtfelder grundsätzlich bei der Sperrung geprüft.

## Verwandte Bausteine

- [Status](/docs/bricks/advanced/status) — Für statusabhängiges Sperren
- [Genehmigung](/docs/bricks/advanced/approval) — Für Genehmigungsprozesse mit optionaler Datensatzsperre
