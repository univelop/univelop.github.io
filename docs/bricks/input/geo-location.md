---
layout: title
title: GPS Position
parent: Formular-Bausteine
grand_parent: Bausteine
nav_order: 17
redirect_from:
    - /docs/record-spec-settings/grand-childs-form/geo-location.html
---

Der Baustein _GPS Position_ ermöglicht die Erfassung der exakten GPS-Koordinaten (Breitengrad, Längengrad) von iOS- und Android-Geräten. Zusätzlich werden die Genauigkeit in Metern und die erkannte Adresse gespeichert. Über das Karten-Symbol kann die erfasste Position direkt in der Karten-App geöffnet werden.

## Einstellungen

Allgemeine Einstellungen wie Sichtbarkeit und Berechtigungen werden unter [Allgemeine Baustein-Einstellungen](/docs/bricks/common-settings) beschrieben.

1. **Art der Darstellung** — Format der Koordinatenanzeige:
   - _Dezimalgrad (DG)_ — z. B. 48.858844 (Standard)
   - _Grad, Minute, Sekunde (GMS)_ — z. B. 48° 51' 31.84" N
2. **Manuelle Eingabe erlauben** — Ermöglicht die manuelle Eingabe von Koordinaten zusätzlich zur GPS-Erfassung.
3. **Adresse anzeigen** — Lädt und zeigt automatisch die nächstgelegene Adresse zur erfassten Position an. Standard: aktiviert.

## Hinweise

- Die Darstellungseinstellung ist rein visuell. In Formeln und Workflows werden die Koordinaten immer im Dezimalformat bereitgestellt.
- Neben den Koordinaten stehen auch die einzelnen Adressfelder (Straße, Hausnummer, PLZ, Ort, Land), Breitengrad, Längengrad und Genauigkeit als separate Werte zur Verfügung.
- Für die GPS-Erfassung muss der Gerätestandort aktiviert und die Standortberechtigung für Univelop erteilt sein. Eine aktive WLAN-Verbindung kann die Genauigkeit verbessern.

## Verwandte Bausteine

- [Adresse](/docs/bricks/input/address) — Für strukturierte Adresseingabe ohne GPS-Koordinaten
