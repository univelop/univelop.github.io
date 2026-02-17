---
layout: title
title: Adresse
parent: Formular-Bausteine
grand_parent: Bausteine
nav_order: 15
redirect_from:
    - /docs/record-spec-settings/grand-childs-form/address.html
---

Mit dem Baustein _Adresse_ können strukturierte Adressen mit Straße, Hausnummer, PLZ, Ort und optional Land erfasst werden. Über das Karten-Symbol kann die erfasste Adresse direkt in der Karten-App (z. B. Google Maps) geöffnet werden.

## Einstellungen

Allgemeine Einstellungen wie Sichtbarkeit und Berechtigungen werden unter [Allgemeine Baustein-Einstellungen](/docs/bricks/common-settings) beschrieben.

1. **Inklusive Land** — Blendet ein zusätzliches Feld für den Ländernamen ein.
2. **Hausnummer anzeigen** — Blendet das Feld für die Hausnummer ein oder aus. Standard: aktiviert.
3. **Adresse übernehmen** — Ermöglicht die automatische Übernahme einer Adresse aus einem anderen Adress-Baustein im selben Eintrag.
4. **Quell-Baustein** — Der Adress-Baustein, aus dem die Adresse übernommen wird. Nur verfügbar wenn _Adresse übernehmen_ aktiviert ist.
5. **"Aktueller Standort"-Button zeigen** — Zeigt einen Button, mit dem auf iOS- und Android-Geräten automatisch der aktuelle Standort als Adresse eingetragen werden kann.

## Hinweise

- Die einzelnen Adressfelder (Straße, Hausnummer, PLZ, Ort, Land) stehen als separate Werte in Formeln und Workflows zur Verfügung.
- Für die Nutzung des „Aktueller Standort"-Buttons muss der Gerätestandort aktiviert und die Standortberechtigung für Univelop erteilt sein. Die Genauigkeit kann je nach Netzwerkverbindung variieren.
- Die Adresse kann nur über das Karten-Symbol geöffnet werden, wenn mindestens ein Feld ausgefüllt ist.

## Verwandte Bausteine

- [GPS Position](/docs/bricks/input/geo-location) — Für exakte GPS-Koordinaten statt strukturierter Adressen
