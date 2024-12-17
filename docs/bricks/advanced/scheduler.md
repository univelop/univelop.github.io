---
layout: title
title: Terminplaner
parent: Erweiterte Bausteine
grand_parent: Bausteine
nav_order: 9
redirect_from:
    - /docs/record-spec-settings/grand-child-expanded/scheduler.html
---

Mit dem Baustein _Terminplaner_ kann ein Wochenplan von Buchungen, welche mit einer Ressource verbunden sind, erstellt werden.
Bspw. können so Einsätze von Fahrzeugen oder Mitarbeitern geplant und übersichtlich dargestellt werden, oder aber auch Verfügbarkeiten
von Transportfahrzeugen oder Arbeitsgeräten.

![1scheduler](\assets\record-spec-settings\1scheduler.png '1scheduler')

In der linken Spalte (Zeilen) werden die verbundenen Ressourcen angezeigt, auf welche sich die Buchungen beziehen.
Die Ressourcen, sowie die Buchungen selbst, können individuell gefiltert und sortiert werden.
Drückt man auf das + Icon in einer beliebigen Zelle, so wird eine Buchung für das Datum der Spalte und die Ressource der Zeile erstellt.
Es öffnet sich die Schnellerfassung des Datensatzes, welche man bereits aus der _Datensatz-Liste_ kennt.

Konkret:
Für den Terminplaner Baustein wird eine Liste benötigt, in der Buchungen vorgenommen werden können. Zum Beispiel Arbeitsberichte.
Diese Liste muss einen Datensatz Baustein zu der Ressourcen enthalten, sowie im Idealfall noch ein Datumsbaustein (Es kann auch das Erstelldatum genommen werden).
Eine Verknüpfung über ist nicht notwendig, kann aber mittels Datensatz Baustein gesetzt werden.

Unsere Empfehlung:
Benutzen Sie für den Terminplaner Baustein eine übergeordnete Liste, bei der die Einstellung _Bei einzelnem Datensatz direkt zum Datensatz springen_ aktiviert ist.
Das sorgt dafür, dass der Kalender über den ganzen Bildschirm angezeigt wird, ohne die Listenansicht auf der linken Seite.

---

## <span style="color:#0b5394"><span class="material-icons">event_note</span> **Einstellungen\***</span>

![2scheduler](\assets\record-spec-settings\2scheduler.png '2scheduler')

1. <span style="color:#0b5394">**Nur 5-Tage Woche anzeigen**</span>  
   Bei bedarf kann die Woche auf Mo-Fr gekürzt werden. Standardweise wird Mo-So angezeigt.
2. <span style="color:#0b5394">**Ressource**</span>  
   Verbundener Datensatz, für den primär die Buchungen erstellt werden. Will man bspw. seine Mitarbeiter planen, sollte man hier die Kachel 'Mitarbeiter' wählen.
3. <span style="color:#0b5394">**Ressource Filter und Sortierung**</span>  
   Einschränken der angezeigten Ressourcen sowie die Anzeige-Reihenfolge im _Terminplaner_.
4. <span style="color:#0b5394">**Buchungen**</span>
   Die Datensätze, die geplant werden sollen. Bspw. können dies die Einsätze oder Arbeitszeiten von Mitarbeitern sein.
5. <span style="color:#0b5394">**Verknüpfung über**</span>  
   _Optionale Einstellung_, Baustein _Datensatz_ um Buchungen einem Konkreten Datensatz, welcher den Terminplaner beinhaltet, zuzuordnen. So kann bspw. ein Terminplaner pro Projekt oder Baustelle genutzt werden, bei dem nur Buchungen angezeigt werden, die auch diesem Projekt zugehören.
6. <span style="color:#0b5394">**Datumsbaustein**</span>  
   Baustein _Datum_ bei den Buchungen. Davon abhängig wird die Buchung im Terminplaner am entsprechenden Tag angezeigt.
7. <span style="color:#0b5394">**Ressourcenbaustein**</span>  
   Baustein _Datensatz_ mit dem die entsprechende Ressource ausgewählt wird.
8. <span style="color:#0b5394">**Buchungen Filter und Sortierung**</span>  
   Einschränken der angezeigten Buchungen im _Terminplaner_.
9. <span style="color:#0b5394">**Vorschau der Buchungen**</span>  
   Angezeigte Bausteine und deren Anordnung in der Vorschau der Buchungen im Terminplaner. Diese weicht von der Listenansicht ab.
   Die Einstellung wird wie in der Einstellung der Listenansicht vorgenommen.
