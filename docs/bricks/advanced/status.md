---
layout: title
title: Status
parent: Erweiterte Bausteine
grand_parent: Bausteine
nav_order: 6
redirect_from:
    - /docs/record-spec-settings/grand-child-expanded/status.html
---

Mit dem Baustein _Status_ können sowohl einfache Zustandsstati vergeben, als auch ein kompletter Prozess im
Unternehmen dargestellt werden.

![status1](/old_assets/record-spec-settings/1status.png 'status1')

1. Über das Plus wird ein neuer Status erfasst

2. Per Mausklick auf den jeweiligen Status werden die Einstellungen aufgerufen.

3. Über den Mülleimer können einzelne Stati gelöscht und über das =-Zeichen die Positionen verändert werden. Das Löschen von Stati kann nur erfolgen wenn der Status in keinem Datensatz vorhanden ist.

4. Es besteht die Möglichkeit einen Standard-Status zu setzen. Beim Erfassen neuer Datensätze über das Plus wird dieser gesetzt.

5. Dieser Standard-Status wird beim Duplizieren immer nur dann gesetzt, wenn die Einstellung "Standard Status erzwingen" gesetzt wird.
   Diese Einstellung nimmt die Sperre aus dem kopierten Datensatz.
   Ebenso ist zu beachten, dass der Standard-Status bei Workflows ebenso gesetzt wird, selbst wenn im Workflowstep zum Erzeugen ein anderer Status genannt ist.
   Und der Standard Status wird beim Erzeugen über Filterkacheln ebenso gesetzt.

![status switch](/old_assets/record-spec-settings/status switch.png "status switch")

---

![status2](/old_assets/record-spec-settings/2status.png 'status2')

Folgende Status-Einstellungen (Punkt 2) sind möglich:

Pro Status kann ein individuelles Icon und eine Farbe gesetzt werden.

5. Ein zusätzliches Feature ist die Vergabe von Pflichtfeldern pro Status. Damit die Pflichtfelder angezeigt werden, müssen
   die betroffenen Bausteine vorab als Pflichtfeld markiert werden. Danach kann für jeden Status Pflichtfelder definiert werden.

6. Die _Datensatz sperren_ Funktion kann nun auch hier im Status gewählt werden. Beim Setzen des Status wird der Datensatz
   gesperrt und kann weder bearbeitet, noch gelöscht werden.

Eine Statusänderung erfolgt entweder per Klick auf den Status oder über verschiedene Bausteine _Status Button_.

Unter der _Datensatz sperren_ Funktion wird noch der technischer Name des Status angezeigt, welcher nicht änderbar ist. Dieser kann bspw. für _Formeln_ oder zum Filtern verwendet werden.
