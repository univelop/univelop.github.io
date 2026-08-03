---
layout: workflow-step
title: Iteriere über Kommentare
parent: Einträge laden
grand_parent: Workflows
icon: forum
nav_order: 6
redirect_from:
    - /docs/workflows/load-records/iterate-comments.html
---

Mit dem Baustein _Iteriere über Kommentare_ werden die folgenden Workflow-Bausteine für jeden Kommentar eines [Kommentar-Bausteins](../../bricks/advanced/comments.md) einmal ausgeführt. Ohne Filter wird der gesamte Verlauf durchlaufen, neueste zuerst.

Iteriert werden die Kommentare eines bestimmten Kommentar-Bausteins eines bestimmten Eintrages. Deshalb müssen Liste, Baustein und Eintrag-ID gemeinsam angegeben werden. Wie viele Kommentare gefunden wurden, steht im Workflow-Log.

Gelöschte Kommentare werden nie durchlaufen. Ein Kommentar, der nach Ablauf der Bearbeitungszeit gelöscht wird, bleibt technisch erhalten und ist nur als gelöscht markiert — für den Baustein ist er dennoch nicht vorhanden.

### <span style="color:#0b5394">**Einstellungen**</span>

1. <span style="color:#0b5394">**Technischer Name**</span>
   Über diesen Namen werden die Werte des aktuellen Kommentars in den folgenden Workflow-Bausteinen referenziert, bspw. `kommentar.text`.
1. <span style="color:#0b5394">**Verknüpfen mit Liste**</span>
   Die Liste, zu der der Eintrag mit dem Kommentar-Baustein gehört.
1. <span style="color:#0b5394">**Verknüpfung mit Baustein**</span>
   Der Kommentar-Baustein, dessen Kommentare durchlaufen werden, ausgewählt über seine Bezeichnung. Angeboten werden nur die Kommentar-Bausteine der gewählten Liste.
1. <span style="color:#0b5394">**Datensatz-ID (Text)**</span>
   Die ID des Eintrages, dessen Kommentare durchlaufen werden.

### <span style="color:#0b5394">**Filter**</span>

1. <span style="color:#0b5394">**Geschrieben von (Text)**</span>
   Nur Kommentare eines bestimmten Verfassers durchlaufen, angegeben als Nutzer-ID, Mitglieds-ID oder E-Mail-Adresse. Bleibt die Einstellung leer, werden die Kommentare aller Verfasser durchlaufen.
1. <span style="color:#0b5394">**Geschrieben nach (Datum)**</span>
   Nur Kommentare durchlaufen, die nach diesem Zeitpunkt geschrieben wurden.
1. <span style="color:#0b5394">**Geschrieben vor (Datum)**</span>
   Nur Kommentare durchlaufen, die vor diesem Zeitpunkt geschrieben wurden.

### <span style="color:#0b5394">**Verhalten**</span>

1. <span style="color:#0b5394">**Neueste zuerst (Ja/Nein)**</span>
   Bestimmt die Reihenfolge: Ja beginnt beim neuesten Kommentar, Nein beim ältesten. Standardmäßig auf Ja.
1. <span style="color:#0b5394">**Bei Fehler fortsetzen (Ja/Nein)**</span>
   Ist diese Option auf Ja gesetzt, wird ein Fehler innerhalb eines Durchlaufs im Workflow-Log vermerkt und mit dem nächsten Kommentar weitergemacht, anstatt den Workflow abzubrechen.
1. <span style="color:#0b5394">**Abbruchbedingung (Ja/Nein)**</span>
   Eine Formel, die vor jedem Durchlauf geprüft wird. Ergibt sie Ja, wird die Iteration beendet und der Workflow nach dem Baustein fortgeführt, z. B. `kommentar.author_name = "Admin Serveraccount"`.

### <span style="color:#0b5394">**Variablen**</span>

Innerhalb der Iteration stehen die Werte des aktuellen Kommentars über den technischen Namen des Bausteins mit dem Punkt-Operator zur Verfügung. Die Beispiele gehen von dem technischen Namen `kommentar` aus.

1. **text**: Der Text des Kommentars, z. B. `kommentar.text`. Erwähnungen erscheinen darin als Name, so wie sie im Kommentar-Baustein angezeigt werden.
1. **author_name**: Der angezeigte Name des Verfassers, z. B. `kommentar.author_name`. Bei einem von einem Workflow verfassten Kommentar ist das _Admin Serveraccount_.
1. **author_id**: Die Nutzer-ID des Verfassers, z. B. `kommentar.author_id`. Geeignet, um denselben Nutzer in einem [Erstelle einen neuen Kommentar](../record-editing/create-comment.md) Baustein zu erwähnen.
1. **created_at**: Zeitpunkt, an dem der Kommentar geschrieben wurde.
1. **modified_at**: Zeitpunkt der letzten Änderung des Kommentars.

Der technische Name selbst — im Beispiel `kommentar` — steht für den Kommentar als Ganzes und sollte nicht direkt referenziert werden; die einzelnen Werte sind über den Punkt-Operator erreichbar.
