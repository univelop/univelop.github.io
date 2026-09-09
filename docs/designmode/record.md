---
layout: title
title: Eintrag
parent: Designmodi
nav_order: 2
---

Im Eintrags-Designmodus wird die Struktur eines Datensatzes festgelegt. Hier werden Bausteine hinzugefügt, angeordnet und konfiguriert.

## Designmodus öffnen

Den Eintrags-Designmodus erreicht man über zwei Wege:

1. Im [Arbeitsbereich-Designmodus](/docs/designmode/workspace) eine Kachel auswählen und **Designmodus der Einträge** klicken.
2. Einen Datensatz öffnen und oben rechts das **Stift-Symbol** (Designmodus) klicken.

## Bausteine hinzufügen

Auf der linken Seite werden alle verfügbaren Bausteine angezeigt. Per **Drag-and-Drop** können Bausteine in den Datensatz in der Mitte gezogen werden. Die Reihenfolge der Bausteine lässt sich ebenfalls per Drag-and-Drop ändern.

## Bausteineinstellungen

Wird ein Baustein im Designmodus ausgewählt, erscheinen rechts die Einstellungen. Die für alle Bausteine gemeinsamen Einstellungen sind unter [Allgemeine Baustein-Einstellungen](/docs/bricks/common-settings) beschrieben.

Zusätzlich stehen folgende Aktionen zur Verfügung:

1. **Pflichtfeld** — legt fest, ob der Baustein beim Verlassen des Datensatzes einen Wert enthalten muss
2. **Nur Lesen** — blockiert Schreibrechte. Über Bedingungen kann festgelegt werden, wann der Baustein trotzdem bearbeitbar ist (z. B. `benutzerrolle = 'Admin'` oder `status = 'Offen'`)
3. **Baustein verstecken** — blendet den Baustein aus. Über Bedingungen kann gesteuert werden, wann er sichtbar wird
4. **In Schnellerfassung verstecken** — blendet den Baustein in der Schnellerfassung aus, um die Eingabemaske zu vereinfachen
5. **Baustein sperren/entsperren** — schützt die Einstellungen des Bausteins vor versehentlichen Änderungen. Beim Sperren muss eine Begründung angegeben werden, damit andere Admins den Grund der Sperrung nachvollziehen können
6. **In anderen Tab verschieben** — verschiebt den Baustein in einen anderen Tab (wird nur angezeigt, wenn Tabs aktiviert sind)
7. **Duplizieren** — erstellt eine Kopie des Bausteins. Der technische Name der Kopie erhält den Zusatz "2" und sollte nach dem Duplizieren angepasst werden
8. **Löschen** — entfernt den Baustein aus dem Datensatz

## Titel

Klickt man im Designmodus auf den Titel, werden Einstellungen für den Datensatz-Titel angezeigt. Der Titel kann aus bis zu drei Bausteinen, einem frei wählbaren Text und Trennzeichen bestehen. Er wird am oberen Bildschirmrand angezeigt, wenn ein Eintrag geöffnet ist.

## Tabs

Unter der Titel-Einstellung können Tabs aktiviert werden. Tabs unterteilen den Datensatz in mehrere Abschnitte, zwischen denen der Benutzer wechseln kann. Nach der Aktivierung können Tabs hinzugefügt und Bausteine den jeweiligen Tabs zugeordnet werden.

## Sekundärschlüssel

Sekundärschlüssel definieren, welche Bausteine unter den Einträgen einer Liste immer einzigartig sein müssen. Es können bis zu drei Bausteine festgelegt werden, die in Kombination eine einzigartige Kombination ergeben müssen. Einträge mit doppelten Sekundärschlüsseln werden als solche markiert und in der Listenansicht hervorgehoben.

## Regeln verwalten

Über **Regeln verwalten** in der rechten Einstellungsleiste können Regel-Workflows erstellt werden. Weitere Informationen dazu finden sich unter [Regeln](/docs/rules).
