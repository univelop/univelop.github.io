---
layout: title
title: GPS Position
parent: Formular-Bausteine
grand_parent: Bausteine
nav_order: 17
redirect_from:
    - /docs/record-spec-settings/grand-childs-form/geo-location.html
---

Der Baustein _GPS Position_ ermöglicht die Erfassung der genauen Position (Breitengrad, Längengrad) von iOS und Android Geräten.

Der Baustein speichert den erfassten Breiten- und Längengrad, die Genauigkeit der Werte in Metern sowie die erkannte Adresse.
Der Wert des Bausteines kann, wie auch bei dem Baustein Adresse, über das Karten-Icon in der lokal installierten Karten-App geöffnet werden. So kann eine erfasste Position direkt in Google Maps angesehen werden.

Um die aktuelle Position erfassen zu können, muss auf den jeweiligen iOS und Android Geräten der Gerätestandort aktiviert sein und der Univelop App müssen in den Geräteeinstellungen die Berechtigungen auf den Gerätestandort erteilt werden.

![GPS Position](/old_assets/record-spec-settings/geo-location-brick.png 'GPS Position')

Wird auf einem iOS oder Android Gerät der "Aktueller Standort"-Button gedrückt, öffnet sich ein Dialogfenster welcher die Genauigkeit der aktuell erkannten Position zeigt.
Hier können verschiedene Faktoren, wie unter anderem eine aktive WLAN-Verbindung, zu besseren Ergebnissen beitragen.
Um den aktuellen Standort zu erfassen und die Adresse zu laden, muss dies über den "OK"-Button im Dialogfenster bestätigt werden.

## <span style="color:#0b5394">Einstellungen</span>

Der Baustein bietet die folgenden Einstellungsmöglichkeiten:

-   <span style="color:#0b5394">**Art der Darstellung**</span>

    Mit der Einstellung _Art der Darstellung_ kann die Visualisierung des Breiten- und Längengrades geändert werden.
    Zur Auswahl stehen "DG (Dezimalgrad)" (Beispiel: 48.858844) sowie "GMS (Grad, Minute, Sekunde)" (Beispiel: 48° 51' 31.84" N)

    Die Einstellung ist rein visuell. Der Zugriff auf die Werte aus beispielsweise Workflows erfolgt immer im Dezimalformat.
