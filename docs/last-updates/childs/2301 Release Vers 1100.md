---
layout: default
title: Release Version 1.10.0
nav_order: 89
parent: Latest Updates
---

# <span style="color:#0b5394">**Release Version 1.10.0**</span>

Folgende Neuerungen und Verbesserungen wurden mit der Version 1.10.0 ausgerollt:


## <span style="color:#0b5394">**Login über Google und Microsoft**</span>

Um das Login zu vereinfachen ist es in der neuen Version möglich, sich über einen Microsoft- oder einen Google-Account einzuloggen. Für mehr Sicherheit kann dazu die 2-Faktor-Authentifizierung mit aktiviert werden.

![release login oauth](\assets\latest-updates\release login oauth.png "release login oauth")

## <span style="color:#0b5394">**Neue Formel und Textkonstanten**</span>  

Um noch mehr Möglichkeiten bei den Workflows und beim Filtern zu haben, gibt es [vier neue Textkonstanten](/docs/formulary/childs/symbol-operator.html#textkonstanten)
 (currentUserTeamId, currentUserRoleName etc.) für die ID und den Namen der zugewiesenen Rolle und des zugewiesenen Teams des aktuellen Nutzers sowie [eine neue Formel](/docs/formulary/childs/formula%20date.html#liste-mit-standard-datumsformeln) (now()), welche den aktuellen Moment als Wert liefert.

## <span style="color:#0b5394">**Baustein *Timer***</span>  

Um die Erfassung von Zeiten erneut zu vereinfachen, haben wir in der neuen Version den [Baustein *Timer*](/docs/record-spec-settings/grand-childs-form/timer.html) implementiert. Der Name verrät schon die Funktion des Bausteins, dieser Funktioniert wie ein typischer Timer auf dem Smartphone. Daraus wird automatisch der Start- und Endzeitpunkt der Tätigkeit ermittelt. Bei Bedarf können Pausen mit erfasst werden, in dem der Timer für die Pause pausiert wird.

![release timer](\assets\latest-updates\release timer.png "release timer")

## <span style="color:#0b5394">**Baustein *Laufende Nummer* automatisch setzen**</span>  

Mit der neuen Version kann für den [Baustein *Laufende Nummer*](/docs/record-spec-settings/grand-child-expanded/rolling-number.html) per Einstellung aktiviert werden, dass beim Hinzufügen eines neuen Eintrages die laufende Nummer direkt mit vergeben wird.

## <span style="color:#0b5394">**Rechteobjekt für Zugriff auf Workflows für Rollen**</span>  

Bisher war es nur Nutzern mit der aktiven Rolle “Admin” möglich, Workflows anzusehen, zu erstellen und zu bearbeiten. Für die neue Version haben wir für die Benutzerrollen ein neues Feld “Workflow-Rechte” implementiert. Hierüber kann für jede Rolle eingestellt werden, ob Nutzer mit dieser Rolle die Workflows ansehen, bearbeiten, oder nichts der Beiden können.

![release workflow rights](\assets\latest-updates\release workflow rights.png "release workflow rights")

## <span style="color:#0b5394">**Verbesserung der Nutzbarkeit**</span>  

In der neuen Version sind einige Verbesserungen der Nutzbarkeit vorhanden. Beispielsweise werden duplizierte Einträge nun automatisch geöffnet. Dazu wurde der Bereich der Mitgliederverwaltung verbessert, sodass alle Aktionen direkt verfügbar und ohne zu scrollen zu finden sind.

## <span style="color:#0b5394">**Hervorhebung von leeren Pflichtfeldern**</span>  

Wird ein Feld leer gelassen, obwohl es als Pflichfeld eingestellt ist, wird ein roter Text unter dem Feld eingeblendet, welcher darauf hinweist.

![release requiredField](\assets\latest-updates\release requiredField.png "release requiredField")

## <span style="color:#0b5394">**Verbesserung der Vorbelegung beim Baustein *Tabelle***</span>  

Für die Vorbelegung des [Baustein *Tabelle*](/docs/record-spec-settings/grand-child-expanded/table.html) sind mit dem Update bei den Filtern auch “=B”-Filter möglich.
So kann die Vorbelegung nur auf bspw. Fahrzeuge und Maschinen beschränkt werden, welche zum zuständigen Team gehören, oder nur Mitarbeiter, die einem Projekt zugeordnet sind.

### <span style="color:#0b5394">**Weitere Verbesserungen**</span>

- Veralteter Baustein *Formel* nicht mehr verfügbar
- Verbesserung des IN-Filters
- Verbesserung des [Baustein *Genehmigung*](/docs/record-spec-settings/grand-child-expanded/approval.html)
- Durchsetzung der Nutzerrechte verbessert
- [Excel-Import und -Export](/docs/import-export.html#mitglieder-und-nutzerrollen-mit-excel) von Rollen und Teams verbessert
- Verbesserung von Benachrichtigungen auf iOS und allgemein
- Diverse kleine Fehler behoben