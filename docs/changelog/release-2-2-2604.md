---
layout: title
title: Release Version 2.2.0
nav_order: 52
parent: Changelog
---

## <span style="color:#0b5394">**Bausteine**</span>

### <span style="color:#0b5394">**Interaktiver Schalter in der Listenansicht**</span>

Mit dem Schalterbaustein können Werte ab sofort direkt in der Listenansicht umgeschalten werden, ohne den Datensatz öffnen zu müssen.
![toggle directly in list](/assets/changelog/2-2/toggle-in-list.png)

### <span style="color:#0b5394">**Statusbaustein: Bestätigung beim Umbenennen von Optionen**</span>

Beim Umbenennen einer Statusoption erscheint ab sofort ein Bestätigungsdialog, der auf mögliche Auswirkungen auf bestehende Datensätze hinweist. So lassen sich unbeabsichtigte Änderungen vermeiden.

![confirm technical name](/assets/changelog/2-2/confirm-technical-name.png)

## <span style="color:#0b5394">**Workflows**</span>

### <span style="color:#0b5394">**Ausführungsprotokoll direkt aus der Workflow-Bearbeitung öffnen**</span>

Ausführungsprotokolle lassen sich nun direkt aus dem Bearbeitungsbildschirm eines Workflows öffnen. So können Fehler schneller nachvollzogen werden, ohne die Bearbeitungsansicht verlassen zu müssen.

![direct log in workflow](/assets/changelog/2-2/direct-log-in-workflow.png)

## <span style="color:#0b5394">**Verschiedenes**</span>

### <span style="color:#0b5394">**Erweitertes Key-Management für die BigQuery-Anbindung**</span>

Für die BigQuery-Anbindung wurde das Key-Management erweitert: Statt eines zentralen Keys können nun bis zu fünf individuelle Keys erstellt und gezielt verwendet werden. Das erhöht Sicherheit und Flexibilität, da Zugriffe besser getrennt und verwaltet werden können.

Aus Sicherheitsgründen werden Keys künftig ausschließlich einmalig bei der Erstellung angezeigt und sollten daher eigenverantwortlich – idealerweise im eigenen Secret-Management – gespeichert werden.

## <span style="color:#0b5394">**Weitere Änderungen**</span>

-   Abstände zwischen Schaltflächen in Univelop 2 korrigiert
-   Datensatzlisten werden auf breiten Bildschirmen nicht mehr unnötig gestreckt
-   Datumsspanne in Suchergebnissen wird nun korrekt angezeigt
-   Fehlerbildschirm beim Ändern des Empfängermodus im „Benachrichtigung senden"-Schritt behoben
-   Fehler bei der Auswertung von Variablen in bestimmten Ausdrücken behoben
-   Fehlerbildschirm nach der Anmeldung in bestimmten Fällen behoben
-   Verschachtelte Wiederholungsblöcke in XML-Ausdrücken werden nun korrekt aufgelöst
