---
layout: workflow-step
title: Erstelle einen neuen Kommentar
parent: Erweitert
grand_parent: Workflows
icon: add_comment
nav_order: 7
redirect_from:
    - /docs/workflows/record-editing/create-comment.html
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
   Der Verfasser des Kommentars, angegeben als Nutzer-ID, Mitglieds-ID oder E-Mail-Adresse. Bleibt die Einstellung leer, wird der Kommentar als _Admin Service Account_ verfasst und im Kommentar-Baustein auch so angezeigt. Lässt sich ein angegebener Wert keinem Nutzer zuordnen, bricht der Workflow mit einem Fehler ab, anstatt den Kommentar einem falschen Verfasser zuzuschreiben.
1. <span style="color:#0b5394">**Kommentar (Text)**</span>
   Der Text des Kommentars. Der Text wird so geschrieben, wie er eingegeben wird; Werte aus dem Workflow werden mit `${...}` eingesetzt, z. B. `Freigegeben von ${bestellungen.pruefer_id}`.
1. <span style="color:#0b5394">**Geschrieben am (Datum)**</span>
   Der Zeitpunkt, der als Verfassungszeitpunkt des Kommentars gespeichert wird. Bleibt die Einstellung leer, wird der Zeitpunkt der Ausführung verwendet. Nützlich, wenn Kommentare aus einer bestehenden Quelle übernommen werden und ihr ursprüngliches Datum behalten sollen.
1. <span style="color:#0b5394">**Benachrichtigung an Erwähnte Nutzer verschicken (Ja/Nein)**</span>
   Ist diese Option auf Ja gesetzt, erhalten die im Kommentar erwähnten Nutzer eine Benachrichtigung. Der Verfasser selbst erhält nie eine Benachrichtigung über seinen eigenen Kommentar.
   Standardmäßig ist die Option aus, damit ein Workflow, der viele Kommentare schreibt, nicht für jeden einzelnen eine Benachrichtigung verschickt.

### <span style="color:#0b5394">**Nutzer erwähnen**</span>

Ein Nutzer wird im Workflow als Verweis in eckigen Klammern erwähnt: `@[` gefolgt von der Kennung des Nutzers und `]`. Die Klammern beenden den Verweis, sodass ein Satzzeichen dahinter nicht mehr dazugehört und eine E-Mail-Adresse ihr eigenes `@` behalten kann.

In den Klammern sind drei Kennungen möglich:

1. **E-Mail-Adresse**: `@[max.mustermann@firma.de]` — die Form, die auch der [Iteriere über Kommentare](iterate-comments.md) Baustein ausgibt, und damit die für den Austausch zwischen Arbeitsbereichen.
1. **Nutzer-ID**: `@[${bestellungen.pruefer_id}]` — die Form für Werte aus dem Workflow.
1. **Mitglieds-ID**: die ID des Mitglieds-Eintrages.

Der Name aus der Eingabemaske — `max_mustermann` — ist **keine** Kennung für den Workflow: er wird aus Vor- und Nachname errechnet und nirgends gespeichert, ist also nicht suchbar. In Klammern führt er zum Fehler, ohne Klammern bleibt er gewöhnlicher Text.

Erwähnt werden können alle Nutzer des Arbeitsbereichs. Findet sich zu einer Kennung kein Nutzer, bricht der Workflow mit einem Fehler ab. Die Klammern dienen dabei als eindeutige Kennzeichnung, dass an dieser Stelle ein Benutzerverweis erwartet wird. So fallen Tippfehler nicht unbemerkt als gewöhnlicher Text im Kommentar auf. Dasselbe gilt für einen leeren Verweis, wie er entsteht, wenn die Variable in @[${bestellungen.pruefer_id}] keinen Wert hat.

Im Kommentar-Baustein selbst bleibt die Eingabe unverändert: dort wird ein Nutzer weiterhin über die Vorschlagsliste mit `@name` erwähnt. Nur der Workflow-Baustein verlangt die Klammern.

Der [Iteriere über Kommentare](iterate-comments.md) Baustein gibt Erwähnungen in genau dieser Klammer-Schreibweise aus, mit der E-Mail-Adresse als Kennung. Ein Kommentar, der aus einem gelesenen Kommentar geschrieben wird, erwähnt damit dieselben Nutzer — und benachrichtigt sie erneut, wenn die Benachrichtigung eingeschaltet ist.
