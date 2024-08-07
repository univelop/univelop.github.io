---
layout: default
title: Verknüpfen von Listen anhand des Tutorials "Mitarbeiterliste"
parent: Tutorials
nav_order: 3
---

# <span style="color:#0b5394">**Verknüpfen von Listen anhand des Tutorials "Mitarbeiterliste"**</span>

Das
[Verknüpfen von Listen](/docs/link-lists.html 'Verknüpfen von Listen')
bedeutet, dass zwei Kacheln untereinander genutzt werden. Als Beispiel kann eine Kachel mit dem Namen
"Zeiterfassung" angelegt werden. Öffnet man die Kachel und klickt anschließend auf das kleine + zum
Erstellen eines neuen Datensatzes. Wieder werden die zwei Standard-
[Bausteine _Textfeld_](/docs/record-spec-settings/grand-childs-form/text.html)
mit den den Namen "Bezeichnung" und "Beschreibung" angezeigt. Folgende Bausteine können/sollten hinzugefügt werden:

|                                      Baustein                                       |                                Verwendung                                 |
| :---------------------------------------------------------------------------------: | :-----------------------------------------------------------------------: |
| [Baustein _Datensatz_](/docs/record-spec-settings/grand-child-expanded/record.html) | Auswahl des Mitarbeiters (Verknüpfung zu Kachel "Mitarbeiter" hinterlegen |
|     [Baustein _Datum_](/docs/record-spec-settings/grand-childs-form/date.html)      |                            Auswahl Arbeitstag                             |
| [Baustein _Zeitspanne_](/docs/record-spec-settings/grand-childs-form/interval.html) |           Angabe Uhrzeit von / Uhrzeit bis (optional mit Pause)           |
|    [Baustein _Textfeld_](/docs/record-spec-settings/grand-childs-form/text.html)    |                Angabe von Beschreibung, Bemerkungen, o. ä.                |

In der Kachel "Zeiterfassung\* können nun die Mitarbeiter ihre Arbeitszeiten erfassen. Darüber hinaus kann die erfasste
Arbeitszeit in der Kachel "Mitarbeiter" im jeweiligen Mitarbeiter aufgelistet werden.

In der Kachel "Mitarbeiter" wird der
[Baustein _Datensatz Liste_](/docs/record-spec-settings/grand-child-expanded/record-list.html)
mit den Namen "Arbeitszeiten" hinzugefügt. In den Einstellung des
[Bausteins _Datensatz Liste_](/docs/record-spec-settings/grand-child-expanded/record-list.html)
wird der Baustein unter "Verknüpfung mit" mit der Kachel "Zeiterfassung" verbunden. Zusätzlich soll die "Verknüpfung
über" den Baustein "Mitarbeiter" zwecks eindeutiger Zuordnung heranziehen. Das bedeutet es wird der Baustein mit der
Zeiterfassung über den aktuell aufgerufenen Datensatz (Mitarbeiter) verknüpft, also die Zeiten pro Mitarbeiter.
In den Einstellung des
[Bausteins _Datensatz Liste_](/docs/record-spec-settings/grand-child-expanded/record-list.html)
sollte nun "Summe statt Anzahl anzeigen" ausgewählt und zusätzlich "Summe über Arbeitszeit" ausgewählt werden. Das
Summen Suffix könnte Std. benannt werden. Anhand dieser Einstellungen werden nun alle Arbeitszeiten pro Mitarbeiter
in der Mitarbeiterliste angezeigt.

Zusätzlich können die Arbeitszeiten der Mitarbeiter fest oder dynamisch gefiltert werden.Ein fester Filter wäre z.B.
Datum >= Anfang des Monats und <= Ende des Monats (mit festen Datumsangaben). Zur Verwendung von dynamischen Filtermöglichkeiten
können auch Datumsformeln hinterlegt werden (s.
[Formelsammlung // Darstellung von dynamischen Zeitspannen mit Formelberechnungen](/docs/formulary/childs/formula%20date.html#darstellungen-von-dynamischen-zeitspannen-mit-formelberechnungen 'Formelsammlung // Darstellung von dynamischen Zeitspannen mit Formelberechnungen')
).

**Beispielergebnis:**  
![example time tracking](\assets\tutorials\example time tracking.png "example time tracking")

**Beispielergebnis Kachel _Zeiterfassung:_**
![example time tracking](\assets\tutorials\example time tracking2.png "example time tracking")

**Beispielergebnis Kachel _Mitarbeiter_ mit Baustein _Datensatz Liste_:**
![example time tracking](\assets\tutorials\example time tracking3.png "example time tracking")
