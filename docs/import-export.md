---
layout: default
title: Import und Export
nav_order: 7
---

# Import und Export

## Arbeitsbereiche

Sie haben die Möglichkeit ganze Arbeitsbereiche zu exportieren und wieder zu importieren.
Wenn Sie sich im Designmodus des Homescreens Ihres Arbeitsbereichs befinden, können Sie dort
rechts den Namen des Arbeitsbereichs anpassen, aber auch ganz unten den gesamten Arbeitsbereich
exportieren. Wenn Sie dies tun wird eine ZIP-Datei heruntergeladen.

Nun können Sie mit dem Haus Button (Bearbeitungsmodus Homescreen) den Arbeitsbereich wechseln
oder ganz unten "+ Neuer Arbeitsbereich" anwählen. Wenn Sie diesen Weg gehen, haben Sie die Möglichkeit
mit der Demo zu starten, einen eigenen Bereich zu erstellen, oder einen Arbeitsbereich zu importieren.
Sie wählen den Import aus und navigieren zur heruntergeladenen ZIP-Datei, welche Sie nun einlesen können.

## Kacheln

Wenn Sie nicht gleich einen ganzen Arbeitsbereich einlesen möchten, können Sie alternativ auch nur einzelne Kacheln
exportieren und importieren. Dies ist besonders da sinnvoll, wo Sie mit mehreren Arbeitsbereichen innerhalb einer
Organisation arbeiten oder Standard-Kacheln haben, welche Sie auf andere Umgebungen übertragen möchten.
Hier sind vor allem Kacheln zu nennen, die keine oder nur geringe Datensatz-Verknüpfungen haben, welche Sie
u.U. wieder herstellen müssten. Solche Kacheln beinhalten meistens Stammdaten, wie zum Beispiel Kunden, Mitarbeiter o.ä.

Im Kachel-Designmodus finden Sie ganz unten rechts den Button exportieren (Wie beim Export von Arbeitsbereichen).
Sie erhalten eine .json Datei, in welcher sich der Quellcode befindet. Nun können Sie zum gewünschten
Arbeitsbereich navigieren, welchen Sie für den Import nutzen möchten. Dort wählen Sie im Designmodus des Homescreens
auf der linken Seite die Option "Kachel importieren" und wählen die gewünschte .json Datei aus.

Bitte beachten Sie hierbei folgende Dinge:

    - Verknüpfungen werden u.U. nicht übernommen, wenn Sie die gleichen Kachelbezeichnungen
    und Inhalte nicht auch im neuen Arbeitsbereich haben.
    - Daten / Inhalte werden nicht übernommen, aber auch nicht überschrieben.
    - Word-Vorlagen werden nicht übernommen.
    - Sie können immer nur in eine Richtung importieren / exportieren. Wenn Sie also
    einen Workspace haben, der zentral alle Kacheln Ihrer Organisation beinhaltet, 
    können Sie nicht aus einem anderen Arbeitsbereich heraus in diese Umgebung importieren.

## Datensätze und Inhalte

Sie können auch Datensätze importieren und exportieren. Dies ist besonders dann sinnvoll,
wenn Sie viele Datensätze und Stammdaten eingeben möchten. Sie sollten dies nur als fortgeschrittener Nutzer tun.
Der Im- und Export passiert immer im Bearbeitungsmodus über die drei Punkte der Listenansicht.
Die Ein- und Ausgabedatei ist im Excel-Format. Sämtliche Hinweise nach den Szenarien.

Es gibt hierbei zwei Szenarien:

    1. Erstimport von Daten
    Sie haben eine Menge Daten, welche Sie in die Univelop App überführen möchten.
    Sie haben bereits eine Liste angelegt, welche Ihre Datenstruktur wiederspiegelt.
    Bitte legen Sie einen Dummy-Datensatz an und füllen diesen mit Leben.
    Im nächsten Schritt exportieren Sie diesen Datensatz.
    Nun können Sie Ihre Daten in die exportierte Datei kopieren. 
    Den Dummy Datensatz können Sie mit Zeile löschen aus der zu importierenden Datei
    wieder löschen. Wenn Sie alle Daten eingetragen haben speichern Sie die Excel Datei
    und wählen in Univelop den Schritt von Excel importieren. Das Dokument wird geprüft
    und ein Pop-Up erscheint, welches Ihnen mitteilt wie viele Datensätze zum Import
    gefunden wurden.

    2. Aktualisierung von Daten
    Sie haben bereits viele Daten in einer Liste und möchten hier nur bestimmte Dinge ändern,
    es wäre aber zu aufwendig dies bei allen Datensätzen einzeln zu machen.
    Auch hier exportieren Sie nun alle Datensätze. Wir empfehlen nun sämtliche Zeilen und Spalten
    zu löschen, welche nicht betroffen sind.

    ACHTUNG! Die ID (letzte Spalte) muss immer stehen bleiben!

    Nun ändern Sie alle Daten, welche Sie ändern möchten, speichern die Datei und
    wählen in der APP "von Excel importieren" aus. Ein Pop-Up erscheint, welches Ihnen 
    mitteilt wie viele Datensätze zum Import / zur Aktualisierung gefunden wurden.

### Wichtige Hinweise zum Excel Im- und Export

- Die ID eines Datensatzes (letzte Spalte) ist einzigartig. Über diese weiß
das System, welcher Datensatz gemeint ist. Wenn Sie Daten ohne ID importieren,
werden neue Daten angelegt.
- Wir empfehlen vor jedem Import einen Export. So sind alle Spalten richtig benannt.
Zudem haben wir festgestellt, dass die Zuordnung in der APP so besser funktioniert.
- Passen Sie die Spaltenbreiten an den Inhalt an. Markieren alle Datensätze über
das Quadrat zwischen 1 und A. Dann Doppelklick auf eine Spaltentrennung, z.B. zwischen 1 und 2.
- Sichern Sie Ihre Daten immer, sodass Sie diese im Zweifel wieder herstellen könnten.

Leider sind wir beim Im- und Export vom Excel-Package abhängig und das System vertauscht
in dieser Kombination mit Excel hin und wieder Spalten. Daher empfehlen wir immer alle unnötigen
Zeilen und Spalten zu löschen. Kommen Sie bei Fragen gerne auf uns zu, wir stehen Ihnen gerne mit
Rat und Tat zur Seite.