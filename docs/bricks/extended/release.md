---
layout: title
title: Datensatz sperren
parent: Erweiterte Bausteine
grand_parent: Bausteine
nav_order: 4
---

Der _Datensatz sperren_ Baustein erlaubt es Datensätze unveränderbar zu sichern. Der Baustein wird als
Button angezeigt und kann zusätzlich funktionell im Status mit verwendet werden. Zudem ist es möglich
mit diesem Baustein eine Pflichtfeldprüfung durchzuführen.

Zum grundsätzlichen Aufbau:

![lock](\assets\record-spec-settings\1lock.png 'lock')

1. <span style="color:#0b5394">**Der Sperren-Button**</span>  
   dieser wird bei nicht freigegebenen Datensätzen farblich gekennzeichnet angezeigt.
2. <span style="color:#0b5394">**Zeitstempel für gesperrte Datensätze**</span>  
   Bei gesperrten Datensätzen erfolgt eine Beschreibung der Sperrung (Nutzer / Datum).
3. <span style="color:#0b5394">**Entsperren eines gesperrten Datensatzes**</span>  
   Wurde der Datensatz gesperrt kann dieser über "Entsperren" wieder freigegeben werden
   (anders als beim Sperren über Status)
4. <span style="color:#0b5394">**Eine Verknüpfung mit dem**</span>
   [Baustein _Status_](/docs/record-spec-settings/grand-child-expanded/status.html)
   <span style="color:#0b5394">**ist möglich**</span>
   Die Verknüpfung wird gesetzt, indem in dem entsprechenden Status der Schalter auf _Datensatz sperren_ = Ja gesetzt wird.
5. <span style="color:#0b5394">**Sämtliche Pflichtfelder (Prüfung bei _Datensatz sperren_) müssen einzeln angehakt werden**</span>
   In jedem Baustein, welcher ein Pflichtfeld werden soll, muss der Schalter Pflichtfeld = Ja gesetzt werden.
   Im Anschluss wird das Pflichtfeld im Moment der Datensatzsperre geprüft.

Zudem sind gesperrte Datensätze an dem kleinen Schloss am oberen rechten Bildschirmrand zu erkennen.
Wird ein Datensatz über den Status gesperrt und es ist kein Sperr-Baustein verbaut, kann der Datensatz nur über das Schloss entsperrt werden.
Gesperrte Datensätze können nicht gelöscht werden.

![lock2](\assets\record-spec-settings\2lock.png 'lock2') ![lock3](\assets\record-spec-settings\3lock.png 'lock3')

**Zusammenfassung:**

1. Über den Baustein _Datensatz sperren_ ist eine Pflichtfeldprüfung möglich. Hierzu muss in den Einstellungen des
   Bausteins unter "Validierung" der Switch _Pflichtfeld_ gesetzt werden. Sobald ein Baustein als _Pflichtfeld_
   gekennzeichnet wird, erhält dieser das altbekannte Sternchen um auf eine Pflichteingabe hinzuweisen. Wird ein
   Baustein als Pflichtfeld markiert und dieses versteckt, wird die Pflichtfeldprüfung automatisch ausgesetzt. Ist nur
   ein Baustein _Datensatz sperren_ eingebaut und kein
   [Baustein _Status_](/docs/record-spec-settings/grand-child-expanded/status.html),
   werden diese Bausteine grundsätzlich auf Inhalte geprüft, wenn die Sperrung betätigt wird.
2. Das Bearbeiten und Löschen von gesperrten Datensätzen ist nicht möglich. Die Datensätze, sowie verknüpfte Datensätze
   müssen entsperrt werden (Mutter- & Tochter-Datensätze über
   [Baustein _Datensatz Liste_](/docs/record-spec-settings/grand-child-expanded/record-list.html))
3. Wer Datensätze sperren und entsperren darf wird in den
   [Rollen und Rechten](/docs/global-settings-and-functions.html#rechte--berechtigungen)
   festgelegt.

![lock4](\assets\record-spec-settings\4lock.png 'lock4')
