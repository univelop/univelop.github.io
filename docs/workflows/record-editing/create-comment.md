---
layout: workflow-step
title: Erstelle einen neuen Kommentar
parent: Einträge bearbeiten
grand_parent: Workflows
icon: add_comment
nav_order: 7
---

Über den Baustein _Erstelle einen neuen Kommentar_ wird ein Kommentar in einem [Kommentar-Baustein](../../bricks/advanced/comments.md) eines Eintrages verfasst. Der Kommentar erscheint dort genauso wie ein von Hand geschriebener, inklusive Verfasser, Datum und Uhrzeit.

Ein Kommentar gehört immer zu einem bestimmten Kommentar-Baustein eines bestimmten Eintrages. Deshalb müssen Liste, Baustein und Eintrag-ID gemeinsam angegeben werden.

### <span style="color:#0b5394">**Einstellungen**</span>

1. <span style="color:#0b5394">**Verknüpfen mit Liste**</span>
   Die Liste, zu der der Eintrag mit dem Kommentar-Baustein gehört.
1. <span style="color:#0b5394">**Verknüpfung mit Baustein**</span>
   Der Kommentar-Baustein, in dem der Kommentar erstellt wird, ausgewählt über seine Bezeichnung. Angeboten werden nur die Kommentar-Bausteine der gewählten Liste. Wird die Liste nachträglich gewechselt, muss der Baustein neu gewählt werden.
1. <span style="color:#0b5394">**Datensatz-ID (Text)**</span>
   Die ID des Eintrages, an dem der Kommentar hängt, z. B. `bestellungen.id` innerhalb einer Iteration.
1. <span style="color:#0b5394">**Autor (Text)**</span>
   Der Verfasser des Kommentars, angegeben als Nutzer-ID, Mitglieds-ID oder E-Mail-Adresse. Bleibt die Einstellung leer, wird der Kommentar als Admin Serveraccount verfasst und im Kommentar-Baustein auch so angezeigt. Lässt sich ein angegebener Wert keinem Nutzer zuordnen, bricht der Workflow mit einem Fehler ab, anstatt den Kommentar einem falschen Verfasser zuzuschreiben.
1. <span style="color:#0b5394">**Kommentar (Text)**</span>
   Der Text des Kommentars. Der Text wird so geschrieben, wie er eingegeben wird; Werte aus dem Workflow werden mit `${...}` eingesetzt, z. B. `Freigegeben von ${bestellungen.pruefer}`.
1. <span style="color:#0b5394">**Geschrieben am (Datum)**</span>
   Der Zeitpunkt, der als Verfassungszeitpunkt des Kommentars gespeichert wird. Bleibt die Einstellung leer, wird der Zeitpunkt der Ausführung verwendet. Nützlich, wenn Kommentare aus einer bestehenden Quelle übernommen werden und ihr ursprüngliches Datum behalten sollen.
1. <span style="color:#0b5394">**Benachrichtigung an Erwähnte Nutzer verschicken (Ja/Nein)**</span>
   Ist diese Option auf Ja gesetzt, erhalten die im Kommentar erwähnten Nutzer eine Benachrichtigung. Nutzer, die den Eintrag lediglich abonniert haben, werden nicht benachrichtigt — wie bei den übrigen Bausteinen, die Einträge bearbeiten. Der Verfasser selbst erhält nie eine Benachrichtigung über seinen eigenen Kommentar.
   Standardmäßig ist die Option aus, damit ein Workflow, der viele Kommentare schreibt, nicht für jeden einzelnen eine Benachrichtigung verschickt.

### <span style="color:#0b5394">**Nutzer erwähnen**</span>

Wie im Kommentar-Baustein selbst wird ein Nutzer mit `@` direkt gefolgt von seiner Kennung erwähnt. Im Workflow sind dabei drei Formen möglich, damit die Erwähnung auch aus einer Variable gebaut werden kann:

1. **Name**: `@max_mustermann` — dieselbe Schreibweise, die auch die Eingabemaske im Kommentar-Baustein einfügt.
1. **Nutzer- oder Mitglieds-ID**: `@${bestellungen.pruefer}` — die Form für Werte aus dem Workflow.
1. **E-Mail-Adresse**: `@max.mustermann@firma.de`

Erwähnt werden können alle aktiven Mitglieder des Arbeitsbereiches. Findet sich zu einer Kennung kein Mitglied, bleibt der Text unverändert als gewöhnlicher Text im Kommentar stehen, und es wird niemand benachrichtigt.
