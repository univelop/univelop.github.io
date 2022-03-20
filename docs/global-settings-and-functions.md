---
layout: default
title: Zusätzliche globale Einstellungen und Funktionen
nav_order: 6
---

# <span style="color:#0b5394">Zusätzliche globale Einstellungen und Funktionen</span>

## <span style="color:#0b5394">Mitglieder</span>

Ein Mitglied ist eine Person, die mit Ihnen zusammen auf den Arbeitsbereich Zugriff hat.
Mitglied wird jemand, der einen Einladungslink zum Arbeitsbereich erhalten hat.

Die Mitgliederverwaltung öffnen Sie, indem Sie in der Übersicht, in welcher Sie alle Kacheln
sehen, auf die drei Punkte oben rechts drücken und `Mitglieder` auswählen.
Hier sehen Sie sämtliche Mitglieder Ihres Arbeitsbereichs, sowie die hinterlegten Rollen
und Teams je Mitglied.

Sie haben hier die Möglichkeit Rollen und Teams zu ändern, sowie den Zugriff auf Ihren Arbeitsbereich
zu löschen. Diese Einstellungen können Sie über die drei Punkte neben dem Namen vornehmen.
Weiterhin haben Sie hier die Möglichkeit nach Mitgliedern zu suchen und den Einladungslink 
über den Button "Link teilen" in die Zwischenablage zu kopieren.
Wenn Sie den Link versenden, kann die Person, die den Link erhält, diesen anklicken
und gelangt in Ihren Arbeitsbereich.

Mitglieder haben immer eine Standardrolle, welche Sie unter Rollen einstellen können.
Die Person, die den Arbeitsbereich erstellt hat, wird als Besitzer deklariert und
hat in dieser Rolle gleichzeitig uneingeschränkten Zugriff auf alle Daten des
Arbeitsbereichs. Das Team muss je Mitglied hinterlegt werden.

## <span style="color:#0b5394">Rollen</span>

In den `Rollen` Einstellungen können Sie verschiedene und individuelle Rollen Ihres Unternehmens,
bzw. Ihres Vorhabens zur Nutzung der App hinterlegen. Im Designmodus Ihres Arbeitsbereichs können Sie 
in den globalen Einstellungen die Rollen bearbeiten. Im Standard ist die Rolle "Teammmitglied" immer angelegt.

Durch das Klicken auf eine Rollen sehen Sie den Namen, die Einstellung Standardrolle (Ja/nein),
unterhalb davon die Rechte der Rolle und Sie haben die Möglichkeit die Rolle über die drei
Punkte oben rechts zu löschen oder zu duplizieren (wenn es ähnliche Rollen gibt).

Auf das Rechtemanagement gehen wir im späteren Abschnitt näher ein.

## <span style="color:#0b5394">Teams</span>

Sie können hier über den gleichen Weg, wie bei den Rollen, verschiedene Teams zu benennen und hinzufügen.
Diese Teams können Sie in den Datensätzen zunächst nur namentlich erfassen.

Sie haben jetzt die Möglichkeit Mitglieder des Arbeitsbereichs einem Team zuzuordnen. Je nach
Arbeitsbereich, Verantwortung, Position etc.

Zudem haben Sie die Möglichkeit über den Team Baustein einem Datensatz ein Team zuzuweisen.

## <span style="color:#0b5394">Rechte / Berechtigungen</span>

Sie haben Rollen und Teams angelegt, sowie den Mitgliedern bereits beides zugewiesen.
Jetzt können Sie über die Rollen den Zugriff auf Datensätze beschränken und Funktionen,
zum Beispiel Datenimport, nicht zulassen.

Das globale Rechtesystem in den Rollen greift immer auf ganze Kacheln zu.
Im Standard ist immer der Zugriff auf "Alle" Datensätze hinterlegt.
Sie können den Zugriff nun gefiltert zulassen, vom zugeordneten Team des Mitglieds,
eigenen Datensätzen oder keinen Zugriff erlauben.

Beim Zugriff auf "Keine" ist die Kachel für die Rolle nicht sichbar und
Datensätze und Datensatzverknüpfungen können nicht ausgewählt werden. Wenn Sie
partielle Zugriffe auf Einträge eines Datensatzes unsichtbar schalten möchten,
können Sie dies je Baustein machen, indem Sie den Baustein verstecken und unter
Bedingungen anzeigen wähle - Hier haben Sie die Möglichkeit über den Filter
Rollen zu wählen, die auf den Baustein Zugriff haben dürfen 
zum Beispiel: Rolle IN Admin, Besitzer, Controlling.

Für die Zugriffsrechte auf Meine und von meinem Team müssen Datensätze
mit dem Besitzer- und/oder Teambaustein jeweils zugeordnet werden.

