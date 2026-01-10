---
layout: workflow-step
title: Finde ersten Eintrag
parent: Einträge laden
grand_parent: Workflows
icon: manage_search
nav_order: 4
redirect_from:
    - /docs/workflows/grand-childs-bricks/get-first-record.html
    - /docs/workflows/load-records/first-record.html
---

Mit dem Baustein _Finde ersten Eintrag_ wird der erste Eintrag einer Kachel ausgewählt.
Der "Erste" ist dabei zufällig und ohne Filter nicht definierbar, sondern der Erste der durch das System gefunden wird.

Es können Filter als Einstellung des Bausteins hinzugefügt werden, um die möglichen Einträge einzuschränken.
Auch mit Filter, zu denen es mehrere passende Einträge gibt, ist es zufällig welcher Eintrag durch das System gewählt wird.

Nur mit gesetzter Sortierung ist der erste Eintrag konsistent und nicht zufällig.

Über die Einstellung _Modus_ kann angepasst werden, wie sich der Baustein verhält, wenn kein passender Eintrag gefunden wird. Dabei stehen die folgenden Optionen zur Auswahl:

1. <span style="color:#0b5394">**Fehler anzeigen und Workflow abbrechen**</span>  
   Dies ist die Standardoption des Bausteines. Gibt es keinen passenden Eintrag, wird der komplette Workflow an dieser Stelle mit einem Fehler abgebrochen.
2. <span style="color:#0b5394">**Erstellen**</span>  
   Bei dieser Option wird ein neuer Eintrag erstellt, wenn es keinen passenden gibt. Wie auch beim manuellen Filtern und Erstellen von Einträgen in Listen, werden hier alle Werte aus den gegebenen Filtern direkt in den neuen Eintrag geschrieben.
3. <span style="color:#0b5394">**Ignorieren (null zurückgeben)**</span>  
   Diese Option erlaubt den Fall, dass kein passender Eintrag existiert. Nachfolgende Workflow Bausteine haben so mehr Kontrolle gezielt mit dem Szenario umzugehen, dass kein Eintrag existiert.

    Dies kann zum Beispiel so aussehen:
    `ifElse(mitglieder_eintrag != null,mitglieder_eintrag.title,'Kein Eintrag gefunden.')`  
     Wird diese Formel in einem [_Zeige Nachricht_](../user-interaction/message.md) Baustein genutzt, kann so abhängig davon, ob ein Eintrag gefunden wurde, der Titel oder ein generischer Platzhalter angezeigt werden.
    Wird kein Eintrag gefunden, kann auch nicht auf Werte des Eintrages zugegriffen werden. Würde der [_Zeige Nachricht_](../user-interaction/message.md) Baustein also einfach nur `mitglieder_eintrag.title` als Formel haben, so würde der Workflow mit einem Fehler abbrechen, wenn zuvor kein Eintrag gefunden wurde.

    Generell ist es also Sinnvoll, nachfolgend vermehrt mit der Formel `ifElse` oder den Bausteinen [_Laufe weiter, wenn_](../structure/continue-if.md) und [_Wähle Pfade_](../structure/switch.md) zu arbeiten.
