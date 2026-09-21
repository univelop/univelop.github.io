---
layout: title
title: Geteilte Listen
parent: Kacheln
nav_order: 3
---

Mit geteilten Listen kann eine Liste samt ihrer Datensätze in mehreren Arbeitsbereichen genutzt werden. Alle greifen auf denselben Datenbestand zu: Ein Datensatz, der in einem Arbeitsbereich angelegt oder geändert wird, ist sofort in allen anderen sichtbar. Ein Abgleich per Im- und Export entfällt damit. Typische Anwendungsfälle sind Stammdaten wie Kunden, Artikel, Fahrzeuge oder Kostenstellen.

Eine geteilte Liste hat immer genau einen Besitzer-Arbeitsbereich, in dem sie angelegt wurde und die Freigabe gestartet wird. Alle weiteren Arbeitsbereiche sind Empfänger-Arbeitsbereiche. Dort werden beim Hinzufügen automatisch eine Kopie der Listenstruktur und eine Kachel vom Typ [Einfache Liste](/docs/tiles/basic-tile) angelegt.

{: .hint }
Geteilte Listen sind auf dem Homescreen am Teilen-Symbol in der Kachel zu erkennen. In der Mitgliederverwaltung werden sie in den Rollen mit dem Zusatz "(freigegeben)" markiert.

## Freigabe einrichten

Die Freigabe wird im Besitzer-Arbeitsbereich eingerichtet und erfordert Admin-Rechte.

1. Öffne die Liste im [Designmodus](/docs/designmode/record) und wechsle in die Erweiterten Einstellungen.
2. Aktiviere den Schalter Liste freigeben und bestätige mit dem Namen der Liste.
3. Klicke unter dem Schalter auf Arbeitsbereich hinzufügen und gib die ID des Ziel-Arbeitsbereichs ein. Du findest sie in dessen URL, zum Beispiel `app.univelop.de/#/ws/XEke8s3IMCkeQKTHX94V/...`.
4. Wiederhole Schritt 3 für alle weiteren Arbeitsbereiche.

Die Rollen des Empfänger-Arbeitsbereichs erhalten zunächst Standardrechte auf die Liste und sollten über die [Rollen](/docs/member-management/roles-rights) angepasst werden.

{: .hint }
Das Starten und Beenden der Freigabe verschiebt alle Datensätze. Währenddessen ist der Besitzer-Arbeitsbereich gesperrt, je nach Datenmenge einige Minuten. Führe diese Schritte daher zu einem Zeitpunkt durch, an dem der Arbeitsbereich wenig genutzt wird. Eine Liste kann nicht mit dem eigenen Arbeitsbereich und nicht mehrfach mit demselben Arbeitsbereich geteilt werden.

## Was in welchem Arbeitsbereich möglich ist

Im Alltag verhält sich eine geteilte Liste überall wie jede andere Liste: Datensätze lassen sich suchen, filtern, anlegen, bearbeiten und löschen. Unterschiede gibt es bei Struktur und Freigabe.

|                                    | Besitzer-Arbeitsbereich | Empfänger-Arbeitsbereich |
| :--------------------------------- | :---------------------: | :----------------------: |
| Datensätze lesen, anlegen, ändern  |           Ja            |            Ja            |
| Bausteine, Tabs, Labels bearbeiten |           Ja            |           Nein           |
| Freigabe verwalten                 |           Ja            |           Nein           |
| Volltextsuche und Auto-Bereinigung |           Ja            |           Nein           |
| Eigene Kachel, Filter, Sortierung  |           Ja            |            Ja            |
| Eigene Rollen und Berechtigungen   |           Ja            |            Ja            |
| Eigene Workflows auf der Liste     |           Ja            |            Ja            |

Strukturänderungen erfolgen nur im Besitzer-Arbeitsbereich und werden automatisch übertragen. Der Designmodus ist im Empfänger-Arbeitsbereich deshalb gesperrt, und die Liste kann dort nicht über den Design-Code-Import weitergegeben werden. Kacheln, Filter, Workflows sowie Rollen und Berechtigungen gehören dagegen zum jeweiligen Arbeitsbereich und wirken sich nicht auf die anderen aus.

## Freigabe beenden

Der Besitzer beendet die Freigabe für einen einzelnen Arbeitsbereich über das Papierkorb-Symbol daneben oder für alle gleichzeitig über den Schalter Liste freigeben. Ein Empfänger-Arbeitsbereich kann die Liste über die Kacheleinstellungen löschen. Die Datensätze bleiben dabei in allen übrigen Arbeitsbereichen erhalten.

## Voraussetzungen

Vor dem Start der Freigabe wird geprüft, ob die Liste diese Bedingungen erfüllt:

-   Sie enthält keine Regeln.
-   Sie enthält keinen der folgenden Bausteine, da diese auf Daten des jeweiligen Arbeitsbereichs angewiesen sind: Kommentare, Workflow-Button, Navigation, Benutzer, Freigabe, KI-Spracherkennung und KI-Bilderkennung.
-   Sie ist keiner Solution zugewiesen.
-   Im Designmodus liegen keine ungespeicherten Änderungen vor.

Nicht teilbare Bausteine werden beim Versuch, die Freigabe zu starten, namentlich aufgelistet. Regeln und diese Bausteine können auch nachträglich nicht ergänzt werden.
