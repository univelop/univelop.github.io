---
layout: default
title: Verknüpfen von Listen anhand des Tutorials "Mitarbeiterliste"
parent: Tutorials
nav_order: 3
---

# <span style="color:#0b5394">Verknüpfen von Listen anhand des Tutorials "Mitarbeiterliste"</span>

Das
[Verknüpfen von Listen](/docs/link-lists.html "Verknüpfen von Listen")
bedeutet, dass zwei Kacheln untereinander genutzt werden. Als Beispiel kann eine Kachel mit dem Namen
"Zeiterfassung" angelegt werden. Öffnet man die Kachel und klickt anschließend auf das kleine + zum
Erstellen eines neuen Datensatzes. Wieder werden die zwei Standard-
[Bausteine *Textfeld*](/docs/record-spec-settings.html#textfeld)
mit den den Namen "Bezeichnung" und "Beschreibung" angezeigt. Folgende Bausteine können/sollten hinzugefügt werden:

| Baustein                                  | Verwendung
|:------:                                   |:------:
| [Baustein *Datensatz*](/docs/record-spec-settings.html#datensatz)                      | Auswahl des Mitarbeiters (Verknüpfung zu Kachel "Mitarbeiter" hinterlegen
| [Baustein *Datum*](/docs/record-spec-settings.html#datum)                          | Auswahl Arbeitstag
| [Baustein *Zeitspanne*](/docs/record-spec-settings.html#zeitspanne)                     | Angabe Uhrzeit von / Uhrzeit bis (optional mit Pause)
| [Baustein *Textfeld*](/docs/record-spec-settings.html#textfeld)                       | Angabe von Beschreibung, Bemerkungen, o. ä.

In der Kachel "Zeiterfassung* können nun die Mitarbeiter ihre Arbeitszeiten erfassen. Darüber hinaus kann die erfasste
Arbeitszeit in der Kachel "Mitarbeiter" im jeweiligen Mitarbeiter aufgelistet werden.

In der Kachel "Mitarbeiter" wird der
[Baustein *Datensatz Liste*](/docs/record-spec-settings.html#datensatz-liste)
mit den Namen "Arbeitszeiten" hinzugefügt. In den Einstellung des
[Bausteins *Datensatz Liste*](/docs/record-spec-settings.html#datensatz-liste)
wird der Baustein unter "Verknüpfung mit" mit der Kachel "Zeiterfassung" verbunden. Zusätzlich soll die "Verknüpfung
über" den Baustein "Mitarbeiter" zwecks eindeutiger Zuordnung heranziehen. Das bedeutet es wird der Baustein mit der
Zeiterfassung über den aktuell aufgerufenen Datensatz (Mitarbeiter) verknüpft, also die Zeiten pro Mitarbeiter.
In den Einstellung des
[Bausteins *Datensatz Liste*](/docs/record-spec-settings.html#datensatz-liste)
sollte nun "Summe statt Anzahl anzeigen" ausegwählt und zusätzlich "Summe über Arbeitszeit" ausgewählt werden. Das
Summen Suffix könnte Std. benannt werden. Anhand dieser Einstellungen werden nun alle Arbeitszeiten pro Mitarbeiter
in der Mitarbeiterliste angezeigt.

Zusätzlich können die Arbeitszeiten der Mitarbeiter fest oder dynamisch gefiltert werden.Ein fester Filter wäre z.B.
Datum >= Anfang des Monats und <= Ende des Monats (mit festen Datumsangaben). Zur Verwendung von dynamischen Filtermöglichkeiten
können auch Datumsformeln hinterlegt werden (s.
[Formelsammlung // Darstellung von dynamischen Zeitspannen mit Formelberechnungen](/docs/formulary.html#darstellungen-von-dynamischen-zeitspannen-mit-formelberechnungen "Formelsammlung // Darstellung von dynamischen Zeitspannen mit Formelberechnungen")
).

**Beispielergebnis:**  
![example time tracking](\assets\tutorials\example time tracking.png "example time tracking")

**Beispielergebnis Kachel *Zeiterfassung:***
![example time tracking](\assets\tutorials\example time tracking2.png "example time tracking")

**Beispielergebnis Kachel *Mitarbeiter* mit Baustein *Datensatz Liste*:**
![example time tracking](\assets\tutorials\example time tracking3.png "example time tracking")