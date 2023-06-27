---
layout: default
title: Scheduler
parent: Erweiterte Bausteine
grand_parent: Die Bausteine und deren Einstellungen
nav_order: 9
---

# <span style="color:#0b5394"><span class="material-icons">event_note</span> **Baustein *Scheduler***</span>

Mit dem Baustein *Scheduler* kann ein Wochenplan von Buchungen, welche mit einer Ressource verbunden sind, erstellt werden. Bspw. kann so Einsätze von Fahrzeugen oder Mitarbeitern geplant und übersichtlich dargestellt werden.

![1scheduler](\assets\record-spec-settings\1scheduler.png "1scheduler")

In der linken Spalte werden die verbundenen Ressourcen angezeigt, auf welche sich die Buchungen beziehen.
Die Ressourcen sowie die Buchungen selbst können individuell gefiltert und sortiert werden.
Drückt man auf das Icon in einer beliebigen Zelle, so wird eine Buchung für das Datum der Spalte und die Ressource der Zeile erstellt. Es öffnet sich ein Pop-Up vom Datensatz, um weitere Bausteine zu füllen. Dieses Pop-Up öffnet sich auch auf Klick einer Buchung.

![2scheduler](\assets\record-spec-settings\2scheduler.png "2scheduler")

1. <span style="color:#0b5394">**Nur 5-Tage Woche anzeigen**</span>  
    Bei bedarf kann die Woche auf Mo-Fr gekürzt werden. Standardweise wird Mo-So angezeigt.
2. <span style="color:#0b5394">**Ressource**</span>  
    Verbundener Datensatz, für den primär die Buchungen erstellt werden. Will man bspw. seine Mitarbeiter planen, sollte man hier die Kachel 'Mitarbeiter' wählen.
3. <span style="color:#0b5394">**Ressource Filter und Sortierung**</span>  
    Einschränken der angezeigten Ressourcen sowie die Anzeigereihenfolge im *Scheduler*.
4. <span style="color:#0b5394">**Buchungen**</span>
    Die Datensätze, die geplant werden sollen. Bspw. können dies die Einsätze oder Arbeitszeiten von Mitarbeitern sein.  
5. <span style="color:#0b5394">**Verknüpfung über**</span>    
    *Optionale Einstellung*, Baustein *Datensatz* um Buchungen einem Konkreten Datensatz, welcher den Scheduler beinhaltet, zuzuordnen. So kann bspw. ein Scheduler pro Projekt oder Baustelle genutzt werden, bei dem nur Buchungen angezeigt werden, die auch diesem Projekt zugehören.    
6. <span style="color:#0b5394">**Datumsbaustein**</span>    
    Baustein *Datum* bei den Buchungen. Davon abhängig wird die Buchung im Scheduler am entsprechenden Tag angezeigt.
7. <span style="color:#0b5394">**Ressourcenbaustein**</span>   
    Baustein *Datensatz* mit dem die entsprechende Ressource ausgewählt wird.
8. <span style="color:#0b5394">**Buchungen Filter und Sortierung**</span>   
    Einschränken der angezeigten Buchungen im *Scheduler*.
9. <span style="color:#0b5394">**Vorschau der Buchungen**</span>   
    Angezeigte Bausteine und deren Anordnung in der Vorschau der Buchungen im Scheduler.
    Gleicht der [Einstellung der Listenansicht](/docs/design-mode-settings.html#designmodus-liste). 