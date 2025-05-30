---
layout: title
title: Release Version 1.2.0
nav_order: 97
parent: Changelog
---

Folgende Neuerungen und Verbesserungen wurden mit der Version 1.2.0 ausgerollt:

## <span style="color:#0b5394">**Neuer Baustein _Kalender_**</span>

Für eine bessere Übersicht und Zuordnung von Datensätzen mit Datumsbezug wurde der Baustein _Kalender_ entwickelt. Sollen die Mitarbeiter einen kompakten Überblick über ihre Arbeitszeiten erhalten oder Terminaufgaben strukturiert angezeigt werden, kann der neue Baustein _Kalender_ mit den entsprechenden Kacheln verknüpft werden. Je nach Anforderung kann der Baustein _Kalender_ hinsichtlich der Ansicht eingestellt werden (Monats- oder Wochenansicht, Anzeige von Summen je Tag, Vorschau der Datensätze, etc.).

![release calender](\old_assets\latest-updates\release calender.png "release calender")

## <span style="color:#0b5394">**Neuer Baustein _Änderungsprotokoll_**</span>

Ab sofort können Änderungen an einem Datensatz protokolliert werden. Der neue Baustein _Änderungsprotokoll_ prüft dabei jegliche Änderungen und zeichnet diese entsprechend auf. Dabei gibt das Änderungsprotokoll folgende Änderungen aus:

-   Benutzer
-   Datum der Änderung
-   betreffender Baustein
-   alter/neuer Wert

In der Vorschau des Bausteins werden nur die neusten Veränderungen angezeigt. Um alle Änderungen anzuzeigen kann mit einem Mausklick auf den Baustein die Ansicht gewechselt werden.

Wird der Stammdatensatz in anderen Kacheln über den Baustein “Datensatz” verwendet und Daten in dort vorhandenen Bausteinen übernommen und synchron gehalten, werden die Änderungen aus dem Stammdatensatz an die Unterdatensätze bekanntlich weitergegeben. Diese Änderungen werden ebenfalls durch den Baustein _Änderungsprotokoll_ im Stammdatensatz aufgezeichnet.

![release change-log](\old_assets\latest-updates\release change-log.png "release change-log")

## <span style="color:#0b5394">**Neuer Kachelmodus _Website_**</span>

Univelop bietet ab sofort, neben den bereits bekannten Kacheln “Einfache Liste” und “Gefilterte Liste”, die Kachel _Website_. Über diese Kachel können Websites eingebettet werden, die man in der alltäglichen Arbeit mit Univelop benötigt, ohne einen zusätzlichen Browser öffnen zu müssen. Müssen zum Beispiel Daten von einer bestimmten Website regelmäßig eingesehen werden, oder sind Tools im Einsatz, die über eine Website genutzt werden, kann die URL in dieser neuen Kachel direkt eingebettet werden. Dazu wird die benötigte URL in den Kacheleinstellungen unter “URL” eingesetzt. Klickt man anschließend auf die Kachel, wird die hinterlegte Website innerhalb der Kachel aufgerufen.

![release tile website](\old_assets\latest-updates\release tile website.png "release tile website")

## <span style="color:#0b5394">**Pushbenachrichtigungen bei Änderungen und Neueinträgen**</span>

Pushbenachrichtigungen sind ein gutes Mittel, wenn es darum geht, Benutzer auf Änderungen bzw. Neueinträgen hinzuweisen. Wir haben die Pushbenachrichtigungen schon in Univelop implementiert. Im Laufe diesen Monats wird sie auf die Betriebssysteme Android und iOS ausgerollt.

![release push notification](\old_assets\latest-updates\release push notification.png "release push notification")

## <span style="color:#0b5394">**Zuordnung von Rollen und Teams in der Mitgliederverwaltung**</span>

Altbekannterweise konnten Rollen und Teams über das Zahnrad gewechselt werden. Unter Umständen ist es jedoch notwendig, dass einige Benutzer vertretungsweise andere Aufgaben in Kacheln ausführen sollen, die für ihre Rolle ausgeblendet sind. Die Mitgliederverwaltung wurde dahingehend erweitert, dass einzelnen Mitgliedern ab sofort mehrere Rollen und Teams zugeordnet werden können. Besitzt ein Benutzer mehr als eine Rolle/Team hat er die Möglichkeit, die Rolle bzw. das Team im Hauptscreen über den Button “drei Punkte” zu wechseln und erhält anschließend die zugeordnete Kachelansicht s. Benutzern mehrere Rollen und/oder Teams zuordnen).

### <span style="color:#0b5394">**Weitere Verbesserungen**</span>

-   Definierte Pflichtfelder werden ab sofort mit einem Sternchen gekennzeichnet
-   Werden neue Rollen in einer Arbeitsumgebung angelegt, erhalten Benutzer mit der Rolle “Administrator” bzw. “Besitzer” automatisch die neue Rolle zugeteilt
-   Administratoren können Kacheln anderer Benutzer einsehen und bearbeiten inkl. Namensbezug
-   IN-Filter (Oder-Auswahl) wurde optimiert
-   Darstellung von Univelop auf großen Bildschirmen wurde verbessert
-   Prüfung versteckter Bausteine bei Nutzung des Bausteins _Datensatz sperren_ wurde optimiert
-   Unterschriften können im Offline-Modus eingeholt werden
-   Einzelne User können sich globale Kacheln ausblenden lassen
-   Weitere Performanceverbesserungen