Gefilterte Zugriffe sind ebenfalls möglich. Hier kann je Kachel ein
Filter gesetzt werden welche Rolle welche Datensätze sehen soll / darf.
Zum Beispiel Status = Reklamation, Rolle = Reklamationsabteilung.

Die gleichen Filter können für das Bearbeiten und Löschen gewählt werden.
Das Anlegen von Datensätzen erlauben Sie über den Switch "Anlegen erlauben".

Der Switch "Import erlauben" gibt oder nimmt das Recht Excel-Dateien mit
Datensätzen zu importieren. Sofern es sich nicht um besonders intensiv geschultes
Personal handelt, empfehlen wir den Import nicht zuzulassen.

## <span style="color:#0b5394">Benachrichtigungen</span>

Sie können sich Benachrichtigungen für Änderungen an Datensätzen anzeigen lassen.
Die Benachrichtigung ist eine rot eingekreiste Zahl auf der Kachel,
welche die Anzahl der neuen Datensätze oder Änderungen beinhaltet. Beim Klick in
die Kachel ist der jeweilige Datensatz mit einem roten Punkt markiert.

Sie können in den Kacheleinstellungen die Benachrichtigungen je Kachel für alle
Nutzer aktivieren. Zudem haben Sie die Möglichkeit die Benachrichtigungen in der Kachel
über das Glockensymbol zu aktivieren oder deaktivieren. Wenn Sie über Änderungen in der
Liste benachrichtigt werden möchten, können Sie dies über die drei Punkte innerhalb
der Kachel aktivieren oder deaktivieren.

## <span style="color:#0b5394">Filtern und Sortieren</span>

Sie können die Sortierung der Kachelinhalte global je Kachel auf- und absteigend nach einem
bestimmten Baustein ändern. Gleiches gilt für verknüpfte Datensätze. Bei der Ausgabe von
verknüpften Datensätzen über die repeat Funktion werden die Daten in der
sortierten Reihenfolge ausgegeben.

Für die Filterung von Daten können Sie sich über die Filter <, >, <=, >=, = oder IN die
entsprechenden Filter setzen. Das "IN" bedeutet soviel wie oder =. Es erlaubt also einen
Mehrfachzugriff. Die Werte erhalten Sie mit Wahl des angesprochenen Baustein, IN und
in Spalte drei setzen Sie die anzusprechenden Werte, welche Sie mit Komma Leerzeichen trennen.
Als Beispiel möchten Sie die Daten aus drei Teams abrufen, also wählen Sie Team IN Nord, West, Ost.

## <span style="color:#0b5394">Suchen</span>

Mit dem Lupen Symbol können Sie innerhalb der Datensatzliste oder verknüpften Datensatz Liste
nach Inhalten aus der angesprochenen Liste suchen. Die Suche umfasst dabei alle Werte innerhalb eines
Datensatzes.

Die Sortierung erfolgt so, dass zuerst die genauen Suchergebnisse ausgegeben werden und im Anschluss
ähnliche Werte.

## <span style="color:#0b5394">Gespeicherte Ansichten / Eigene Kacheln</span>

Wenn Sie sich innerhalb einer gemeinsamen Kachel befinden, interessieren Sie vielleicht nicht
alle Datensätze der Liste oder Sie möchten mit Filterkacheln arbeiten, zum Beispiel nach
verschiedenen Stati.

Sie haben die Möglichkeit in der gemeinsamen Kachel Filter zu setzen und über das Speichern
Symbol dies als eigene Liste zu speichern (oder für alle zu speichern). Dieser eigenen Kachel
können Sie einen aussagekräftigen Namen geben. Beachten Sie hierbei, dass Sie, wenn Sie auf die Filterkachel
zugreifen, in der Hauptkachel arbeiten und Ihnen nur die gefilterten Inhalte angezeigt werden.

Es besteht die Möglichkeit hierüber workflows zu generieren. Zum Beispiel filtern Sie sich die
Auftrags-Kachel nach Status offen und speichern dies im Arbeitsbereich als eigene "Offene Aufträge" Kachel
ab. So haben Sie alle offenen Aufträge immer im Blick.

Bitte beachten Sie, dass wenn Sie mit einer Filterkachel arbeiten und neue Datensätze anlegen
die gesetzten Filter für die neuen Datensätze mit angelegt werden. Wenn Sie dies nicht wünschen,
empfehlen wir Ihnen über die Hauptkachel zu arbeiten. Sie können dies jedoch auch als Arbeitserleichterung
nutzen und mit der Filterkachel für Sie bestimmte Standarddatensätze filtern und somit
neue Datensätze anlegen, welche bereits Ihre Standardinhalte enthalten.